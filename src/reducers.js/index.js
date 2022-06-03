import { combineReducers } from "redux";
import LowerTextReducer from "./LowerTextReducer";
import UpperTextReducer from "./UpperTextReducer";
import colorPickReducer from "./colorPickReducer";
import colorPickBotReducer from "./colorPickBotReducer";
import AOFReducer from "./AOFReducer";
import AOFPicReducer from "./AOFPicReducer";
import mainPicReducer from "./mainPicReducer";
import PoliceSizeTop from "./PoliceSizeTop";
import PoliceSizeBot from "./PoliceSizeBot";

const allReducers = combineReducers({
  upperText: UpperTextReducer,
  lowerText: LowerTextReducer,
  colorPick: colorPickReducer,
  colorPickBot: colorPickBotReducer,
  AOFClick: AOFReducer,
  AOFPic: AOFPicReducer,
  MainPic: mainPicReducer,
  fontSizeTop: PoliceSizeTop,
  fontSizeBot: PoliceSizeBot,
});

export default allReducers;
