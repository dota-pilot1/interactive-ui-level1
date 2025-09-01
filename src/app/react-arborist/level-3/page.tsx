"use client";

import React from "react";
import { Tree, NodeApi } from "react-arborist";

type Item = { id: string; name: string; children?: Item[] };

const data: Item[] = [
  { id: "root", name: "project", children: [{ id: "root/src", name: "src", children: [{ id: "root/src/a.ts", name: "a.ts" }] }] },
];

export default function ReactArboristLevel3() {
  const renderRow = ({ node }: { node: NodeApi<Item> }) => (
    <div className="flex items-center gap-2">
      <span>{node.isInternal ? (node.isOpen ? "📂" : "📁") : "📄"}</span>
      <span>{node.data.name}</span>
    </div>
  );
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 3</h1>
      <p className="text-gray-600 mb-4">커스텀 렌더러로 아이콘/레이블 제어.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} openByDefault>
          {renderRow}
        </Tree>
      </div>
    </div>
  );
}

