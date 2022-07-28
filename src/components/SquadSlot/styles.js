export default {
  squadSlot: {
    width: "94px",
    height: "120px",
    backgroundColor: "#a3a3a3",
    position: "absolute",
    transition: "top 0.5s, left 0.5s",
    borderRadius: 4,
    boxShadow: "4px 4px 7px -5px rgba(66, 68, 90, 1)",
  },

  addHerePanel: {
    width: "100%",
    height: "100%",
    outline: "1px solid #000000",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "1.5em",
    textAlign: "center",
    borderRadius: 4,
    textTransform: "capitalize",
  },

  role: (role) => ({
    backgroundColor: "#ffffff",
    left: `${role.x}px`,
    top: `${role.y}px`,
  }),
};
