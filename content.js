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

  /* ---- "Email it to myself" button --------------------------------------
     Opens the visitor's own mail app with these fields pre-filled. The
     recipient is left blank so they type their own address.             */
  emailMe: {
    label:   "Email this dashboard to myself",
    subject: "EPRA Research - save the content for later",
    /* Real line breaks below are preserved in the email. */
    body:
`Hi there,

Thanks a lot for your interest in our research. We do hope you are enjoying the conference.

You can find the same dashboard at: https://research.epra.com/, this will allow you to access the content on your laptop once the conference is finished.

Please do not hesitate to get in touch with us at research@epra.com should you have any questions or wish to discuss our research further.

Best,
EPRA Research team`,
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
        "Check out the evolution of the investment property portfolios of " +
        "European property companies in the past thirteen years",
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
        "A new interactive platform covering 20+ years of data on listed " +
        "real estate markets around the world",
      items: [
        {
          title: "Check it out here",
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
        "Listed and non-listed real estate are different routes to the same " +
        "underlying asset class: Institutional-grade European commercial property.",
      items: [
        {
          title: "Part 1",
          href: "https://bit.ly/4vvvpgr",
          type: "link",
        },
        {
          title: "Part 2",
          href: "https://bit.ly/4vTmN3a",
          type: "link",
        },
      ],
    },

  ],
};
