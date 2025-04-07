import React from 'react';
import { Upload, Download, Sticker } from 'lucide-react';

interface Props {
  onUpload: (file: File) => void;
  onDownload: () => void;
  onAddSticker: (type: string) => void;
}

export const Toolbar: React.FC<Props> = ({ onUpload, onDownload, onAddSticker }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  const stickers = [
    { type: 'plant', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200' },
    { type: 'planter', url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200' }
  ];

  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
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

      <div className="border-t pt-4">
        <h3 className="flex items-center gap-2 mb-2">
          <Sticker size={20} />
          <span>Stickers</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {stickers.map((sticker) => (
            <img
              key={sticker.type}
              src={sticker.url}
              alt={sticker.type}
              className="w-16 h-16 object-cover cursor-pointer hover:opacity-75"
              onClick={() => onAddSticker(sticker.url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};