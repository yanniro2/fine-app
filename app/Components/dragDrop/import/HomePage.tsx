"use client";
import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import ImageInput from "./ImageInput";
import FabricCanvas from "../FabricCanvas";

const HomePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (file: File) => {
    setSelectedImage(file);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {!selectedImage && <ImageInput onImageChange={handleImageChange} />}
      {selectedImage && (
        <FabricCanvas imageUrl={URL.createObjectURL(selectedImage)} />
      )}
    </div>
  );
};

export default HomePage;
