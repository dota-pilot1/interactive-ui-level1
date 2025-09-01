"use client";

import React from "react";
import { Tree, NodeApi } from "react-arborist";

type Item = { id: string; name: string; children?: Item[] };

const data: Item[] = [
  { id: "root", name: "root", children: [{ id: "root/a", name: "a" }, { id: "root/b", name: "b" }] },
];

export default function ReactArboristLevel6() {
  const renderRow = ({ node }: { node: NodeApi<Item> }) => (
    <div className="flex items-center gap-2">
      <input type="checkbox" className="mr-2" />
      <span>{node.data.name}</span>
    </div>
  );
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 6</h1>
      <p className="text-gray-600 mb-4">커스텀 행(체크박스 추가).</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} openByDefault>
          {renderRow}
        </Tree>
      </div>
    </div>
  );
}

