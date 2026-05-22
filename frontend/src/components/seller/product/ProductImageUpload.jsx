import React, { useRef, useState } from "react";
import { UploadCloud, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { showMsg } from "../../../redux/msgSlice";

const ProductImageUpload = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validImages = [];

    files.forEach((file) => {
      if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
        dispatch(
          showMsg({
            message: `${file.name} is not support`,
            type: "error",
          }),
        );

        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        dispatch(
          showMsg({
            message: `${file.name} is larger than 5MB`,
            type: "error",
          }),
        );
        return;
      }

      validImages.push({
        file,
        preview: URL.createObjectURL(file),
      });
    });

    setImages((prev) => [...prev, ...validImages]);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  console.log("images:::===>", images);

  return (
    <div className="w-full">
      <div
        onClick={handleBoxClick}
        className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 transition"
      >
        <UploadCloud size={50} className="text-gray-400 mb-4" />

        <p className="font-semibold">Click to upload images</p>

        <p className="text-sm text-gray-500 mt-2">PNG, JPG, WEBP up to 5MB</p>
      </div>

      <input
        type="file"
        multiple
        hidden
        ref={fileInputRef}
        accept="image/png,image/jpeg,image/webp"
        onChange={handleImageChange}
      />

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative border rounded-xl overflow-hidden"
            >
              <img
                src={img.preview}
                alt="preview"
                className="w-full h-40 object-cover"
              />

              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;
