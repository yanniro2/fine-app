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
    const canvas = new fabric.Canvas("c", {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Load image from URL
    fabric.Image.fromURL(imageUrl, (oImg: fabric.Image | undefined) => {
      if (oImg) {
        // Set scale to 50%
        oImg.scaleToWidth(canvas.width !== undefined ? canvas.width * 0.5 : 0);

        // Center the image both horizontally and vertically
        oImg.set({
          originX: "center",
          originY: "center",
          left: canvas.width !== undefined ? canvas.width / 2 : 0,
          top: canvas.height !== undefined ? canvas.height / 2 : 0,
        });

        // Add the image to the canvas
        canvas.add(oImg);

        // Update canvas dimensions on window resize
        const handleResize = () => {
          canvas.setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });

          // Center the image on resize
          oImg.set({
            left: canvas.width !== undefined ? canvas.width / 2 : 0,
            top: canvas.height !== undefined ? canvas.height / 2 : 0,
          });

          canvas.renderAll(); // Force canvas rerender after resizing
        };

        // Attach resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
          canvas.dispose();
        };
      }
    });
  }, [imageUrl]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <canvas id="c" className="fabric-canvas" />
    </div>
  );
};

export default FabricCanvas;
