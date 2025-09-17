'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Component {
  id: string;
  name: string;
  description: string;
  component: React.ReactElement;
}

interface ComponentPreviewClientProps {
  components: Component[];
}

export default function ComponentPreviewClient({ components }: ComponentPreviewClientProps) {
  const params = useParams();
  const componentId = params.id as string;
  
  const component = components.find(c => c.id === componentId);

  if (!component) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Not Found</h1>
          <p className="text-gray-600 mb-6">The component &quot;{componentId}&quot; does not exist.</p>
          <Link 
            href="/preview" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← Back to Gallery
          </Link>
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
          <Link 
            href="/preview" 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            ← Back to Gallery
          </Link>
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
