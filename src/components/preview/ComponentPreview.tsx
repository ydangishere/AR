'use client';

import { useState } from 'react';

interface ComponentPreviewProps {
  name: string;
  description?: string;
  children: React.ReactNode;
  designImage?: string;
}

export default function ComponentPreview({ 
  name, 
  description, 
  children, 
  designImage 
}: ComponentPreviewProps) {
  const [showDesign, setShowDesign] = useState(false);

  return (
    <div className="border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        {designImage && (
          <div className="flex gap-2">
            <button
              onClick={() => setShowDesign(false)}
              className={`px-3 py-1 rounded ${!showDesign ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Component
            </button>
            <button
              onClick={() => setShowDesign(true)}
              className={`px-3 py-1 rounded ${showDesign ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Design
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-4 rounded">
        {showDesign && designImage ? (
          <img src={designImage} alt={`${name} design`} className="max-w-full h-auto" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
