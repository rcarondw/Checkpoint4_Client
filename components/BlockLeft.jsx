import React from "react";
import Allpic from "./Allpic";

export default function BlockLeft() {

  return (
    <div className="w-1/3 h-4/5 bg-homeGray flex flex-col items-center rounded-md mt-14">
      <div className="flex flex-col h-full">
        <Allpic />
      </div>
    </div>
  );
}
