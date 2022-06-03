const colorPickReducer = (state = "#ffffff", action) => {
  switch (action.type) {
    case "COLOR_PICK_UP":
      return action.payload;
    default:
      return state;
  }
};

export default colorPickReducer;
