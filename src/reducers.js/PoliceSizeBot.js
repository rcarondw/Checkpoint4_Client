const PoliceSizeBot = (state = "16", action) => {
  switch (action.type) {
    case "BOT_FONT_CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default PoliceSizeBot;
