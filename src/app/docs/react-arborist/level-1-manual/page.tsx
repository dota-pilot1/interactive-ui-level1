import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function ReactArboristLevel1ManualPage() {
  const step1 = `type Item = { id: string; name: string; children?: Item[] };

const data: Item[] = [
  {
    id: 'src',
    name: 'src',
    children: [
      { id: 'src/app.tsx', name: 'app.tsx' },
      { id: 'src/index.ts', name: 'index.ts' },
      { id: 'src/components', name: 'components', children: [ { id: 'src/components/Button.tsx', name: 'Button.tsx' } ] },
    ],
  },
  { id: 'package.json', name: 'package.json' },
];`;

  const step2 = `import { Tree } from 'react-arborist';

export default function Page() {
  return (
    <div style={{ height: 400 }}>
      <Tree data={data} openByDefault indent={20} rowHeight={28} />
    </div>
  );
}`;

  const step3 = `import { Tree, NodeApi } from 'react-arborist';

const Row = (props: { node: NodeApi<Item>; style: React.CSSProperties; dragHandle: (el: HTMLElement | null) => void }) => {
  const { node, style, dragHandle } = props;
  return (
    <div style={style} ref={dragHandle} className="flex items-center gap-2">
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span className="select-none">{node.data.name}</span>
    </div>
  );
};

export default function Page() {
  return (
    <div style={{ height: 400 }}>
      <Tree data={data} openByDefault>
        {Row}
      </Tree>
    </div>
  );
}`;

  const full = `"use client";
import React, { useState } from 'react';
import { Tree, NodeApi } from 'react-arborist';

type Item = { id: string; name: string; children?: Item[] };

const data: Item[] = [
  { id: 'src', name: 'src', children: [
    { id: 'src/app.tsx', name: 'app.tsx' },
    { id: 'src/index.ts', name: 'index.ts' },
    { id: 'src/components', name: 'components', children: [ { id: 'src/components/Button.tsx', name: 'Button.tsx' } ] },
  ]},
  { id: 'package.json', name: 'package.json' },
];

export default function ReactArboristLevel1() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">React Arborist - Level 1</h1>
      <p className="text-gray-600 mb-4">정적 데이터 + 기본 옵션 + 커스텀 행 렌더러</p>
      <div className="border rounded bg-white p-2" style={{ height: 400 }}>
        <Tree<Item> data={data} openByDefault indent={20} rowHeight={28} onSelect={(ids)=>setSelected(ids as string[])}>
          {(props: { node: NodeApi<Item>; style: React.CSSProperties; dragHandle: (el: HTMLElement | null) => void }) => {
            const { node, style, dragHandle } = props;
            return (
              <div style={style} ref={dragHandle} className="flex items-center gap-2">
                <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
                <span className="select-none">{node.data.name}</span>
              </div>
            );
          }}
        </Tree>
      </div>
      <div className="text-sm text-gray-600 mt-3">선택된 항목: {selected.length ? selected.join(', ') : '없음'}</div>
    </div>
  );
}`;

  return (
    <div className="container mx-auto py-10 prose dark:prose-invert max-w-4xl">
      <h1>React Arborist Level 1 따라하기</h1>
      <p className="text-lg text-muted-foreground">아래 단계를 따라 `react-arborist/level-1/page.tsx`를 작성해 기본 트리를 구현합니다.</p>

      <h2>Step 1. 데이터/타입 정의</h2>
      <p>고유한 <code>id</code>와 <code>name</code>을 가진 계층형 데이터를 준비합니다.</p>
      <DocCodeBlock accent="none" code={step1} />

      <h2>Step 2. Tree 배치 (기본 옵션)</h2>
      <p><code>openByDefault</code>, <code>indent</code>, <code>rowHeight</code>로 기본 동작을 설정합니다.</p>
      <DocCodeBlock accent="none" code={step2} />

      <h2>Step 3. 커스텀 행 렌더러</h2>
      <p>자식 함수에 제공되는 <code>style</code>/<code>dragHandle</code>을 최상위 요소에 적용해야 들여쓰기/가상 스크롤이 정상 동작합니다.</p>
      <DocCodeBlock accent="none" code={step3} />

      <h2>Step 4. 전체 코드</h2>
      <DocCodeBlock accent="none" code={full} />

      <h2>링크</h2>
      <ul>
        <li><a href="/react-arborist/level-1">실행 예제 (Level 1)</a></li>
        <li><a href="/docs/react-arborist/installation">설치 가이드</a></li>
        <li><a href="/docs/react-arborist/guide">사용 가이드</a></li>
      </ul>
    </div>
  );
}
