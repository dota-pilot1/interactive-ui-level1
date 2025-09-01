"use client";

import React from "react";
import { Tree, MoveHandler } from "react-arborist";

type TreeData = {
  id: string;
  name: string;
  children?: TreeData[];
};

const data: TreeData[] = [
  { id: "root", name: "root", children: [{ id: "root/a", name: "a" }, { id: "root/b", name: "b" }] },
];

export default function ReactArboristLevel8() {
  const onMove: MoveHandler<TreeData> = (args) => console.log("move", args);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 8</h1>
      <p className="text-gray-600 mb-4">드래그 앤 드롭 이동 로그 확인(onMove).</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} onMove={onMove} />
      </div>
    </div>
  );
}

