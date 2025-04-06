import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";
import { fabric } from "fabric"; // ✅ Correct Import

const Whiteboard: React.FC = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 500,
        backgroundColor: "white",
      });

      // ✅ Enable object selection and scaling
      fabricCanvas.selection = true;
      setCanvas(fabricCanvas);
    }
  }, []);

  // ✅ Upload & Resize Background Image
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && canvas) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          fabric.Image.fromURL(e.target.result.toString(), (img) => {
            img.scaleToWidth(canvas.width ?? 800);

            // ✅ Make image selectable and resizable
            img.set({
              left: 50,
              top: 50,
              selectable: true,
              hasControls: true,
              lockScalingFlip: true, // Prevent flipping when resizing
            });

            canvas.add(img);
            canvas.setActiveObject(img); // Select image immediately
            canvas.renderAll();
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Add Items (Plants, Planters, Accessories) - Resizable
  const addItem = async (imageURL: string) => {
    if (!canvas) return;
    fabric.Image.fromURL(imageURL, (img) => {
      img.scale(0.3);
      img.set({
        left: 100,
        top: 100,
        selectable: true,
        hasControls: true,
      });

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
    });
  };

  // ✅ Download Final Design
  const downloadDesign = () => {
    if (!canvasRef.current) return;
    html2canvas(canvasRef.current).then((canvasImg) => {
      const link = document.createElement("a");
      link.href = canvasImg.toDataURL("image/png");
      link.download = "design.png";
      link.click();
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <canvas ref={canvasRef} />

      {/* Items to Add */}
      <div>
        <h3>Select Items:</h3>
        <Button onClick={() => addItem("/images/plant.png")}>Plant</Button>
        <Button onClick={() => addItem("/images/planter.png")}>Planter</Button>
        <Button onClick={() => addItem("/images/accessory.png")}>Accessory</Button>
      </div>

      {/* Download Design */}
      <Button onClick={downloadDesign} variant="contained" color="primary">
        Download Design
      </Button>
    </div>
  );
};

export default Whiteboard;
