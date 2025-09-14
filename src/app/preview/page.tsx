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
    // Function to check and set hash
    const checkAndSetHash = () => {
      if (typeof window === 'undefined') return;
      
      const hash = window.location.hash.replace('#', '');
      console.log('Checking hash:', hash);
      console.log('Current URL:', window.location.href);
      
      if (hash && components.find(c => c.id === hash)) {
        console.log('Setting selectedComponent to:', hash);
        setSelectedComponent(hash);
      } else if (hash) {
        console.log('Hash not found in components:', hash);
        setSelectedComponent(null);
      } else {
        console.log('No hash, showing list');
        setSelectedComponent(null);
      }
    };
    
    // Initial check
    checkAndSetHash();
    
    // Listen for hash changes
    const handleHashChange = () => {
      console.log('Hash changed');
      checkAndSetHash();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Also check on popstate (back/forward buttons)
    window.addEventListener('popstate', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
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

  // Remove loading state for static export compatibility

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
        {/* Debug info */}
        <div className="bg-yellow-100 p-2 mb-4 text-xs">
          <strong>Debug:</strong> selectedComponent = &quot;{selectedComponent || 'null'}&quot;
          <br/>
          <strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'SSR'}
          <br/>
          <strong>Available components:</strong> [{components.map(c => c.id).join(', ')}]
          <br/>
          <strong>Test direct links:</strong> 
          <a href="#arcane-topbar" className="text-blue-600 ml-2 underline">→ arcane-topbar</a>
          <a href="#sample-card" className="text-blue-600 ml-2 underline">→ sample-card</a>
          <a href="#" className="text-gray-600 ml-2 underline">→ list</a>
        </div>
        
        {!selectedComponent ? (
          // Component List View
          <div>
            <p className="text-gray-600 mb-6">Click on any component to view it in full display</p>
            <div className="grid gap-4">
              {components.map((comp) => (
                <div key={comp.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md border transition-all">
                  <h3 className="font-semibold text-lg">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                  <a 
                    href={`#${comp.id}`}
                    onClick={() => {
                      console.log('Link clicked for:', comp.id);
                      handleComponentClick(comp.id);
                    }}
                    className="inline-block text-blue-500 text-sm mt-2 hover:text-blue-700 hover:underline"
                  >
                    Click to view →
                  </a>
                </div>
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
