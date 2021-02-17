module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-background": "url('/images/bg.png')",
      }),

      height: {
        750: "750px",
        500: "500px",
        1360: "1360px",
        1038: "1038px",
        200: "200px",
        70: "70px",
        60: "60px",
        4: "4px",
        180: "180px",
        24: "24px",
        18: "18px",
        10: "10px",
      },

      width: {
        1360: "1360px",
        1038: "1038px",
      },

      padding: {
        283: "283px",
      },

      margin: {
        283: "283px",
      },

      borderRadius: {
        4: "4px",
      },

      fontFamily: {
        SourceSansBold: ["SSBOLD", "sans-serif"],
      },
      fontSize: {
        14: "14px",
      },

      variants: {
        extend: {},
      },
      plugins: [],
    },
  },
};
