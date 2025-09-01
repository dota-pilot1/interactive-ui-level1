import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function ReactArboristCoreConceptsPage() {
  const basicStructure = `import { Tree, NodeApi } from 'react-arborist';
type Item = { id: string; name: string; children?: Item[] };

const treeData: Item[] = [
  { id: 'root', name: '루트', children: [ { id: 'a', name: '메뉴 A' } ] }
];

function TreeNode({ node }: { node: NodeApi<Item> }) {
  return (
    <div className="flex items-center gap-2">
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );
}

export default function Example(){
  return (
    <div style={{ height: 500 }}>
      <Tree
        data={treeData}
        openByDefault={true}
        width="100%"
        height={500}
        indent={24}
        rowHeight={40}
      >
        {TreeNode}
      </Tree>
    </div>
  );
}`;

  const expandCollapse = `import { Tree, NodeApi } from 'react-arborist';
type Item = { id: string; name: string; children?: Item[] };

function Row({ node }: { node: NodeApi<Item> }) {
  return (
    <div className="flex items-center gap-2">
      {/* 아이콘 클릭으로 열림/닫힘 토글 */}
      <button onClick={() => node.toggle()}>{node.isOpen ? '📂' : '📁'}</button>
      <span>{node.data.name}</span>
    </div>
  );
}

export default function Example({ data }: { data: Item[] }){
  return (
    <Tree
      data={data}
      openByDefault={false}
      onOpen={(ids) => console.log('opened:', ids)}
      onClose={(ids) => console.log('closed:', ids)}
    >
      {Row}
    </Tree>
  );
}`;

  const renderBodyRouter = `"use client";
import { useRouter } from 'next/navigation';
import { Tree, NodeApi } from 'react-arborist';

type NavItem = { id: string; name: string; path?: string; children?: NavItem[] };

function Row({ node }: { node: NodeApi<NavItem> }) {
  const router = useRouter();
  const onClick = () => {
    if (node.data.path) router.push(node.data.path); // 라우팅으로 본문 교체
    else node.toggle(); // 폴더면 열림/닫힘
  };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );
}`;

  const renderBodyLocalState = `"use client";
import { useState } from 'react';
import { Tree, NodeApi } from 'react-arborist';

type NavItem = { id: string; name: string; view?: string; children?: NavItem[] };

export default function SplitView({ data }: { data: NavItem[] }){
  const [activeView, setActiveView] = useState<string | null>(null);

  const Row = ({ node }: { node: NodeApi<NavItem> }) => (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => node.data.view ? setActiveView(node.data.view) : node.toggle()}
    >
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-[280px_1fr] h-[600px]">
      <div className="border-r">
        <Tree data={data} openByDefault>{Row}</Tree>
      </div>
      <div className="p-4">
        {activeView === 'dashboard' && <div>대시보드 뷰</div>}
        {activeView === 'settings' && <div>설정 뷰</div>}
        {!activeView && <div className="text-slate-500">메뉴를 선택하세요</div>}
      </div>
    </div>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist 핵심 개념</h1>
      <p className="text-gray-600">트리 기본 구조, 확장/축소 제어, 메뉴 클릭 시 본문 렌더링 패턴을 간단한 코드와 함께 정리합니다.</p>

      <h2>1. 기본 구조</h2>
      <p>트리 컨테이너에 명시적 높이를 주고, <code>Tree</code>에 데이터와 행 렌더러를 전달합니다.</p>
      <DocCodeBlock code={basicStructure} language="tsx" accent="none" />

      <h2>2. 트리 확장/축소 구현</h2>
      <ul>
        <li><code>openByDefault</code>로 초기 열림 상태 제어</li>
        <li><code>node.toggle()</code>로 행 단위 토글, 또는 <code>onOpen</code>/<code>onClose</code> 이벤트 활용</li>
      </ul>
      <DocCodeBlock code={expandCollapse} language="tsx" accent="none" />

      <h2>3. 메뉴 클릭에 따른 본문 렌더링</h2>
      <p>두 가지 일반적인 패턴이 있습니다.</p>
      <ol>
        <li>라우팅 방식: <code>router.push(path)</code>로 페이지 전환</li>
        <li>로컬 상태 방식: 선택한 메뉴에 따라 우측 패널을 조건부 렌더링</li>
      </ol>
      <h3>3-1. 라우팅으로 전환</h3>
      <DocCodeBlock code={renderBodyRouter} language="tsx" accent="none" />
      <h3>3-2. 로컬 상태로 분할 뷰 구성</h3>
      <DocCodeBlock code={renderBodyLocalState} language="tsx" accent="none" />

      <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <b>Tip:</b> 대규모 트리거나 서버 데이터 연동 시에는 사이드바 트리는 정적/캐시 가능한 데이터로, 본문은 라우팅으로 분리하는 구성이 유지보수에 유리합니다.
      </div>
    </div>
  );
}

