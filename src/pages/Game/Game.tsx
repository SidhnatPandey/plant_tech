import { useState, useEffect } from 'react';
import { DesignElement as DesignElementComponent } from './DesignElement';
import { Toolbar } from './Toolbar';
import { toPng } from 'html-to-image';
import { DesignElement } from '../../constant/types';

interface HistoryState {
  elements: DesignElement[];
}

function Game() {
  const [elements, setElements] = useState<DesignElement[]>([]);
  const [history, setHistory] = useState<HistoryState[]>([{ elements: [] }]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const addToHistory = (newElements: DesignElement[]) => {
    const newHistory = history.slice(0, currentHistoryIndex + 1);
    newHistory.push({ elements: [...newElements] });
    setHistory(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          // Redo
          if (currentHistoryIndex < history.length - 1) {
            setCurrentHistoryIndex(currentHistoryIndex + 1);
            setElements([...history[currentHistoryIndex + 1].elements]);
          }
        } else {
          // Undo
          if (currentHistoryIndex > 0) {
            setCurrentHistoryIndex(currentHistoryIndex - 1);
            setElements([...history[currentHistoryIndex - 1].elements]);
          }
        }
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        const selectedElement = elements.find(el => el.isSelected);
        if (selectedElement) {
          const newElements = elements.filter(el => el.id !== selectedElement.id);
          setElements(newElements);
          addToHistory(newElements);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, currentHistoryIndex, elements]);

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newElement: DesignElement = {
        id: Date.now().toString(),
        type: 'image',
        src: e.target?.result as string,
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        isSelected: false,
      };
      const newElements = [...elements, newElement];
      setElements(newElements);
      addToHistory(newElements);
    };
    reader.readAsDataURL(file);
  };

  const handleAddSticker = (url: string) => {
    const newElement: DesignElement = {
      id: Date.now().toString(),
      type: 'sticker',
      src: url,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      isSelected: false,
    };
    const newElements = [...elements, newElement];
    setElements(newElements);
    addToHistory(newElements);
  };

  const handleElementUpdate = (id: string, updates: Partial<DesignElement>) => {
    const newElements = elements.map(el => {
      if (el.id === id) {
        return { ...el, ...updates };
      }
      // Deselect other elements when selecting one
      if (updates.isSelected && el.id !== id) {
        return { ...el, isSelected: false };
      }
      return el;
    });
    setElements(newElements);
    
    // Only add to history for completed actions (not during drag/resize)
    if (!updates.x && !updates.y && !updates.width && !updates.height) {
      addToHistory(newElements);
    }
  };

  const handleDownload = async () => {
    const board = document.getElementById('design-board');
    if (board) {
      try {
        const dataUrl = await toPng(board);
        const link = document.createElement('a');
        link.download = 'design.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to download design:', err);
      }
    }
  };

  const handleDeleteElement = (id: string) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
    addToHistory(newElements);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-64 p-4">
        <Toolbar
          onUpload={handleUpload}
          onDownload={handleDownload}
          onAddSticker={handleAddSticker}
        />
      </div>
      
      <div className="flex-1 p-4">
        <div
          id="design-board"
          className="w-[800px] h-[600px] bg-white rounded-lg shadow-lg relative mx-auto"
          onClick={() => {
            // Deselect all elements when clicking on the board
            const newElements = elements.map(el => ({ ...el, isSelected: false }));
            setElements(newElements);
          }}
        >
          {elements.map(element => (
            <DesignElementComponent
              key={element.id}
              element={element}
              onUpdate={handleElementUpdate}
              onDelete={handleDeleteElement}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;