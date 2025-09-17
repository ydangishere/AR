'use client';

import { useState } from 'react';
import SwipingTabBar, { TabData } from './SwipingTabBar';

export default function SwipingTabBarDemo() {
  const [activeTab, setActiveTab] = useState<string>('special-store');

  const tabs: TabData[] = [
    { id: 'special-store', label: 'Special Store' },
    { id: 'featured-offers', label: 'Featured Offers' },
    { id: 'dealers', label: 'Dealers' },
    { id: 'chests', label: 'Chests' },
    { id: 'gems', label: 'Gems' }
  ].map((tab) => ({ ...tab, isActive: tab.id === activeTab }));

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <SwipingTabBar tabs={tabs} onTabChange={handleTabChange} />
  );
}


