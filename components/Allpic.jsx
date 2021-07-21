import React, { useState } from "react";
import { useSelector } from "react-redux";

const allPic = [
  {
    name: "estelle",
    pic_url: "images/estelle.png",
  },
  {
    name: "joseph",
    pic_url: "images/joseph.png",
  },
  {
    name: "julien",
    pic_url: "images/julien1.png",
  },
  {
    name: "julien2",
    pic_url: "images/julien2.png",
  },
  {
    name: "julien3",
    pic_url: "images/julien3.png",
  },
  {
    name: "julien4",
    pic_url: "images/julien4.png",
  },
  {
    name: "julien5",
    pic_url: "images/julien5.png",
  },
  {
    name: "matthias",
    pic_url: "images/matthias.png",
  },
  {
    name: "matthieu",
    pic_url: "images/matthieu.png",
  },
  {
    name: "matthieu2",
    pic_url: "images/matthieu2.png",
  },
  {
    name: "estelle2",
    pic_url: "images/estelle2.png",
  },
  {
    name: "marylou",
    pic_url: "images/marylou.png",
  },
];

export default function Allpic() {
  const [mainPic, setMainPic] = useState("images/estelle.png");

  const upperText = useSelector((state) => state.upperText);
  const lowerText = useSelector((state) => state.lowerText);
  const colorPickUp = useSelector((state) => state.colorPick);
  const colorPickBot = useSelector((state) => state.colorPickBot);

  return (
    <div className="flex flex-col items-center">
      <div className="m-4 relative">
        <p
          className="h-14 absolute text-3xl font-bold w-full text-center flex justify-center items-center"
          style={{ color: colorPickUp }}
        >
          {upperText}
        </p>
        <img src={mainPic} className="w-full h-1/2  " />
        <p
          className=" h-14 absolute text-3xl font-bold bottom-0 w-full flex justify-center items-center"
          style={{ color: colorPickBot }}
        >
          {lowerText}
        </p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <h3 className="text-white">All template</h3>
        <div className="grid grid-cols-4 gap-2 mx-4">
          {allPic.map((pic, idx) => {
            return (
              <div key={idx}>
                <img
                  src={pic.pic_url}
                  alt={pic.name}
                  onClick={(e) => setMainPic(pic.pic_url)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
