import React, { useEffect, useState } from 'react'
import { ComponentRegistry } from './registry'

// Import components from the main project
import ArcaneTopbar from '../src/components/ui/ArcaneTopbar'
import OffertrackbuttonActive from '../src/components/ui/OffertrackbuttonActive'
import BonustrackbuttonInactive from '../src/components/ui/BonustrackbuttonInactive'
import BGAll from '../src/components/ui/BGAll'
import SwipingTabBar from '../src/components/ui/SwipingTabBar'

// Demo component with state management
function SwipingTabBarDemo() {
  const [activeTab, setActiveTab] = useState('special-store');
  
  const tabs = [
    { id: 'special-store', label: 'Special Store' },
    { id: 'featured-offers', label: 'Featured Offers' },
    { id: 'dealers', label: 'Dealers' },
    { id: 'chests', label: 'Chests' },
    { id: 'gems', label: 'Gems' }
  ].map(tab => ({
    ...tab,
    isActive: tab.id === activeTab
  }));

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    console.log('Tab changed to:', tabId);
  };

  return (
    <SwipingTabBar 
      tabs={tabs}
      onTabChange={handleTabChange}
    />
  );
}

// Component registry - mirrors the local preview system
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
  },
  {
    id: 'bonustrackbutton-inactive',
    name: 'Bonustrackbutton Inactive',
    description: 'Bonus track button (inactive state)',
    component: <BonustrackbuttonInactive />
  },
  {
    id: 'bg-all',
    name: 'Background Plane',
    description: 'Responsive background layer',
    component: <BGAll />
  },
  {
    id: 'swiping-tab-bar',
    name: 'Swiping Tab Bar',
    description: 'Responsive tab bar with overflow scroll and hexagonal design',
    component: <SwipingTabBarDemo />
  }
  // Add more components as: { id: 'component-name', name: 'Display Name', description: 'Brief description', component: <YourComponent /> }
]

export default function App() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  // Hash-based routing for GH Pages: /AR/#/<id>
  useEffect(() => {
    const readFromHash = () => {
      const hash = window.location.hash || ''
      const id = hash.startsWith('#/') ? hash.slice(2) : ''
      if (id) setSelectedComponent(id)
    }
    readFromHash()
    window.addEventListener('hashchange', readFromHash)
    return () => window.removeEventListener('hashchange', readFromHash)
  }, [])

  const selected = components.find(c => c.id === selectedComponent)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Component Gallery - GitHub Pages</h1>
          {selectedComponent && (
            <button
              onClick={() => { setSelectedComponent(null); window.location.hash = '' }}
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
                <div
                  key={comp.id}
                  onClick={() => { setSelectedComponent(comp.id); window.location.hash = '/' + comp.id }}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer border transition-all"
                >
                  <h3 className="font-semibold text-lg">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                  <div className="text-blue-500 text-sm mt-2">Click to view →</div>
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
  )
}

