const PoliceSizeTop = (state = "16", action) => {
  switch (action.type) {
    case "UP_FONT_CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default PoliceSizeTop;
