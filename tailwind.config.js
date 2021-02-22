module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-background": "url('/images/bg.png')",
      }),
      screens: {
        xs: "475px",
        xxs: "360px",
      },

      height: {
        750: "750px",
        500: "500px",
        1360: "1360px",
        1038: "1038px",
        480: "480px",
        450: "450px",
        385: "385px",
        365: "365px",
        352: "352px",
        280: "280px",
        235: "235px",
        200: "200px",
        130: "130px",
        70: "70px",
        60: "60px",
        58: "58px",
        48: "48px",
        44: "44px",
        4: "4px",
        180: "180px",
        26: "26px",
        24: "24px",
        20: "20px",
        18: "18px",
        14: "14px",
        10: "10px",
      },

      width: {
        1360: "1360px",
        1078: "1078px",
        1038: "1038px",
        1014: "1014",
        600: "600px",
        450: "450px",
        385: "385px",
        365: "365px",
        330: "330px",
        320: "320px",
        300: "300px",
        280: "280px",
        230: "230px",
        219: "219px",
        198: "198px",
        180: "180px",
        24: "24px",
        20: "20px",
        28: "28px",
        18: "18px",
      },

      padding: {
        344: "344px",
        283: "283px",
        235: "235px",
        184: "184px",
        123: "123px",
        82: "82px",
        70: "70px",
        62: "62px",
        10: "10px",
        20: "20px",
        14: "14px",
        60: "62px",
        60: "60px",
        42: "42px",
        48: "48px",
        37: "37px",
        32: "32px",
        29: "29px",
        7: "7px",
        6: "6px",
        5: "5px",
        4: "4px",
        3: "3px",
        2: "2px",
        1: "1px",
      },

      margin: {
        688: "688px",
        344: "344px",
        283: "283px",
        256: "256px",
        255: "255px",
        217: "217px",
        210: "210px",
        263: "263px",
        245: "245px",
        175: "175px",
        136: "136px",
        110: "110px",
        95: "95px",
        80: "80px",
        60: "60px",
        50: "50px",
        45: "45px",
        44: "44px",
        38: "38px",
        30: "30px",
        7: "7px",
        6: "6px",
        5: "5px",
        4: "4px",
        3: "3px",
        2: "2px",
        10: "10px",
        17: "17px",
        15: "15px",
        14: "14px",
        12: "12px",
        10: "10px",
        22: "22px",
        20: "20px",
      },

      inset: {
        275: "275PX",
        245: "245px",
        243: "243px",
        140: "140px",
        110: "110px",
        90: "90px",

        38: "38px",
        14: "14px",
        13: "13px",
        12: "12px",
        10: "10px",
        7: "7px",
        2: "2px",
      },

      borderRadius: {
        4: "4px",
      },

      borderWidth: {
        10: "10px",
        6: "6px",
        5: "5px",
        2: "2px",
        1: "1px",
      },

      fontFamily: {
        SourceSansBold: ["SSBOLD", "sans-serif"],
        SourceSansReg: ["SSREG", "sans-serif"],
        PROXIMANOVAREGULAR: ["PROXIMANOVAREGULAR", "sans-serif"],
      },
      fontSize: {
        26: "26px",
        24: "24px",
        16: "16px",
        14: "14px",
        13: "13px",
        12: "12px",
        11: "11px",
        10: "10px",
        8: "8px",
      },
      opacity: {
        0.4: "0.4",
      },

      lineHeight: {
        18: "18px",
        32: "32px",
        25: "25px",
      },

      letterSpacing: {
        2: "2px",
      },
      screens: {
        xs: "475px",
      },

      boxShadow: {
        ShadowOnHoverMenu: "0px 20px 40px rgba(0, 0, 0, 0.35)",
      },

      textColor: (theme) => theme("colors"),
      textColor: {
        menuTextColor: "#002868",
        menuHOVERColor: "#BF0A30",
        LinkColor: "#002868",
      },

      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        logoBorderColor: "#AB0427",
        divider: "#eeeeee",
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
