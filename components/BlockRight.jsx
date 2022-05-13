import React from "react";
import AllOfFame from "./AllOfFame";
import Settings from "./Settings";

export default function BlockRight() {
  return (
    <div className="w-1/3 h-4/5 bg-homeGray flex flex-col justify-around items-center rounded-md mt-14">
      <div>
        <h1 className=" text-white text-2xl py-4 font-bold ">Settings</h1>
        <Settings />
      </div>
      <div className="w-full h-1/2 flex justify-center items-end">
        <AllOfFame />
      </div>
    </div>
  );
}
