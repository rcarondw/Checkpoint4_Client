export const upperChange = (data) => {
  return {
    type: "UPPER_CHANGE",
    payload: data,
  };
};

export const lowerChange = (data) => {
  return {
    type: "LOWER_CHANGE",
    payload: data,
  };
};

export const colorChangeUp = (data) => {
  return {
    type: "COLOR_PICK_UP",
    payload: data,
  };
};

export const colorChangeBot = (data) => {
    return {
      type: "COLOR_PICK_BOT",
      payload: data,
    };
  };