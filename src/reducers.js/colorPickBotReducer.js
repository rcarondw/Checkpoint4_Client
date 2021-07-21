const colorPickBotReducer = (state = "", action) => {
  switch (action.type) {
    case "COLOR_PICK_BOT":
      return action.payload;
    default:
      return state;
  }
};

export default colorPickBotReducer;
