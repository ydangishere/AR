import Link from 'next/link';

// Component list - Add new components here
const components = [
  {
    id: 'arcane-topbar',
    name: 'Arcane Rush Topbar',
    description: 'Game topbar with character avatar and title',
    path: '/preview/arcane-topbar'
  },
  {
    id: 'sample-card',
    name: 'Sample Card',
    description: 'Demo component',
    path: '/preview/sample-card'
  }
  // Add more components as: { id: 'component-name', name: 'Display Name', description: 'Brief description', path: '/preview/component-name' }
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Component Gallery</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <p className="text-gray-600 mb-6">Click on any component to view it in full display</p>
        
        <div className="grid gap-4">
          {components.map((comp) => (
            <div key={comp.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md border transition-all">
              <h3 className="font-semibold text-lg">{comp.name}</h3>
              <p className="text-gray-600 text-sm">{comp.description}</p>
              <Link 
                href={comp.path}
                className="inline-block text-blue-500 text-sm mt-2 hover:text-blue-700 hover:underline"
              >
                View Component →
              </Link>
            </div>
          ))}
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-blue-800 font-medium">🎨 Simple & Reliable Navigation</p>
            <p className="text-blue-600 text-sm mt-1">Each component has its own page for better performance and sharing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
