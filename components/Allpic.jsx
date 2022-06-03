import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import domtoimage from "dom-to-image";
import Upload from "./Upload";
import { RiDragMoveFill } from "react-icons/ri";

const allPic = [
  {
    name: "estelle",
    pic_url: "images/estelle.jpg",
  },
  {
    name: "Drake Hotline",
    pic_url: "https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg",
  },
  {
    name: "estelle2",
    pic_url: "images/estelle2.jpg",
  },
  {
    name: "estelle3",
    pic_url: "images/estelle3.jpg",
  },
  {
    name: "estelle4",
    pic_url: "images/estelle4.jpg",
  },
  {
    name: "estelle5",
    pic_url: "images/estelle5.jpg",
  },
  {
    name: "joseph",
    pic_url: "images/joseph.jpg",
  },
  {
    name: "joseph2",
    pic_url: "images/joseph2.jpg",
  },
  {
    name: "joseph3",
    pic_url: "images/joseph3.jpg",
  },
  {
    name: "julien",
    pic_url: "images/julien.jpg",
  },
  {
    name: "julien2",
    pic_url: "images/julien2.jpg",
  },
  {
    name: "julien3",
    pic_url: "images/julien3.jpg",
  },
  {
    name: "julien4",
    pic_url: "images/julien4.jpg",
  },
  {
    name: "julien5",
    pic_url: "images/julien5.jpg",
  },
  {
    name: "julien6",
    pic_url: "images/julien6.jpg",
  },
  {
    name: "julien7",
    pic_url: "images/julien7.jpg",
  },
  {
    name: "matthias",
    pic_url: "images/matthias.jpg",
  },
  {
    name: "mathias",
    pic_url: "images/mathias.jpg",
  },
  {
    name: "mathias2",
    pic_url: "images/mathias2.jpg",
  },
  {
    name: "mathias3",
    pic_url: "images/mathias3.png",
  },
  {
    name: "mathias4",
    pic_url: "images/mathias4.jpg",
  },
  {
    name: "matthieu",
    pic_url: "images/matthieu.jpg",
  },
  {
    name: "matthieu2",
    pic_url: "images/matthieu2.jpg",
  },
  {
    name: "matthieu3",
    pic_url: "images/matthieu3.jpg",
  },
  {
    name: "matthieu4",
    pic_url: "images/matthieu4.jpg",
  },
  {
    name: "marylou",
    pic_url: "images/marylou.jpg",
  },
  {
    name: "marylou2",
    pic_url: "images/marylou2.jpg",
  },
  {
    name: "marylou3",
    pic_url: "images/marylou3.jpg",
  },
  {
    name: "remi",
    pic_url: "images/remi.png",
  },
  {
    name: "remi2",
    pic_url: "images/remi2.png",
  },
  {
    name: "remi3",
    pic_url: "images/remi3.png",
  },
  {
    name: "thomas",
    pic_url: "images/thomas.jpg",
  },
  {
    name: "thomas2",
    pic_url: "images/thomas2.jpg",
  },
  {
    name: "thomas3",
    pic_url: "images/thomas3.jpg",
  },
  {
    name: "victoria",
    pic_url: "images/victoria.jpg",
  },
  {
    name: "victoria2",
    pic_url: "images/victoria2.jpg",
  },
];

