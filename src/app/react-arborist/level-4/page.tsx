"use client";

import React from "react";
import { Tree, NodeApi } from "react-arborist";

type ItemType = { id: string; name: string; children?: { id: string; name: string; }[] };

const data: ItemType[] = [
  { id: "a", name: "A", children: [{ id: "a-1", name: "A-1" }] },
  { id: "b", name: "B", children: [{ id: "b-1", name: "B-1" }] },
];

export default function ReactArboristLevel4() {
  const handleSelect = (nodes: NodeApi<ItemType>[]) => {
    const ids = nodes.map(node => node.id.toString());
    console.log("selected:", ids);
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 4</h1>
      <p className="text-gray-600 mb-4">선택 이벤트 핸들링.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} onSelect={handleSelect} />
      </div>
    </div>
  );
}

