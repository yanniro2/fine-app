"use client";
import React, { ChangeEvent, useState } from "react";

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

  return <input type="file" accept="image/*" onChange={handleImageChange} />;
};

export default ImageInput;
