import { useRef, useEffect, useState } from 'react';
import { Square, Circle, Type, Palette, Download, Upload, Undo } from 'lucide-react';

interface Element {
  id: string;
  type: 'rectangle' | 'circle' | 'text' | 'image' | 'draw';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  text?: string;
  imageUrl?: string;
}

interface Tool {
  name: 'select' | 'rectangle' | 'circle' | 'text' | 'image' | 'draw';
  color: string;
  size: number;
}

const CanvasGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool>({
    name: 'draw',
    color: '#000000',
    size: 5
  });
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = 800;
    canvas.height = 600;

    // Set initial background
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Save initial state
    const initialState = context.getImageData(0, 0, canvas.width, canvas.height);
    setHistory([initialState]);
    setCurrentStep(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        undo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  const saveState = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const currentState = context.getImageData(0, 0, canvas.width, canvas.height);
    const newHistory = history.slice(0, currentStep + 1);
    setHistory([...newHistory, currentState]);
    setCurrentStep(currentStep + 1);
  };

  const undo = () => {
    if (currentStep <= 0) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const previousState = history[currentStep - 1];
    context.putImageData(previousState, 0, 0);
    setCurrentStep(currentStep - 1);
  };

  const drawElements = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    // Clear canvas
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all elements
    elements.forEach(element => {
      context.save();
      
      if (element.type === 'rectangle') {
        context.fillStyle = element.color;
        context.fillRect(element.x, element.y, element.width, element.height);
      } 
      else if (element.type === 'circle') {
        context.beginPath();
        context.fillStyle = element.color;
        context.arc(
          element.x + element.width / 2,
          element.y + element.height / 2,
          Math.min(element.width, element.height) / 2,
          0,
          Math.PI * 2
        );
        context.fill();
      }
      else if (element.type === 'text') {
        context.font = '24px Arial';
        context.fillStyle = element.color;
        context.fillText(element.text || '', element.x, element.y + 24);
      }
      else if (element.type === 'image' && element.imageUrl) {
        const img = new Image();
        img.src = element.imageUrl;
        context.drawImage(img, element.x, element.y, element.width, element.height);
      }

      // Draw selection box if element is selected
      if (selectedElement === element) {
        context.strokeStyle = '#00ff00';
        context.lineWidth = 2;
        context.strokeRect(
          element.x - 4,
          element.y - 4,
          element.width + 8,
          element.height + 8
        );

        // Draw resize handles
        const handles = [
          { x: element.x - 4, y: element.y - 4 },
          { x: element.x + element.width - 4, y: element.y - 4 },
          { x: element.x - 4, y: element.y + element.height - 4 },
          { x: element.x + element.width - 4, y: element.y + element.height - 4 }
        ];

        handles.forEach(handle => {
          context.fillStyle = '#ffffff';
          context.fillRect(handle.x, handle.y, 8, 8);
          context.strokeRect(handle.x, handle.y, 8, 8);
        });
      }

      context.restore();
    });

    saveState();
  };

  useEffect(() => {
    drawElements();
  }, [elements, selectedElement]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (selectedTool.name === 'draw') {
      setIsDrawing(true);
      const context = canvas.getContext('2d');
      if (!context) return;

      context.beginPath();
      context.moveTo(x, y);
      context.strokeStyle = selectedTool.color;
      context.lineWidth = selectedTool.size;
      context.lineCap = 'round';
    } else if (selectedTool.name === 'select') {
      // Check if clicking on a resize handle
      if (selectedElement) {
        const handles = [
          { x: selectedElement.x - 4, y: selectedElement.y - 4 },
          { x: selectedElement.x + selectedElement.width - 4, y: selectedElement.y - 4 },
          { x: selectedElement.x - 4, y: selectedElement.y + selectedElement.height - 4 },
          { x: selectedElement.x + selectedElement.width - 4, y: selectedElement.y + selectedElement.height - 4 }
        ];

        const clickedHandle = handles.find(
          handle =>
            x >= handle.x &&
            x <= handle.x + 8 &&
            y >= handle.y &&
            y <= handle.y + 8
        );

        if (clickedHandle) {
          setIsResizing(true);
          setDragStart({ x, y });
          return;
        }
      }

      // Check if clicking on an element
      const clickedElement = [...elements].reverse().find(element => {
        return (
          x >= element.x &&
          x <= element.x + element.width &&
          y >= element.y &&
          y <= element.y + element.height
        );
      });

      setSelectedElement(clickedElement || null);

      if (clickedElement) {
        setIsDragging(true);
        setDragStart({ x: x - clickedElement.x, y: y - clickedElement.y });
      }
    } else {
      // Add new element
      const newElement: Element = {
        id: Date.now().toString(),
        type: selectedTool.name,
        x,
        y,
        width: 100,
        height: 100,
        color: selectedTool.color,
        text: selectedTool.name === 'text' ? 'Double click to edit' : undefined
      };

      setElements([...elements, newElement]);
      setSelectedElement(newElement);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDrawing) {
      const context = canvas.getContext('2d');
      if (!context) return;

      context.lineTo(x, y);
      context.stroke();
    } else if (isDragging && selectedElement) {
      const updatedElements = elements.map(el =>
        el.id === selectedElement.id
          ? {
              ...el,
              x: x - dragStart.x,
              y: y - dragStart.y
            }
          : el
      );
      setElements(updatedElements);
    } else if (isResizing && selectedElement) {
      const dx = x - dragStart.x;
      const dy = y - dragStart.y;
      const updatedElements = elements.map(el =>
        el.id === selectedElement.id
          ? {
              ...el,
              width: Math.max(50, el.width + dx),
              height: Math.max(50, el.height + dy)
            }
          : el
      );
      setElements(updatedElements);
      setDragStart({ x, y });
    }
  };

  const stopDrawing = () => {
    if (isDrawing || isDragging || isResizing) {
      saveState();
    }
    setIsDrawing(false);
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const newElement: Element = {
          id: Date.now().toString(),
          type: 'image',
          x: 50,
          y: 50,
          width: img.width,
          height: img.height,
          color: '#000000',
          imageUrl: event.target?.result as string
        };
        setElements([...elements, newElement]);
        setSelectedElement(newElement);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedElement || selectedElement.type !== 'text') return;

    const newText = prompt('Enter text:', selectedElement.text);
    if (newText === null) return;

    const updatedElements = elements.map(el =>
      el.id === selectedElement.id
        ? {
            ...el,
            text: newText
          }
        : el
    );
    setElements(updatedElements);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'canvas-creation.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSelectedTool({ ...selectedTool, name: 'select' })}
          className={`p-2 rounded ${
            selectedTool.name === 'select' ? 'bg-indigo-600' : 'bg-gray-700'
          } hover:bg-gray-600`}
          title="Select Tool"
        >
          <Square className="w-6 h-6" />
        </button>
        <button
          onClick={() => setSelectedTool({ ...selectedTool, name: 'draw' })}
          className={`p-2 rounded ${
            selectedTool.name === 'draw' ? 'bg-indigo-600' : 'bg-gray-700'
          } hover:bg-gray-600`}
          title="Draw Tool"
        >
          <Palette className="w-6 h-6" />
        </button>
        <button
          onClick={() => setSelectedTool({ ...selectedTool, name: 'rectangle' })}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600"
          title="Rectangle"
        >
          <Square className="w-6 h-6" />
        </button>
        <button
          onClick={() => setSelectedTool({ ...selectedTool, name: 'circle' })}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600"
          title="Circle"
        >
          <Circle className="w-6 h-6" />
        </button>
        <button
          onClick={() => setSelectedTool({ ...selectedTool, name: 'text' })}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600"
          title="Text"
        >
          <Type className="w-6 h-6" />
        </button>
        <label className="p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer">
          <Upload className="w-6 h-6" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <button
          onClick={downloadCanvas}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600"
          title="Download"
        >
          <Download className="w-6 h-6" />
        </button>
        <button
          onClick={undo}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600"
          disabled={currentStep <= 0}
          title="Undo (Ctrl+Z)"
        >
          <Undo className="w-6 h-6" />
        </button>
        <input
          type="color"
          value={selectedTool.color}
          onChange={(e) => setSelectedTool({ ...selectedTool, color: e.target.value })}
          className="w-10 h-10 rounded cursor-pointer"
          title="Color Picker"
        />
        <input
          type="range"
          min="1"
          max="50"
          value={selectedTool.size}
          onChange={(e) => setSelectedTool({ ...selectedTool, size: parseInt(e.target.value) })}
          className="w-32"
          title="Brush Size"
        />
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onDoubleClick={handleDoubleClick}
        className="border-4 border-gray-700 rounded-lg cursor-crosshair bg-white"
      />
      <div className="text-sm text-gray-400 mt-2">
        Tip: Use Select tool to move and resize elements. Press Ctrl+Z to undo changes.
      </div>
    </div>
  );
};

export default CanvasGame;