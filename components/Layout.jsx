import React from "react";
import BlockRight from "./BlockRight";
import BlockLeft from "./BlockLeft";

export default function Layout() {
  return (
    <div className="w-full h-screen flex justify-evenly items-center">
      <BlockLeft />
      <BlockRight />
    </div>
  );
}
