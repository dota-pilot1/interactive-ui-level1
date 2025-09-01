"use client";

import React from "react";
import { Tree, NodeApi } from "react-arborist";

type TreeItem = { id: string; name: string; children?: TreeItem[] };

const data: TreeItem[] = [
  { id: "root", name: "root", children: [{ id: "root/a", name: "a" }, { id: "root/b", name: "b" }] },
];

export default function ReactArboristLevel7() {
  const onSelect = (nodes: NodeApi<TreeItem>[]) => {
    const ids = nodes.map(node => node.id.toString());
    console.log("selected", ids);
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist - Level 7</h1>
      <p className="text-gray-600 mb-4">멀티 선택(onSelect 콜백으로 확인).</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree data={data} selectionFollowsFocus onSelect={onSelect} />
      </div>
    </div>
  );
}

