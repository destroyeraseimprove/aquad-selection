import fontFaceStyles from "./font-face.styles.js";
export default {
  "@global": {
    ...{ ...fontFaceStyles },
    "html, body, #app": {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
    },

    "*": {
      boxSizing: "border-box",
    },

    body: {
      background: "#ececec",
      fontSize: "12px",
      fontFamily: "Roboto",
    },

    ".container": {
      width: "100%",
      maxWidth: "1000px",
      margin: "0 auto",
    },
  },
};
