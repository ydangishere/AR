export default function SampleCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4"></div>
      <h3 className="text-lg font-bold mb-2">Sample Component</h3>
      <p className="text-gray-600 mb-4">
        This is a sample component to demonstrate the preview system.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Action Button
      </button>
    </div>
  );
}
