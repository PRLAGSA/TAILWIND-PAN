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
        20: "20px",
        18: "18px",
      },

      padding: {
        283: "283px",
        10: "10px",
        60: "60px",
        5: "5px",
        4: "4px",
        3: "3px",
        2: "2px",
        1: "1px",
      },

      margin: {
        283: "283px",
        263: "263px",
        60: "60px",
        50: "50px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
      },

      borderRadius: {
        4: "4px",
      },

      borderWidth: {
        10: "10px",
      },

      fontFamily: {
        SourceSansBold: ["SSBOLD", "sans-serif"],
      },
      fontSize: {
        14: "14px",
        13: "13px",
        12: "12px",
        11: "11px",
        10: "10px",
        8: "8px",
      },

      lineHeight: {
        18: "18px",
      },

      textColor: (theme) => theme("colors"),
      textColor: {
        menuTextColor: "#002868",
      },

      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        logoBorderColor: "#AB0427",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),

      variants: {
        extend: {},
      },
      plugins: [],
    },
  },
};
