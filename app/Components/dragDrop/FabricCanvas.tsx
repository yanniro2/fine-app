// components/FabricCanvas.tsx
"use client";
import { useEffect } from "react";
import { fabric } from "fabric";

interface FabricCanvasProps {
  imageUrl: string;
}

const FabricCanvas: React.FC<FabricCanvasProps> = ({ imageUrl }) => {
  useEffect(() => {
    // Create fabric canvas
    const canvas = new fabric.Canvas("c");

    // Load image from URL
    fabric.Image.fromURL(imageUrl, (oImg) => {
      // Modify the image before adding it to the canvas
      oImg.set({
        left: 100,
        top: 100,
        // angle: 30,
        opacity: 0.85,
        width: 100,
        height: 100,
      });

      // Add the image to the canvas
      canvas.add(oImg);
    });

    // Cleanup on unmount
    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  return (
    <div className="w-screen h-screen">
      <canvas id="c" />
    </div>
  );
};

export default FabricCanvas;
