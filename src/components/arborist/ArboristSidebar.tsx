"use client";

import React from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import { FileText, FolderOpen, Folder } from "lucide-react";
import { useRouter } from "next/navigation";

export interface ArboristNavNode {
  id: string;
  name: string;
  children?: ArboristNavNode[];
  isLeaf?: boolean;
  path?: string;
}

// Static structure for now; later replace with backend data
export const arboristNavData: ArboristNavNode[] = [
  {
    id: "overview",
    name: "개요",
    children: [
      { id: "overview-home", name: "React Arborist 홈", isLeaf: true, path: "/react-arborist" },
    ],
  },
  {
    id: "levels",
    name: "레벨",
    children: Array.from({ length: 10 }, (_, i) => i + 1).map((lv) => ({
      id: `level-${lv}`,
      name: `Level ${lv}`,
      isLeaf: true,
      path: `/react-arborist/level-${lv}`,
    })),
  },
  {
    id: "docs",
    name: "문서",
    children: [
      { id: "install", name: "설치 가이드", isLeaf: true, path: "/docs/react-arborist/installation" },
      { id: "guide", name: "사용 가이드", isLeaf: true, path: "/docs/react-arborist/guide" },
      { id: "api", name: "API 레퍼런스", isLeaf: true, path: "/docs/react-arborist/api" },
      { id: "level1-manual", name: "Level 1 따라하기", isLeaf: true, path: "/docs/react-arborist/level-1-manual" },
      { id: "level2-manual", name: "Level 2 따라하기", isLeaf: true, path: "/docs/react-arborist/level-2-manual" },
      { id: "level2-run", name: "Level 2 실행하기", isLeaf: true, path: "/react-arborist/level-2" },
    ],
  },
];

function ArboristNode({ node, style, dragHandle }: NodeRendererProps<ArboristNavNode>) {
  const router = useRouter();

  const Icon = node.data.isLeaf ? FileText : node.isOpen ? FolderOpen : Folder;

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

export function ArboristSidebar({ className = "" }: { className?: string }) {
  return (
    <aside className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-slate-900">React Arborist</h2>
        <div className="h-[520px]">
          <Tree
            data={arboristNavData}
            openByDefault={true}
            width="100%"
            height={520}
            indent={24}
            rowHeight={36}
          >
            {ArboristNode}
          </Tree>
        </div>
      </div>
    </aside>
  );
}

