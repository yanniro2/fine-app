import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import ImageInput from "./ImageInput";

const HomePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (file: File) => {
    setSelectedImage(file);
  };

  return (
    <div>
      <h1>Next.js Image Input Example</h1>
      <ImageInput onImageChange={handleImageChange} />
      {selectedImage && (
        <ImageComponent
          src={URL.createObjectURL(selectedImage)}
          alt="Selected Image"
        />
      )}
    </div>
  );
};

export default HomePage;
