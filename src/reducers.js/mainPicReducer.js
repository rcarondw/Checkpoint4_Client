const mainPicReducer = (state = null, action) => {
  switch (action.type) {
    case "MAIN_PIC_ACTION":
      return action.payload;
    default:
      return state;
  }
};

export default mainPicReducer;
