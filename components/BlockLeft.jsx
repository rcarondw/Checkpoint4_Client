import React from "react";
import Allpic from "./Allpic";

export default function BlockLeft() {

  return (
    <div className="w-1/3 h-4/5 bg-gray-900 border border-pink-500 flex flex-col items-center">
      <h1 className="text-white text-lg py-4">Pic your template</h1>
      <div className="flex flex-col">
        <Allpic />
      </div>
    </div>
  );
}