export default function Allpic() {
  const [mainPic, setMainPic] = useState("images/estelle.jpg");
  const [searchTemplate, setSearchTemplate] = useState("");
  const upperText = useSelector((state) => state.upperText);
  const lowerText = useSelector((state) => state.lowerText);
  const colorPickUp = useSelector((state) => state.colorPick);
  const colorPickBot = useSelector((state) => state.colorPickBot);
  const fontSizeTop = useSelector((state) => state.fontSizeTop);
  const [preview, setPreview] = useState();
  const [isResize, setIsResize] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const imgLink = () => {
    domtoimage
      .toJpeg(document.getElementById("image"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  useEffect(() => {
    const textArea = document.querySelector(".draggableDiv");
    let isResizing = false;
    function onDrag({ movementX, movementY }) {
      if (!isResizing) {
        let getStyle = window.getComputedStyle(textArea);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);

        textArea.style.left = `${left + movementX}px`;
        textArea.style.top = `${top + movementY}px`;
      }
    }

    textArea.addEventListener("mousedown", () => {
      textArea.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", () => {
      textArea.removeEventListener("mousemove", onDrag);
    });

    const resizer = document.querySelector(".resizer");
    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
      let currentResizer = e.target;
      isResizing = true;
      let prevX = e.clientX;
      let prevY = e.clientY;
      // let prevX = parseInt(getStyle.left);
      // let prevY = parseInt(getStyle.top);

      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        const rect = textArea.getBoundingClientRect();
        if (currentResizer.classList.contains("se")) {
          textArea.style.width = rect.width - (prevX - e.clientX) + "px";
          textArea.style.height = rect.height - (prevY - e.clientY) + "px";
        }
        prevX = e.clientX;
        prevY = e.clientY;
      }

      function mouseup(e) {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
        isResizing = false;
      }
    }
  });

  // useEffect(() => {
  //   const el = document.querySelector(".draggableDiv");

  //   el.addEventListener("mousedown", mousedown);

  //   function mousedown(e) {
  //     window.addEventListener("mousemove", mousemove);
  //     window.addEventListener("mouseup", mouseup);

  //     let prevX = e.clientX;
  //     let prevY = e.clientY;

  //     function mousemove(e) {
  //       let newX = prevX - e.clientX;
  //       let newY = prevY - e.clientY;

  //       const rect = el.getBoundingClientRect();

  //       el.style.left = rect.left - newX + "px";
  //       el.style.top = rect.top - newY + "px";

  //       prevX = e.clientX;
  //       prevY = e.clientY;
  //     }

  //     function mouseup() {
  //       window.removeEventListener("mousemove", mousemove);
  //       window.removeEventListener("mouseup", mouseup);
  //     }
  //   }
  // }, []);

  return (
    <div className="flex flex-col items-center h-full w-full justify-between p-6">
      <div className="w-full flex justify-around">
        <Upload setPreview={setPreview} setMainPic={setMainPic} />
        <button
          type="button"
          className="bg-white px-6 py-1 rounded-lg"
          onClick={imgLink}
        >
          Generate
        </button>
        <button
          className="bg-white px-6 py-1 rounded-lg"
          onClick={(e) => setIsResize(!isResize)}
        >
          on/off
        </button>
      </div>
      <div className=" h-1/2 w-full flex justify-center py-10 px-36 ">
        <div id="image" className="relative w-full h-96 overflow-hidden">
          <div className="absolute draggableDiv bg-green-400 w-48 h-24">
            <div className="resizer n "></div>
            <div className="resizer ne "></div>
            <div className="resizer e "></div>
            <div className="resizer se "></div>
            <div className="resizer s "></div>
            <div className="resizer so "></div>
            <div className="resizer o "></div>
            <div className="resizer no "></div>
            <p
              className="textArea flex flex-wrap stroke uppercase"
              style={{ color: colorPickUp, fontSize: fontSizeTop }}
            >
              {upperText}
            </p>
            {/* <textarea
              className="  bg-transparent text-center flex justify-center items-center stroke uppercase"
              readOnly
              style={{ color: colorPickUp, fontSize: fontSizeTop }}
              value={upperText}
            /> */}
          </div>
          <img
            src={mainPic ? mainPic : preview}
            className="w-full h-full rounded-md object-fill "
          />
          {/* <p
            className=" h-14 absolute  text-center  bottom-5 w-full flex justify-center items-center stroke uppercase"
            style={{ color: colorPickBot }}
          >
            {lowerText}
          </p> */}
        </div>
      </div>
      <div className="flex flex-col items-center h-1/2 justify-center w-full px-3">
        <div className="w-full px-6  mb-4 flex justify-between items-center relative">
          <h3 className="text-white text-2xl font-bold">All template</h3>
          <input
            type="text"
            name="searchInput"
            placeholder="search template"
            onChange={(e) => setSearchTemplate(e.target.value)}
            className="text-sm rounded-lg p-2"
          />
        </div>
        <div className="grid grid-cols-4 gap-2  h-4/5 overflow-y-scroll hideScrollBar">
          {allPic
            .filter((word) => {
              if (searchTemplate === "") {
                return word;
              } else if (
                word.name
                  .toLocaleLowerCase()
                  .includes(searchTemplate.toLocaleLowerCase())
              ) {
                return word;
              }
            })
            .map((pic, idx) => {
              return (
                <div key={idx} className="">
                  <img
                    src={pic.pic_url}
                    alt={pic.name}
                    onClick={(e) => setMainPic(pic.pic_url)}
                    className="rounded-sm w-full h-full object-cover max-h-32"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
