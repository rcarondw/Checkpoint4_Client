import { combineReducers } from "redux";
import LowerTextReducer from "./LowerTextReducer";
import UpperTextReducer from "./UpperTextReducer";
import colorPickReducer from './colorPickReducer'
import colorPickBotReducer from "./colorPickBotReducer";
import AOFReducer from "./AOFReducer";
import AOFPicReducer from "./AOFPicReducer";

const allReducers = combineReducers({
  upperText: UpperTextReducer,
  lowerText: LowerTextReducer,
  colorPick: colorPickReducer,
  colorPickBot: colorPickBotReducer,
  AOFClick: AOFReducer,
  AOFPic: AOFPicReducer
});

export default allReducers;
