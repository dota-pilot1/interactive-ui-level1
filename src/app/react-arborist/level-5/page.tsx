"use client";

import React from "react";
import { Tree } from "react-arborist";

const data = [
  { id: "folder", name: "folder", children: [{ id: "file-1", name: "file-1.txt" }] },
];

export default function ReactArboristLevel5() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 5</h1>
      <p className="text-gray-600 mb-4">열림/닫힘 이벤트.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} />
      </div>
    </div>
  );
}

