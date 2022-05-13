import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Upload({ setPreview, setMainPic }) {
  const [image, setImage] = useState();
  const MainPic = useSelector((state) => state.MainPic);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setMainPic(null);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div>
      <form action="/upload" encType="multipart/form-data">
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.match("image/*")) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        <label htmlFor="file">Upload</label>
      </form>
    </div>
  );
}
