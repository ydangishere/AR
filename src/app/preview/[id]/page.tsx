'use client';

import { useParams } from 'next/navigation';
import ArcaneTopbar from '@/components/ui/ArcaneTopbar';
import OffertrackbuttonActive from '@/components/ui/OffertrackbuttonActive';

// Component registry - same as main preview
const components = [
  {
    id: 'arcane-topbar',
    name: 'Arcane Rush Topbar',
    description: 'Game topbar with character avatar and title',
    component: <ArcaneTopbar />
  },
  {
    id: 'offertrackbutton-active',
    name: 'Offertrackbutton Active',
    description: 'Special offer button (active state)',
    component: <OffertrackbuttonActive />
  }
];

export default function ComponentPreview() {
  const params = useParams();
  const componentId = params.id as string;
  
  const component = components.find(c => c.id === componentId);

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Not Found</h1>
          <p className="text-gray-600 mb-6">The component "{componentId}" does not exist.</p>
          <a 
            href="/preview" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← Back to Gallery
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{component.name}</h1>
            <p className="text-gray-600">{component.description}</p>
          </div>
          <a 
            href="/preview" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            ← Back to Gallery
          </a>
        </div>
      </div>

      {/* Component Display */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          {component.component}
        </div>
      </div>
    </div>
  );
}
