import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  upperChange,
  lowerChange,
  colorChangeUp,
  colorChangeBot,
  upperFontSize,
} from "../src/actions";

export default function Settings() {
  const upperText = useSelector((state) => state.upperText);
  const lowerText = useSelector((state) => state.lowerText);
  const colorPick = useSelector((state) => state.colorPick);
  const colorPickBot = useSelector((state) => state.colorPickBot);
  const fontSizeTop = useSelector((state) => state.fontSizeTop);
  const dispatch = useDispatch();

  console.log(colorPick);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col mt-3">
        <h3 className="text-white">Upper Text</h3>
        <input
          type="text"
          name="upperText"
          onChange={(e) => dispatch(upperChange(e.target.value))}
          className="my-2 py-1 px-2 rounded-md"
          maxLength="55"
        />
        <div className="flex gap-2">
          <span className="flex items-center w-2/3">
            <input
              type="color"
              value={colorPick}
              onChange={(e) => {
                dispatch(colorChangeUp(e.target.value));
              }}
              className="w-10 h-8 rounded-l-md"
            />
            <input
              type="text"
              name="ColorPicker"
              value={colorPick}
              onChange={(e) => dispatch(colorChangeUp(e.target.value))}
              className="my-2 w-full px-2 py-1 rounded-r-md"
            />
          </span>
          <select
            name="font-size"
            id="font-size"
            className="my-2 w-1/3 px-2 py-1 rounded-md "
            onChange={(e) => dispatch(upperFontSize(e.target.value))}
          >
            <option value="24px">24</option>
            <option value="28px">28</option>
            <option value="32px">32</option>
            <option value="36px">36</option>
            <option value="40px">40</option>
            <option value="44px">44</option>
            <option value="48px">48</option>
            <option value="52px">52</option>
          </select>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-white">Lower Text</h3>
        <input
          type="text"
          name="lowerText"
          onChange={(e) => dispatch(lowerChange(e.target.value))}
          className="my-2 w-64 py-1 px-2 rounded-md"
          maxLength="55"
        />
      </div>
      <span className="flex items-center">
        <input
          type="color"
          value={colorPickBot}
          onChange={(e) => {
            dispatch(colorChangeBot(e.target.value));
          }}
          className="w-10 h-8 rounded-l-md"
        />
        <input
          type="text"
          name="ColorPicker"
          value={colorPickBot}
          onChange={(e) => dispatch(colorChangeBot(e.target.value))}
          className="my-2 w-full px-2 py-1 rounded-r-md"
        />
      </span>
      <div className="max-h-full"></div>
    </div>
  );
}
