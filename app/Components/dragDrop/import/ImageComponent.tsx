import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};

export default ImageComponent;
