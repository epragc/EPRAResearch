/* ============================================================================
   EPRA RESEARCH / CONFERENCE HUB / CONTENT FILE
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to add documents and links.
   You do not need to touch index.html.

   HOW TO ADD AN ITEM
   ------------------
   Find the section you want, and add an object inside its `items: [ ]` list:

       {
         title: "Investment portfolio insights 2012-2026",
         description: "Full slide deck, 8 slides.",
         href: "docs/portfolio-insights-2012-2026.pdf",
         type: "pdf",          // pdf | pptx | xlsx | link | video | data
         meta: "PDF · 2.4 MB"  // optional small label
       },

   - For a FILE: drop the file into the /docs folder and set
     href: "docs/your-file-name.pdf"
   - For a WEB LINK: set the full address,
     href: "https://www.epra.com/..."

   Mind the commas: every item ends with a comma, and every property
   inside an item ends with a comma except the last one.

   TO REORDER SECTIONS: move the whole { ... } block up or down in the list.

   `accent` sets the colour of the box's left border. All three are EPRA
   brand colours: "blue" (#69AAF3), "grey" (#C6C5C2), "gold" (#EBA61C).

   KEEP THE DESCRIPTIONS SHORT (one or two lines). The page is built so all
   three boxes fit on a single screen without scrolling.
   ========================================================================== */

window.EPRA_HUB = {

  /* ---- Page header ------------------------------------------------------ */
  /* The EPRA mark sits next to this title, vertically centred on it. */
  event: {
    title: "EPRA Research",
    tagline: "Discover our new projects!",
  },

  /* ---- Footer ----------------------------------------------------------- */
  footer: {
    contact: "research@epra.com",
  },

  /* ---- The three sections ----------------------------------------------- */
  sections: [

    {
      id: "portfolio-insights",
      accent: "blue",
      title: "Investment portfolio insights: 2012-2026",
      description:
        "Thirteen years of European listed real estate portfolios, by country and by sector.",
      items: [
        {
          title: "Listed real estate: Investment Portfolio Insights",
          href: "https://bit.ly/4cN6BJm",
          type: "pdf",
        },
      ],
    },

    {
      id: "tmt-platform",
      accent: "grey",
      title: "Discover the new EPRA TMT platform!",
      description:
        "Index data, company coverage and market analytics, all in one place.",
      items: [
        {
          title: "Access the platform here",
          href: "https://bit.ly/4gDzLMa",
          type: "link",
        },
      ],
    },

    {
      id: "epra-inrev",
      accent: "gold",
      layout: "row",          // Part 1 and Part 2 side by side
      title: "EPRA & INREV: One Real Estate Universe",
      description:
        "Listed and non-listed real estate brought into one comparable view.",
      items: [
        {
          title: "Part 1",
          href: "https://bit.ly/4vTmN3a",
          type: "link",
        },
        {
          title: "Part 2",
          href: "https://bit.ly/4i4HftX",
          type: "link",
        },
      ],
    },

  ],
};
