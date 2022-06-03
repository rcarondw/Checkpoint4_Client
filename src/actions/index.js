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

export const AOFChange = () => {
  return {
    type: "AOF_CLICK",
  };
};

export const AOFPicChange = (data) => {
  return {
    type: "SELECTED_PIC",
    payload: data,
  };
};

export const mainPicAction = (data) => {
  return {
    type: "MAIN_PIC_CHANGE",
    payload: data,
  };
};

export const upperFontSize = (data) => {
  return {
    type: "UP_FONT_CHANGE",
    payload: data,
  };
};

export const bottomFontSize = (data) => {
  return {
    type: "BOT_FONT_CHANGE",
    payload: data,
  };
};
