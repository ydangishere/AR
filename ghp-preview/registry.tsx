// Component Registry for GitHub Pages Preview
// This file automatically discovers and registers Preview components

import React from 'react'

// Auto-import all Preview components from src/**/Preview.tsx
// This will be populated automatically when we scan for Preview files

export interface ComponentInfo {
  id: string
  name: string
  description: string
  component: React.ReactElement
  path: string
}

export class ComponentRegistry {
  private static components: ComponentInfo[] = []

  static register(component: ComponentInfo) {
    this.components.push(component)
  }

  static getAll(): ComponentInfo[] {
    return [...this.components]
  }

  static getById(id: string): ComponentInfo | undefined {
    return this.components.find(c => c.id === id)
  }

  static clear() {
    this.components = []
  }
}

// Export for use in other files
export { ComponentRegistry as default }

