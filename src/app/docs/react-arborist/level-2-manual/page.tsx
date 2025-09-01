import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function ReactArboristLevel2ManualPage() {
  // 1) 기본 구조: 트리 메뉴 출력 형식
  const basicTree = `import { Tree, NodeApi } from 'react-arborist';
type Menu = { id: string; name: string; children?: Menu[] };

const treeData: Menu[] = [
  { id: 'dashboard', name: '대시보드' },
  { id: 'management', name: '관리', children: [
    { id: 'users', name: '사용자' },
    { id: 'teams', name: '팀' },
  ]},
];

function TreeNode({ node }: { node: NodeApi<Menu> }) {
  return (
    <div className="flex items-center gap-2">
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );
}

export default function Sidebar(){
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

  // 2) 확장/축소 이벤트 및 토글
  const expandCollapse = `import { Tree, NodeApi } from 'react-arborist';
type Menu = { id: string; name: string; children?: Menu[] };

function Row({ node }: { node: NodeApi<Menu> }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => node.toggle()}>{node.isOpen ? '▾' : '▸'}</button>
      <span>{node.data.name}</span>
    </div>
  );
}

export default function Example({ data }: { data: Menu[] }){
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

  // 3) 다단 메뉴가 가능한 이유: 중첩 children 기반 트리 구조 + 가상 스크롤
  const nestedData = `// 중첩 children 구조 (임의 깊이 허용)
type Menu = { id: string; name: string; children?: Menu[] };
const navData: Menu[] = [
  { id: 'root', name: '루트', children: [
    { id: 'a', name: 'A', children: [
      { id: 'a-1', name: 'A-1' },
      { id: 'a-2', name: 'A-2', children: [
        { id: 'a-2-i', name: 'A-2-i' }
      ]},
    ]},
  ]},
];

// React Arborist는 node.isInternal/children 유무로 트리/리프를 구분하고,
// 필요한 노드만 가상화 렌더링하여 깊은 트리도 성능 저하 없이 표시합니다.`;

  // 4) 메뉴 클릭 시 본문 출력: (A) 라우팅 전환, (B) 로컬 상태 분할뷰
  const bodyRouting = `"use client";
import { useRouter } from 'next/navigation';
import { Tree, NodeApi } from 'react-arborist';
type Menu = { id: string; name: string; path?: string; children?: Menu[] };

function Row({ node }: { node: NodeApi<Menu> }) {
  const router = useRouter();
  const click = () => {
    if (node.data.path) router.push(node.data.path); // 경로로 본문 라우팅 전환
    else node.toggle();
  };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={click}>
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );
}`;

  const bodyLocalState = `"use client";
import { useState } from 'react';
import { Tree, NodeApi } from 'react-arborist';
type Menu = { id: string; name: string; view?: string; children?: Menu[] };

export default function Split(){
  const [active, setActive] = useState<string | null>(null);

  const Row = ({ node }: { node: NodeApi<Menu> }) => (
    <div className="flex items-center gap-2 cursor-pointer"
      onClick={() => node.data.view ? setActive(node.data.view) : node.toggle()}>
      <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
      <span>{node.data.name}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-[280px_1fr] h-[600px]">
      <div className="border-r p-2">
        <Tree data={[/* 메뉴 데이터 */]} openByDefault>{Row}</Tree>
      </div>
      <div className="p-4">
        {active === 'dashboard' && <div>대시보드</div>}
        {active === 'settings' && <div>설정</div>}
        {!active && <div className="text-slate-500">메뉴를 선택하세요</div>}
      </div>
    </div>
  );
}`;

  // 보충: Level 2 샘플 구조(사이드바/본문 데이터 연결)의 데이터/컴포넌트 예시
  const level2DataAndMain = `// 네비게이션 데이터 (리프는 view 지정)
const navData = [
  { id: 'overview', name: '개요', view: 'overview' },
  { id: 'components', name: '컴포넌트', children: [
    { id: 'basic', name: '기본 트리', view: 'basic' },
    { id: 'custom', name: '커스텀 트리', view: 'custom' },
  ]},
];

const pages: Record<string, { title: string; body: React.ReactNode }> = {
  overview: { title: '개요', body: <div>레벨 2 구조 개요</div> },
  basic: { title: '기본 트리', body: <div>Tree 기본 사용</div> },
  custom: { title: '커스텀 트리', body: <div>렌더러/아이콘 커스텀</div> },
};

export default function Level2(){
  const [active, setActive] = React.useState('overview');
  const Row = ({ node }) => (
    <div onClick={() => node.data.view ? setActive(node.data.view) : node.toggle()}>
      {node.data.name}
    </div>
  );

  const current = pages[active] ?? pages.overview;
  return (
    <div className="flex h-[600px] gap-6">
      <aside className="w-64 border-r p-3 bg-gray-50">
        <Tree data={navData} openByDefault>{Row}</Tree>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-2">{current.title}</h2>
        <div>{current.body}</div>
      </main>
    </div>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist Level 2 매뉴얼</h1>

      <h2>1. 기본 구조 (트리 메뉴 출력 형식)</h2>
      <p>
        컨테이너 높이를 명시하고 <code>Tree</code>에 <code>data</code>와 행
        렌더러를 전달합니다.
      </p>
      <DocCodeBlock code={basicTree} language="tsx" accent="none" />

      <h2>2. 확장/축소 이벤트</h2>
      <ul>
        <li>
          <code>node.toggle()</code>로 개별 노드 열림/닫힘 제어
        </li>
        <li>
          <code>onOpen</code>/<code>onClose</code> 이벤트로 열린/닫힌 노드 집합
          수신
        </li>
        <li>
          <code>openByDefault</code>로 초기 상태 일괄 지정
        </li>
      </ul>
      <DocCodeBlock code={expandCollapse} language="tsx" accent="none" />

      <h2>3. 다단 메뉴가 출력되는 이유</h2>
      <p>
        트리 데이터가 <code>children</code>으로 중첩될 수 있기 때문입니다. React
        Arborist는 <em>내부 노드</em>(<code>node.isInternal</code>)와{" "}
        <em>리프</em>를 구분하고, 가상화로 필요한 노드만 렌더링하여 깊은 트리도
        효율적으로 표시합니다.
      </p>
      <DocCodeBlock code={nestedData} language="tsx" accent="none" />

      <h2>4. 메뉴 클릭 시 본문 출력 방식</h2>
      <ol>
        <li>
          <strong>라우팅 전환</strong>: 메뉴에 <code>path</code>를 두고{" "}
          <code>router.push</code>로 페이지 이동
        </li>
        <li>
          <strong>로컬 상태 분할 뷰</strong>: 선택한 메뉴의 <code>view</code>에
          따라 우측 패널 조건 렌더링
        </li>
      </ol>
      <h3>4-1. 라우팅 전환</h3>
      <DocCodeBlock code={bodyRouting} language="tsx" accent="none" />
      <h3>4-2. 로컬 상태 분할 뷰</h3>
      <DocCodeBlock code={bodyLocalState} language="tsx" accent="none" />

      <h2>Level 2 구조 예시 (데이터 + 메인)</h2>
      <DocCodeBlock code={level2DataAndMain} language="tsx" accent="none" />

      <h2>보충 팁</h2>
      <ul>
        <li>
          <strong>고유 id</strong>: 모든 노드는 고유 <code>id</code>를 가져야
          합니다.
        </li>
        <li>
          <strong>컨테이너 높이</strong>: 트리 컨테이너에 명시적{" "}
          <code>height</code>를 지정해야 보입니다.
        </li>
        <li>
          <strong>대규모 트리</strong>: 서버 페이징/비동기 로딩 또는 섹션 분할을
          검토하세요.
        </li>
        <li>
          <strong>접근성</strong>: 키보드 포커스/선택 상태를 행 렌더러에서
          명확히 표시하세요.
        </li>
      </ul>

      <h2>참고 자료</h2>
      <ul>
        <li>
          <a href="/react-arborist/level-2">Level 2 실행 예제</a>
        </li>
        <li>
          <a href="/docs/react-arborist/guide">React Arborist 사용 가이드</a>
        </li>
        <li>
          <a href="/docs/react-arborist/api">React Arborist API (초안)</a>
        </li>
        <li>
          <a href="/docs/react-arborist/core-concepts">핵심 개념</a>
        </li>
      </ul>
    </div>
  );
}
