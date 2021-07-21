const UpperTextReducer = (state = "", action) => {
  switch (action.type) {
    case "UPPER_CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default UpperTextReducer;
