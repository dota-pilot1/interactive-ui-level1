"use client";

import React from "react";
import { Tree } from "react-arborist";

const data = [
  { id: "project", name: "project", children: [
    { id: "project/src", name: "src", children: [
      { id: "project/src/index.ts", name: "index.ts" },
      { id: "project/src/app.tsx", name: "app.tsx" },
    ]},
    { id: "project/package.json", name: "package.json" }
  ]}
];

export default function ReactArboristLevel10() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 10</h1>
      <p className="text-gray-600 mb-4">트리 구성 커스터마이징의 기반이 되는 샘플.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} openByDefault indent={20} rowHeight={28} />
      </div>
    </div>
  );
}

