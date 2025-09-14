import Link from 'next/link';
import ArcaneTopbar from '@/components/ui/ArcaneTopbar';

export default function ArcaneTopbarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Component Gallery</h1>
          <Link
            href="/preview"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Arcane Rush Topbar</h2>
          <p className="text-gray-600">Game topbar with character avatar and title</p>
          <p className="text-sm text-green-600 mt-2">✅ Component loaded successfully</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <ArcaneTopbar />
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Component Info</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Uses PNG assets for background, icons, and character avatar</li>
            <li>• Fixed height of 52px to match background texture</li>
            <li>• Responsive layout with absolute positioning</li>
            <li>• Built with TypeScript and Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
