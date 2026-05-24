import { current } from "@reduxjs/toolkit";
import { UploadCloud, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { showMsg } from "../../../redux/msgSlice";

const ProductThumbnail = ({ label, name, productData, setProductData }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [thumbnailImage, SetThumbnailImage] = useState({});
  const handelClick = (e) => {
    inputRef.current.click();
  };

  const HandelImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const file = files[0];
    let validImage = [];

    if (file.size > 5 * 1024 * 1024) {
      dispatch(
        showMsg({
          message: `${file.name} is larger than 5MB`,
          type: "error",
        }),
      );

      return;
    }

    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      dispatch(
        showMsg({
          message: `${file.type} is not vaild`,
          type: "error",
        }),
      );

      return;
    }

    const PreviewImageUrl = URL.createObjectURL(file);

    validImage = {
      preview: PreviewImageUrl,
      file,
    };

    SetThumbnailImage(validImage);

    setProductData((prev) => ({
      ...prev,
      thumbnail: validImage.file,
    }));
  };

  return (
    <div className="w-full mt-4">
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="flex flex-row justify-center gap-5">
        <div
          className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 transition"
          onClick={handelClick}
        >
          <UploadCloud size={50} className="text-gray-400 mb-4" />

          <p className="font-semibold">Click to upload images</p>

          <p className="text-sm text-gray-500 mt-2">PNG, JPG, WEBP up to 5MB</p>
        </div>

        <input
          type="file"
          hidden
          accept="image/png,image/jpeg,image/webp"
          ref={inputRef}
          name={name}
          onChange={HandelImageChange}
        />

        <div
          className={`w-62.5 h-50 object-cover border-2 border-dashed rounded-2xl p-10 ${
            thumbnailImage.preview ? "flex" : "hidden"
          } flex-col items-center justify-center text-center w-[40%] relative`}
        >
          <X
            size={20}
            onClick={() => {
              URL.revokeObjectURL(thumbnailImage.preview);
              SetThumbnailImage({});
            }}
            className="
    cursor-pointer 
    absolute 
    top-2 
    right-2 
    bg-black/70
   text-white
    rounded-full 
    p-1
    transition
    duration-150
    hover:scale-110
    hover:bg-amber-800
    active:scale-90
    active:bg-red-600
     
  "
          />
          <img
            src={thumbnailImage.preview}
            alt={thumbnailImage.file}
            className="max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnail;
