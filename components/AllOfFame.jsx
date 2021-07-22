import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const allOfFame = [
  {
    name: "estelleHello",
    pic_url: "imageAOF/estelleHello.jpg",
  },
  {
    name: "EstellePasDrole",
    pic_url: "imageAOF/estellepasdrole.jpg",
  },
  {
    name: "FrontVSTest",
    pic_url: "imageAOF/frontvstest.jpg",
  },
  {
    name: "JosephManouch",
    pic_url: "imageAOF/JosephManouch.jpg",
  },
  {
    name: "josephMeme",
    pic_url: "imageAOF/josephMeme.png",
  },
  {
    name: "JosephCSS",
    pic_url: "imageAOF/jospechCSS.jpg",
  },
  {
    name: "julienDelete",
    pic_url: "imageAOF/julienDelete.jpg",
  },
  {
    name: "JulienPresentiel",
    pic_url: "imageAOF/JulienPresentiel.png",
  },
  {
    name: "JulienSesceptible",
    pic_url: "imageAOF/julienSusceptible.jpg",
  },
  {
    name: "Matthiasidor",
    pic_url: "imageAOF/mathiasidor.jpg",
  },
  {
    name: "MathiasPerave",
    pic_url: "imageAOF/mathiasPerav.jpg",
  },
  {
    name: "MathiasPost",
    pic_url: "imageAOF/mathiasPost.jpg",
  },
  {
    name: "MathiasRadome",
    pic_url: "imageAOF/MathiasRandom.jpg",
  },
  {
    name: "MathiasTourtelle",
    pic_url: "imageAOF/mathiasTourtel.jpg",
  },
  {
    name: "MatthieuBitMoji",
    pic_url: "imageAOF/MathieuBitmoji.jpg",
  },
  {
    name: "MatthieuBitMoji2",
    pic_url: "imageAOF/matthieuBitMoji2.jpg",
  },
  {
    name: "MatthieuGrillé",
    pic_url: "imageAOF/matthieugrillé.jpg",
  },
  {
    name: "MatthieuSaoulé",
    pic_url: "imageAOF/matthieusaoulé.jpg",
  },
  {
    name: "PenseurDuRondin",
    pic_url: "imageAOF/penseurDuRondin.jpg",
  },
  {
    name: "QuelMatth",
    pic_url: "imageAOF/QuelMat.jpg",
  },
  {
    name: "ReduxJoke",
    pic_url: "imageAOF/reduxJoke.jpg",
  },
  {
    name: "ReduxRecoil",
    pic_url: "imageAOF/reduxRecoil.png",
  },
  {
    name: "ReduxVSSurfCamp",
    pic_url: "imageAOF/reduxVSSurfcamp.jpg",
  },
  {
    name: "ReduxWindow",
    pic_url: "imageAOF/reduxwindow.jpg",
  },
  {
    name: "RemiBackVSFront",
    pic_url: "imageAOF/remibackvsFront.jpg",
  },
  {
    name: "RémiFeature",
    pic_url: "imageAOF/remiFeature.jpg",
  },
  {
    name: "SacréBen",
    pic_url: "imageAOF/sacréBen.jpg",
  },
  {
    name: "SacréeClara",
    pic_url: "imageAOF/sacréeClara.jpg",
  },
  {
    name: "SacréeClara2",
    pic_url: "imageAOF/sacréeClara2.jpg",
  },
  {
    name: "SacréeEstelle",
    pic_url: "imageAOF/sacréeEstelle.jpg",
  },
  {
    name: "SacréeEstelle2",
    pic_url: "imageAOF/sacréeEstelle2.jpg",
  },
  {
    name: "SacréeMarylou",
    pic_url: "imageAOF/sacréeMarylou.jpg",
  },
  {
    name: "SacréJoseph",
    pic_url: "imageAOF/sacréJoseph.jpg",
  },
  {
    name: "Sacréjulien",
    pic_url: "imageAOF/sacréjulien.jpg",
  },
  {
    name: "sacréMatthias",
    pic_url: "imageAOF/sacréMatthias.jpg",
  },
  {
    name: "SacréMatthias2",
    pic_url: "imageAOF/sacréMatthias2.jpg",
  },
  {
    name: "SacréMika",
    pic_url: "imageAOF/sacrémika.jpg",
  },
  {
    name: "SacréRémi",
    pic_url: "imageAOF/sacréRemi.jpg",
  },
  {
    name: "SacréThomas",
    pic_url: "imageAOF/sacréthomas.jpg",
  },
  {
    name: "SacréThomas2",
    pic_url: "imageAOF/sacréThomas2.jpg",
  },
  {
    name: "SacréThomas3",
    pic_url: "imageAOF/sacréThomas3.jpg",
  },
  {
    name: "TrioMatthieu",
    pic_url: "imageAOF/trioMatthieu.jpg",
  },
  {
    name: "UserPhone",
    pic_url: "imageAOF/userPhone.jpg",
  },
  {
    name: "Victoria",
    pic_url: "imageAOF/victoria.jpg",
  },
];

export default function AllOfFame() {
  const [imageIdx, setImageIdx] = useState(0);

  function NextArrow({ onClick }) {
    return (
      <div className=" absolute -right-24 z-10 ">
        <button onClick={onClick} className="focus:outline-none">
          <BsChevronCompactRight className="w-20 h-20 text-gray-500 top-1/2" />
        </button>
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div className="absolute -left-24 z-10">
        <button onClick={onClick} className="focus:outline-none">
          <BsChevronCompactLeft className="w-20 h-20 text-gray-500 top-1/2 " />
        </button>
      </div>
    );
  }

  const settings = {
    Infinite: true,
    lazyload: true,
    slideToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange:(current, next) => setImageIdx(next)
  };

  return (
    <div className="w-96 h-48 bg-pink-500">
      <h3>All Of Fame</h3>
      <Slider
        {...settings}
        className="max-w-full max-h-full flex justify-center items-center"
      > 
        {allOfFame.map((pic, idx) => {
          return (
            <div key={idx} className="relative">
              <img src={pic.pic_url} alt={pic.name} className="w-48" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
