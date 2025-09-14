'use client';

import { useState, useEffect } from 'react';
import SampleCard from '@/components/ui/SampleCard';
import ArcaneTopbar from '@/components/ui/ArcaneTopbar';

// Component list - Add new components here
const components = [
  {
    id: 'arcane-topbar',
    name: 'Arcane Rush Topbar',
    description: 'Game topbar with character avatar and title',
    component: <ArcaneTopbar />
  },
  {
    id: 'sample-card',
    name: 'Sample Card',
    description: 'Demo component',
    component: <SampleCard />
  }
  // Add more components as: { id: 'component-name', name: 'Display Name', description: 'Brief description', component: <YourComponent /> }
];

export default function PreviewPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  useEffect(() => {
    console.log('Preview page mounted');
    
    // Check for hash-based routing as fallback
    const hash = window.location.hash.replace('#', '');
    if (hash && components.find(c => c.id === hash)) {
      console.log('Setting component from hash:', hash);
      setSelectedComponent(hash);
    }
  }, []);

  const selected = components.find(c => c.id === selectedComponent);

  const handleComponentClick = (componentId: string) => {
    console.log('Clicked component:', componentId);
    setSelectedComponent(componentId);
    // Update URL hash for shareable links
    window.location.hash = componentId;
  };

  const handleBackClick = () => {
    console.log('Back clicked');
    setSelectedComponent(null);
    // Clear URL hash
    window.location.hash = '';
  };

  // Remove loading state for GitHub Pages compatibility
  // if (!mounted) {
  //   return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Component Gallery</h1>
          {selectedComponent && (
            <button
              onClick={handleBackClick}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              ← Back to List
            </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {!selectedComponent ? (
          // Component List View
          <div>
            <p className="text-gray-600 mb-6">Click on any component to view it in full display</p>
            <div className="grid gap-4">
              {components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Button clicked for:', comp.id);
                    handleComponentClick(comp.id);
                  }}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer border transition-all text-left w-full"
                  type="button"
                >
                  <h3 className="font-semibold text-lg">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                  <div className="text-blue-500 text-sm mt-2">Click to view →</div>
                </button>
              ))}
              
              {components.length === 1 && (
                <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-500">
                  <p>🎨 Ready for more components!</p>
                  <p className="text-sm">Add new components to the list above</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Single Component View
          selected && (
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
                <p className="text-gray-600">{selected.description}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                {selected.component}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
