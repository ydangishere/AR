import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import styles from './SwipingTabBar.module.css';

export interface TabData {
  id: string;
  label: string;
  isActive?: boolean;
}

interface SwipingTabBarProps {
  tabs: TabData[];
  onTabChange: (tabId: string) => void;
  className?: string;
}

const SwipingTabBar: NextPage<SwipingTabBarProps> = ({ 
  tabs, 
  onTabChange, 
  className = '' 
}) => {
  const [needsScroll, setNeedsScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);

  // Check if overflow scroll is needed
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && tabsWrapperRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const tabsWidth = tabsWrapperRef.current.scrollWidth;
        setNeedsScroll(tabsWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [tabs]);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
  };

  return (
    <div 
      ref={containerRef}
      className={`${styles.tabContainer} ${needsScroll ? styles.scrollable : ''} ${className}`}
    >
      <div ref={tabsWrapperRef} className={styles.tabsWrapper}>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${tab.isActive ? styles.active : styles.inactive}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className={styles.tabContent}>
              {tab.label.split(' ').map((word, wordIndex) => (
                <div key={wordIndex} className={styles.tabText}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipingTabBar;
