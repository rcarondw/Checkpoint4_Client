import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  upperChange,
  lowerChange,
  colorChangeUp,
  colorChangeBot,
} from "../src/actions";

export default function Settings() {
  const upperText = useSelector((state) => state.upperText);
  const lowerText = useSelector((state) => state.lowerText);
  const colorPick = useSelector((state) => state.colorPick);
  const colorPickBot = useSelector((state) => state.colorPickBot);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col">
        <h3 className="text-white">Upper Text</h3>
        <input
          type="text"
          name="upperText"
          onChange={(e) => dispatch(upperChange(e.target.value))}
          className="my-2"
        />
        <span className="flex items-center">
          <input
            type="color"
            value={colorPick}
            onChange={(e) => {
              dispatch(colorChangeUp(e.target.value));
            }}
          />
          <input
            type="text"
            name="ColorPicker"
            value={colorPick}
            onChange={(e) => dispatch(colorChangeUp(e.target.value))}
            className="my-2"
          />
        </span>
      </div>
      <div>
        <h3 className="text-white">Lower Text</h3>
        <input
          type="text"
          name="lowerText"
          onChange={(e) => dispatch(lowerChange(e.target.value))}
          className="my-2 w-64"
        />
      </div>
      <span className="flex items-center">
        <input
          type="color"
          value={colorPickBot}
          onChange={(e) => {
            dispatch(colorChangeBot(e.target.value));
          }}
          className="w-7"
        />
        <input
          type="text"
          name="ColorPicker"
          value={colorPickBot}
          onChange={(e) => dispatch(colorChangeBot(e.target.value))}
          className="my-2"
        />
      </span>
    </div>
  );
}
