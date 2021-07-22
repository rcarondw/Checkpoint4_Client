import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  upperChange,
  lowerChange,
  colorChangeUp,
  colorChangeBot,
} from "../src/actions";
import AllOfFame from "./AllOfFame";

export default function Settings() {
  const upperText = useSelector((state) => state.upperText);
  const lowerText = useSelector((state) => state.lowerText);
  const colorPick = useSelector((state) => state.colorPick);
  const colorPickBot = useSelector((state) => state.colorPickBot);

  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <div className="flex flex-col mt-3">
        <h3 className="text-white">Upper Text</h3>
        <input
          type="text"
          name="upperText"
          onChange={(e) => dispatch(upperChange(e.target.value))}
          className="my-2 py-1 px-2 rounded-md"
          maxLength="25"
        />
        <span className="flex items-center">
          <input
            type="color"
            value={colorPick}
            onChange={(e) => {
              dispatch(colorChangeUp(e.target.value));
            }}
            className="w-10 h-8 rounded-md"
          />
          <input
            type="text"
            name="ColorPicker"
            value={colorPick}
            onChange={(e) => dispatch(colorChangeUp(e.target.value))}
            className="my-2 w-full px-2 py-1 rounded-r-md"
          />
        </span>
      </div>
      <div className="mt-3">
        <h3 className="text-white">Lower Text</h3>
        <input
          type="text"
          name="lowerText"
          onChange={(e) => dispatch(lowerChange(e.target.value))}
          className="my-2 w-64 py-1 px-2 rounded-md"
          maxLength="25"
        />
      </div>
      <span className="flex items-center">
        <input
          type="color"
          value={colorPickBot}
          onChange={(e) => {
            dispatch(colorChangeBot(e.target.value));
          }}
          className="w-10 h-8 rounded-md"
        />
        <input
          type="text"
          name="ColorPicker"
          value={colorPickBot}
          onChange={(e) => dispatch(colorChangeBot(e.target.value))}
          className="my-2 w-full px-2 py-1 rounded-r-md"
        />
      </span>
      <div className="max-h-full">
      </div>
    </div>
  );
}
