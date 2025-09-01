"use client";

import React, { useState } from "react";
import { Tree, NodeRendererProps } from "react-arborist";

type Item = { id: string; name: string; children?: Item[] };

const data: Item[] = [
  {
    id: "src",
    name: "src",
    children: [
      { id: "src/app.tsx", name: "app.tsx" },
      { id: "src/index.ts", name: "index.ts" },
      {
        id: "src/components",
        name: "components",
        children: [{ id: "src/components/Button.tsx", name: "Button.tsx" }],
      },
    ],
  },
  { id: "package.json", name: "package.json" },
];

export default function ReactArboristLevel1() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">React Arborist - Level 1</h1>
      <p className="text-gray-600 mb-4">정적 데이터 + 기본 옵션. 계층 구조/들여쓰기는 제공된 style을 적용해야 합니다.</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree<Item>
          data={data}
          openByDefault
          indent={20}
          rowHeight={28}
          onSelect={(ids) => setSelected(ids.map(id => id.toString()))}
        >
          {(props: NodeRendererProps<Item>) => {
            const { node, style, dragHandle } = props;
            return (
              <div style={style} ref={dragHandle} className="flex items-center gap-2">
                <span>{node.isInternal ? (node.isOpen ? "📂" : "📁") : "📄"}</span>
                <span className="select-none">{node.data.name}</span>
              </div>
            );
          }}
        </Tree>
      </div>
      <div className="text-sm text-gray-600 mt-3">
        선택된 항목: {selected.length ? selected.join(", ") : "없음"}
      </div>
    </div>
  );
}
