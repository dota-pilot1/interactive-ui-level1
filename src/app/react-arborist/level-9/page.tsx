"use client";

import React from "react";
import { Tree } from "react-arborist";

const data = [
  { id: "root", name: "root", children: [{ id: "root/a", name: "a" }, { id: "root/b", name: "b" }] },
];

export default function ReactArboristLevel9() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 9</h1>
      <p className="text-gray-600 mb-4">컨텍스트에 맞게 커스텀 기능을 추가할 수 있습니다.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} />
      </div>
    </div>
  );
}

