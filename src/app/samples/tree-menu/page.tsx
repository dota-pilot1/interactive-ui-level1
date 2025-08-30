"use client";

import { useTree } from "@headless-tree/react";
import { syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature } from "@headless-tree/core";
import type { ItemInstance, TreeInstance } from "@headless-tree/core";
import React, { useState, useEffect } from "react";

const initialTreeData = {
  "package.json": { "//": "..." },
  src: {
    "App.tsx": { "//": "..." },
    "index.ts": { "//": "..." },
    components: {
      "Button.tsx": { "//": "..." },
      "Modal.tsx": { "//": "..." },
    },
  },
};

// Helper functions to work with tree data
const getItemFromPath = (data: any, path: string): { name: string; isFolder: boolean } | null => {
  const parts = path.split('/').filter(Boolean);
  let current = data;
  let name = path;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
      name = part;
    } else {
      return null;
    }
  }
  
  return {
    name,
    isFolder: current && typeof current === 'object' && !current.hasOwnProperty('//')
  };
};

const getChildrenFromPath = (data: any, path: string): string[] => {
  if (!path) return Object.keys(data);
  
  const parts = path.split('/').filter(Boolean);
  let current = data;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
    } else {
      return [];
    }
  }
  
  if (current && typeof current === 'object' && !current.hasOwnProperty('//')) {
    return Object.keys(current).map(key => path ? `${path}/${key}` : key);
  }
  
  return [];
};

// The TreeItem component
const TreeItem = ({ item }: { item: ItemInstance<string> }) => {
  const isExpanded = item.isExpanded();
  const isFolder = item.isFolder();
  const isSelected = item.isSelected();
  const itemData = getItemFromPath(initialTreeData, item.getItemData());
  const label = itemData?.name || item.getItemData();

  return (
    <div
      {...item.getProps()}
      style={{ paddingLeft: `${item.getItemMeta().level * 20}px` }}
      className={`flex items-center space-x-2 cursor-pointer hover:bg-slate-100 rounded-md p-1 ${isSelected ? "bg-blue-100" : ""}`}
    >
      <span>{isFolder ? (isExpanded ? "📂" : "📁") : "📄"}</span>
      <span>{label}</span>
    </div>
  );
};

export default function TreeMenuSamplePage() {
  // The main tree controller
  const tree = useTree<string>({
    rootItemId: "",
    getItemName: (item) => {
      const itemData = getItemFromPath(initialTreeData, item.getItemData());
      return itemData?.name || item.getItemData();
    },
    isItemFolder: (item) => {
      const itemData = getItemFromPath(initialTreeData, item.getItemData());
      return itemData?.isFolder || false;
    },
    dataLoader: {
      getItem: (itemId: string) => itemId,
      getChildren: (itemId: string) => getChildrenFromPath(initialTreeData, itemId)
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
    initialState: {
      expandedItems: ["src"]
    }
  });

  // Get all items for rendering
  const items = tree.getItems();

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          @headless-tree/react Example
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          A basic file explorer tree. Click on folders to expand and collapse
          them.
        </p>
        <div {...tree.getContainerProps()} className="p-4 bg-white border rounded-lg">
          {items.map((item) => (
            <TreeItem key={item.getId()} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
