"""
EPRA Research conference hub: QR code generator.

Regenerate the QR code any time the URL changes:

    pip install segno
    python make_qr.py https://research.epra.com/

Outputs, next to this script:
    epra-conference-qr.svg  -> vector, use this in PowerPoint / print
    epra-conference-qr.png  -> 2000 px raster, use this if SVG is awkward
    epra-conference-qr-slide.svg -> EPRA-blue card, "Scan for the full
                                    documents" / "EPRA Research", slide-ready.
                                    Captions use Overpass Light: install the
                                    free font locally or PowerPoint will
                                    substitute Arial.
"""

import sys
import os
import segno

# --- EPRA Brand Identity (official) -----------------------------------------
EPRA_PRIMARY = "#12497F"     # primary blue
EPRA_LIGHT_BLUE = "#69AAF3"  # sub-caption on blue
# Overpass Light is the house font for this page and its QR code.
EPRA_FONT_STACK = "Overpass Light, Overpass, Franklin Gothic Book, Arial, sans-serif"
EPRA_FONT_WEIGHT = "300"

# Custom domain for the GitHub Pages site (github.com/epragc/EPRAResearch)
DEFAULT_URL = "https://research.epra.com/"

HERE = os.path.dirname(os.path.abspath(__file__))


def build(url: str) -> None:
    # error="h" = highest error correction (~30%), so the code still scans
    # from a distance, at an angle, or with a logo placed over the centre.
    qr = segno.make(url, error="h")

    svg_path = os.path.join(HERE, "epra-conference-qr.svg")
    png_path = os.path.join(HERE, "epra-conference-qr.png")
    slide_path = os.path.join(HERE, "epra-conference-qr-slide.svg")

    qr.save(svg_path, scale=10, border=4, dark=EPRA_PRIMARY, light="#FFFFFF")
    qr.save(png_path, scale=40, border=4, dark=EPRA_PRIMARY, light="#FFFFFF")

    # --- slide-ready version: QR + caption, EPRA branded --------------------
    # Build the module geometry by hand as a single <path>. (segno's
    # svg_inline() emits its own <svg> element, which cannot be nested
    # inside a composed drawing without it resizing to the viewport.)
    unit = 10
    rows = qr.matrix
    n = len(rows)
    modules = n * unit  # px width/height of the raw code, no border

    d = []
    for r, row in enumerate(rows):
        y = r * unit
        c = 0
        while c < n:
            if row[c]:
                run = 0
                while c + run < n and row[c + run]:
                    run += 1
                d.append(f"M{c * unit} {y}h{run * unit}v{unit}h{-run * unit}z")
                c += run
            else:
                c += 1
    inner = f'    <path d="{"".join(d)}" fill="{EPRA_PRIMARY}"/>'

    # EPRA-blue card, with the code sitting on a white tile. The modules stay
    # dark-on-light: inverted QR codes (light modules on a dark ground) are
    # read unreliably by a good number of phone cameras, and this one has to
    # work first time, from across a room.
    quiet = 30          # white quiet zone around the code - required to scan
    tile = modules + quiet * 2
    pad = 46            # blue margin around the white tile
    caption_h = 118
    w = tile + pad * 2
    h = tile + pad * 2 + caption_h
    cx = w / 2

    slide = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}"
     viewBox="0 0 {w} {h}" role="img"
     aria-label="QR code linking to the EPRA Research documents">
  <rect width="{w}" height="{h}" fill="{EPRA_PRIMARY}" rx="20"/>
  <rect x="{pad}" y="{pad}" width="{tile}" height="{tile}" fill="#FFFFFF" rx="12"/>
  <g transform="translate({pad + quiet},{pad + quiet})">
{inner}
  </g>
  <text x="{cx}" y="{tile + pad + 56}" text-anchor="middle"
        font-family="{EPRA_FONT_STACK}" font-size="32" font-weight="{EPRA_FONT_WEIGHT}"
        letter-spacing="0.4" fill="#FFFFFF">Scan for the full documents</text>
  <text x="{cx}" y="{tile + pad + 90}" text-anchor="middle"
        font-family="{EPRA_FONT_STACK}" font-size="22" font-weight="{EPRA_FONT_WEIGHT}"
        letter-spacing="1.2" fill="{EPRA_LIGHT_BLUE}">EPRA Research</text>
</svg>
"""
    with open(slide_path, "w", encoding="utf-8") as f:
        f.write(slide)

    print(f"URL encoded : {url}")
    print(f"  {svg_path}")
    print(f"  {png_path}")
    print(f"  {slide_path}")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL)
