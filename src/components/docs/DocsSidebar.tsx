"use client";

import React from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import { FileText, FolderOpen, Folder } from "lucide-react";
import { useRouter } from "next/navigation";

export interface DocNode {
  id: string;
  name: string;
  children?: DocNode[];
  isLeaf?: boolean;
  path?: string;
}

export const docsData: DocNode[] = [
  {
    id: "getting-started",
    name: "시작하기",
    children: [
      {
        id: "installation",
        name: "설치 가이드",
        isLeaf: true,
        path: "/docs/getting-started/installation"
      },
      {
        id: "quick-start",
        name: "빠른 시작",
        isLeaf: true,
        path: "/docs/getting-started/quick-start"
      },
      {
        id: "quick-examples",
        name: "빠른 예제 실행",
        isLeaf: true,
        path: "/docs/getting-started/quick-examples"
      }
    ]
  },
  {
    id: "libraries",
    name: "라이브러리",
    children: [
      {
        id: "lib-dnd-kit",
        name: "dnd-kit",
        children: [
          { id: "dnd-kit-install", name: "설치 가이드", isLeaf: true, path: "/docs/dnd-kit/installation" },
          { id: "dnd-kit-guide", name: "사용 가이드", isLeaf: true, path: "/docs/components/dnd-kit-manual" },
        ],
      },
      {
        id: "lib-dockview",
        name: "Dockview",
        children: [
          { id: "dockview-install", name: "설치 가이드", isLeaf: true, path: "/docs/dockview/installation" },
          { id: "dockview-guide", name: "사용 가이드", isLeaf: true, path: "/docs/components/dockview-manual" },
        ],
      },
      {
        id: "lib-lexical",
        name: "Lexical",
        children: [
          { id: "lexical-install", name: "설치 가이드", isLeaf: true, path: "/docs/lexical-editor/installation" },
          { id: "lexical-guide", name: "사용 가이드", isLeaf: true, path: "/docs/lexical-editor/guide" },
        ],
      },
      {
        id: "lib-r3f",
        name: "React Three Fiber",
        children: [
          { id: "r3f-install", name: "설치 가이드", isLeaf: true, path: "/docs/react-three-fiber/installation" },
          { id: "r3f-guide", name: "사용 가이드", isLeaf: true, path: "/docs/react-three-fiber/guide" },
        ],
      },
      {
        id: "lib-react-arborist",
        name: "React Arborist",
        children: [
          { id: "react-arborist-install", name: "설치 가이드", isLeaf: true, path: "/docs/react-arborist/installation" },
          { id: "react-arborist-guide", name: "사용 가이드", isLeaf: true, path: "/docs/react-arborist/guide" },
          { id: "react-arborist-level1", name: "Level 1 따라하기", isLeaf: true, path: "/docs/react-arborist/level-1-manual" },
          { id: "react-arborist-level2-manual", name: "Level 2 따라하기", isLeaf: true, path: "/docs/react-arborist/level-2-manual" },
          { id: "react-arborist-level2", name: "Level 2 실행하기", isLeaf: true, path: "/react-arborist/level-2" },
        ],
      },
      {
        id: "lib-ag-grid",
        name: "AG Grid",
        children: [
          { id: "ag-grid-install", name: "설치 가이드", isLeaf: true, path: "/docs/ag-grid/installation" },
          { id: "ag-grid-guide", name: "사용 가이드", isLeaf: true, path: "/docs/ag-grid/guide" },
        ],
      },
      {
        id: "lib-headless-tree",
        name: "Headless Tree",
        children: [
          { id: "headless-tree-install", name: "설치 가이드", isLeaf: true, path: "/docs/headless-tree/installation" },
          { id: "headless-tree-guide", name: "사용 가이드", isLeaf: true, path: "/docs/components/headless-tree-manual" },
        ],
      },
      {
        id: "lib-framer-motion",
        name: "Framer Motion",
        children: [
          { id: "framer-motion-install", name: "설치 가이드", isLeaf: true, path: "/docs/framer-motion/installation" },
          { id: "framer-motion-guide", name: "사용 가이드", isLeaf: true, path: "/docs/framer-motion/guide" },
        ],
      },
    ],
  },
  {
    id: "advanced",
    name: "고급 기능",
    children: [
      {
        id: "performance",
        name: "성능 최적화",
        isLeaf: true,
        path: "/docs/advanced/performance"
      },
      {
        id: "customization",
        name: "커스터마이징",
        isLeaf: true,
        path: "/docs/advanced/customization"
      }
    ]
  }
  ,
  {
    id: "patterns",
    name: "패턴/방법론",
    children: [
      { id: "tree-menu-pattern", name: "트리 메뉴 구현 방법론", isLeaf: true, path: "/docs/patterns/tree-menu" },
    ]
  }
];

function DocTreeNode({ node, style, dragHandle }: NodeRendererProps<DocNode>) {
  const router = useRouter();
  
  const Icon = node.data.isLeaf 
    ? FileText 
    : node.isOpen 
      ? FolderOpen 
      : Folder;

  const handleClick = () => {
    if (node.data.isLeaf && node.data.path) {
      router.push(node.data.path);
    } else if (!node.data.isLeaf) {
      node.toggle();
    }
  };

  return (
    <div 
      ref={dragHandle} 
      style={style}
      className={`flex items-center space-x-2 cursor-pointer hover:bg-slate-100 rounded-md p-2 transition-colors ${
        node.isSelected ? "bg-blue-100" : ""
      }`}
      onClick={handleClick}
    >
      <Icon size={16} className="text-slate-600" />
      <span className="text-sm text-slate-800 select-none">{node.data.name}</span>
    </div>
  );
}

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className = "" }: DocsSidebarProps) {
  return (
    <div className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-slate-900">문서</h2>
        <div className="h-96">
          <Tree
            data={docsData}
            openByDefault={false}
            width="100%"
            height={400}
            indent={24}
            rowHeight={36}
          >
            {DocTreeNode}
          </Tree>
        </div>
      </div>
    </div>
  );
}
