"use client"; 

import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import FabricCanvas from "./Components/dragDrop/FabricCanvas";
import HomePage from "./Components/dragDrop/import/HomePage";

const App = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas>();

  useEffect(() => {
    const c = new fabric.Canvas("canvas", {
      height: 400,
      width: 800,
      backgroundColor: "black",
    });

    // settings for all canvas in the app
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#2BEBC8";
    fabric.Object.prototype.cornerStyle = "rect";
    fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
    fabric.Object.prototype.cornerSize = 6;

    setCanvas(c);

    return () => {
      c.dispose();
    };
  }, []);

  const addRect = (canvas?: fabric.Canvas) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      stroke: "#2BEBC8",
    });
    canvas?.add(rect);
    canvas?.requestRenderAll();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center pl-[20vw]">
      <FabricCanvas imageUrl={"/assets/img/fine logo.svg"} />
      <HomePage />
    </div>
  );
};

export default App;
