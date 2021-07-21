import { combineReducers } from "redux";
import LowerTextReducer from "./LowerTextReducer";
import UpperTextReducer from "./UpperTextReducer";
import colorPickReducer from './colorPickReducer'
import colorPickBotReducer from "./colorPickBotReducer";

const allReducers = combineReducers({
  upperText: UpperTextReducer,
  lowerText: LowerTextReducer,
  colorPick: colorPickReducer,
  colorPickBot: colorPickBotReducer
});

export default allReducers;
