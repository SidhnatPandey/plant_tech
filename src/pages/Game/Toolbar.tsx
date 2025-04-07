import React, { useEffect, useRef, useState } from 'react';
import { Upload, Download, HandPlatter, Accessibility, Flower2 } from 'lucide-react';
import { acessories, planters, plants } from '../../constant/plant_constant';

interface Props {
  onUpload: (file: File) => void;
  onDownload: () => void;
  onAddSticker: (type: string) => void;
}

export const Toolbar: React.FC<Props> = ({ onUpload, onDownload, onAddSticker }) => {
  const [visiblePlanters, setVisiblePlanters] = useState<typeof planters>([]);
  const [visibleAccessories, setVisibleAccessories] = useState<typeof acessories>([]);
  const [visiblePlants, setVisiblePlants] = useState<typeof plants>([]);
  const plantersContainerRef = useRef<HTMLDivElement>(null);
  const accessoriesContainerRef = useRef<HTMLDivElement>(null);
  const plantsContainerRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          if (container === plantersContainerRef.current) {
            setVisiblePlanters(planters);
          } else if (container === accessoriesContainerRef.current) {
            setVisibleAccessories(acessories);
          } else if (container === plantsContainerRef.current) {
            setVisiblePlants(plants);
          }
          observer.unobserve(container);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    });

    if (plantersContainerRef.current) {
      observer.observe(plantersContainerRef.current);
    }
    if (accessoriesContainerRef.current) {
      observer.observe(accessoriesContainerRef.current);
    }
    if(plantsContainerRef.current) {
        observer.observe(plantsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
        <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <Upload size={20} />
          <span>Upload Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

        <button
          onClick={onDownload}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded"
        >
          <Download size={20} />
          <span>Download</span>
        </button>
      </div>

      <div className="space-y-4">
        {/* Planters Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="flex items-center gap-2 mb-3 font-medium">
            <HandPlatter size={20} />
            <span>Planters</span>
          </h3>
          <div 
            ref={plantersContainerRef}
            className="h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-3 gap-2">
              {visiblePlanters.map((sticker, index) => (
                <div 
                  key={`${sticker.type}-${index}`}
                  className="aspect-square bg-white rounded-lg p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src={sticker.url}
                    alt={`planter-${index}`}
                    className="w-full h-full object-contain"
                    onClick={() => onAddSticker(sticker.url)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plants Card */}

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="flex items-center gap-2 mb-3 font-medium">
          <Flower2 size={20} />
            <span>Plants</span>
          </h3>
          <div 
            ref={plantsContainerRef}
            className="h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-3 gap-2">
              {visiblePlants.map((plant, index) => (
                <div 
                  key={`${plant.type}-${index}`}
                  className="aspect-square bg-white rounded-lg p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src={plant.url}
                    alt={`accessory-${index}`}
                    className="w-full h-full object-contain"
                    onClick={() => onAddSticker(plant.url)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accessories Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="flex items-center gap-2 mb-3 font-medium">
          <Accessibility size={25} />
            <span>Accessories</span>
          </h3>
          <div 
            ref={accessoriesContainerRef}
            className="h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-3 gap-2">
              {visibleAccessories.map((accessory, index) => (
                <div 
                  key={`${accessory.type}-${index}`}
                  className="aspect-square bg-white rounded-lg p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src={accessory.url}
                    alt={`accessory-${index}`}
                    className="w-full h-full object-contain"
                    onClick={() => onAddSticker(accessory.url)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};