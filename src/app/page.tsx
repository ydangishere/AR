import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AR Portal
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Component Development & Preview System
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Build and preview components with design mockups. Perfect for developing UI components with PNG assets and comparing against design references.
          </p>
        </div>

        <div className="text-center">
          <Link href="/preview" className="inline-block group">
            <div className="bg-white/10 backdrop-blur rounded-xl p-12 hover:bg-white/20 transition-all duration-300 border border-white/20 max-w-md mx-auto">
              <div className="text-6xl mb-6">🎨</div>
              <h2 className="text-3xl font-bold mb-4">Component Gallery</h2>
              <p className="text-gray-300 mb-6">
                View components individually. Click any component to see it in full display.
              </p>
              <div className="bg-blue-500 text-white px-6 py-3 rounded-lg group-hover:bg-blue-400 transition-colors">
                Open Gallery →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">How it works:</h3>
          <div className="bg-black/30 rounded-lg p-6 max-w-2xl mx-auto text-left">
            <div className="font-mono text-sm space-y-2">
              <div><span className="text-gray-400">#</span> 1. Send design mockup + PNG assets</div>
              <div><span className="text-gray-400">#</span> 2. Component gets built</div>
              <div><span className="text-gray-400">#</span> 3. Click component in gallery to view full display</div>
              <div><span className="text-gray-400">#</span> 4. Each component displays individually</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
