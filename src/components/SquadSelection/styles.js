import globalStyles from "styles/global.styles.js";

export default {
  ...{ ...globalStyles },
  wrapper: {
    display: "grid",
    "grid-template-columns": "[first] 200px [line2] 520px [line3] 200px [end]",
    "grid-template-rows": "[first] 40px [line2] auto [end]",
    height: "100%",
    margin: 10,
  },
};
