import { MdOutlineFileDownload } from "react-icons/md";
import React, { ChangeEvent } from "react";

interface ImageInputProps {
  onImageChange: (file: File) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="p-3 border border-dashed rounded-lg text-white hover:bg-white hover:text-dark cursor-pointer ">
      {/* Use the imported image for styling and make it clickable */}
      <label
        htmlFor="imageInput"
        className="cursor-pointer flex items-center justify-center flex-col capitalize font-semibold">
        <MdOutlineFileDownload className="text-4xl" />
        Drop Image or Click to Selected image
      </label>

      {/* Input for selecting a new image */}
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageInput;
