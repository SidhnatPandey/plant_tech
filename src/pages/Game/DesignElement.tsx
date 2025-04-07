import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { DesignElement as DesignElementType } from '../../constant/types';
import { Trash2 } from 'lucide-react';

interface Props {
  element: DesignElementType;
  onUpdate: (id: string, updates: Partial<DesignElementType>) => void;
  onDelete: (id: string) => void;
}

export const DesignElement: React.FC<Props> = ({ element, onUpdate, onDelete }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartDimensions, setResizeStartDimensions] = useState({ width: 0, height: 0 });
  const [resizeStartPosition, setResizeStartPosition] = useState({ x: 0, y: 0 });
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);

  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!resizeHandle) return;

        e.preventDefault();
        const deltaX = e.clientX - resizeStartPosition.x;
        const deltaY = e.clientY - resizeStartPosition.y;

        let newWidth = resizeStartDimensions.width;
        let newHeight = resizeStartDimensions.height;

        // Maintain aspect ratio if shift is pressed
        const aspectRatio = resizeStartDimensions.width / resizeStartDimensions.height;
        const keepAspectRatio = e.shiftKey;

        switch (resizeHandle) {
          case 'e':
            newWidth = resizeStartDimensions.width + deltaX;
            if (keepAspectRatio) newHeight = newWidth / aspectRatio;
            break;
          case 'w':
            newWidth = resizeStartDimensions.width - deltaX;
            if (keepAspectRatio) newHeight = newWidth / aspectRatio;
            break;
          case 's':
            newHeight = resizeStartDimensions.height + deltaY;
            if (keepAspectRatio) newWidth = newHeight * aspectRatio;
            break;
          case 'n':
            newHeight = resizeStartDimensions.height - deltaY;
            if (keepAspectRatio) newWidth = newHeight * aspectRatio;
            break;
          case 'se':
            newWidth = resizeStartDimensions.width + deltaX;
            newHeight = resizeStartDimensions.height + deltaY;
            if (keepAspectRatio) {
              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                newHeight = newWidth / aspectRatio;
              } else {
                newWidth = newHeight * aspectRatio;
              }
            }
            break;
          case 'sw':
            newWidth = resizeStartDimensions.width - deltaX;
            newHeight = resizeStartDimensions.height + deltaY;
            if (keepAspectRatio) {
              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                newHeight = newWidth / aspectRatio;
              } else {
                newWidth = newHeight * aspectRatio;
              }
            }
            break;
          case 'ne':
            newWidth = resizeStartDimensions.width + deltaX;
            newHeight = resizeStartDimensions.height - deltaY;
            if (keepAspectRatio) {
              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                newHeight = newWidth / aspectRatio;
              } else {
                newWidth = newHeight * aspectRatio;
              }
            }
            break;
          case 'nw':
            newWidth = resizeStartDimensions.width - deltaX;
            newHeight = resizeStartDimensions.height - deltaY;
            if (keepAspectRatio) {
              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                newHeight = newWidth / aspectRatio;
              } else {
                newWidth = newHeight * aspectRatio;
              }
            }
            break;
        }

        // Ensure minimum dimensions
        newWidth = Math.max(50, newWidth);
        newHeight = Math.max(50, newHeight);

        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          onUpdate(element.id, { width: newWidth, height: newHeight });
        });
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setResizeHandle(null);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, resizeHandle, resizeStartPosition, resizeStartDimensions, element.id, onUpdate]);

  const handleResizeStart = (e: React.MouseEvent, handle: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeHandle(handle);
    setResizeStartDimensions({ width: element.width, height: element.height });
    setResizeStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDrag = (_e: any, position: { x: number; y: number }) => {
    requestAnimationFrame(() => {
      onUpdate(element.id, { x: position.x, y: position.y });
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdate(element.id, { isSelected: true });
  };

  return (
    <Draggable
      position={{ x: element.x, y: element.y }}
      onDrag={handleDrag}
      bounds="parent"
      disabled={isResizing}
    >
      <div
        className="absolute group"
        style={{
          width: element.width,
          height: element.height,
          touchAction: 'none',
          userSelect: 'none',
        }}
        onClick={handleClick}
      >
        <img
          src={element.src}
          alt="design element"
          className="w-full h-full object-contain"
          draggable={false}
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Delete button */}
        {element.isSelected && (
          <button
            className="absolute -top-8 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(element.id);
            }}
          >
            <Trash2 size={16} />
          </button>
        )}
        
        {/* Resize handles */}
        <div 
          className={`absolute inset-0 border-2 ${
            element.isSelected ? 'border-blue-500' : 'border-transparent group-hover:border-blue-500'
          }`}
        >
          {/* Corner handles */}
          <div
            className="absolute top-0 left-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-nw-resize -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
          />
          <div
            className="absolute top-0 right-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-ne-resize translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
          />
          <div
            className="absolute bottom-0 left-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-sw-resize -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
          />
          <div
            className="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-se-resize translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
          />

          {/* Edge handles */}
          <div
            className="absolute top-1/2 left-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-w-resize -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
          />
          <div
            className="absolute top-1/2 right-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-e-resize translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
          />
          <div
            className="absolute top-0 left-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-n-resize -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
          />
          <div
            className="absolute bottom-0 left-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full cursor-s-resize -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100"
            onMouseDown={(e) => handleResizeStart(e, 's')}
          />
        </div>
      </div>
    </Draggable>
  );
};