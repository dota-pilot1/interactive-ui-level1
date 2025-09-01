import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function ReactArboristLevel2ManualPage() {
  const navDataCode = `// 네비게이션 데이터
const navData = [
  { id: "overview", name: "개요", children: [] },
  { 
    id: "components", 
    name: "컴포넌트", 
    children: [
      { id: "tree-basic", name: "기본 트리" },
      { id: "tree-custom", name: "커스텀 트리" },
      { id: "tree-actions", name: "액션 트리" }
    ] 
  },
  { 
    id: "examples", 
    name: "예제", 
    children: [
      { id: "file-explorer", name: "파일 탐색기" },
      { id: "menu-tree", name: "메뉴 트리" },
      { id: "org-chart", name: "조직도" }
    ] 
  }
];`;

  const contentStructure = `// 메인 콘텐츠 데이터 구조
const contentPages = {
  overview: {
    title: "React Arborist Level 2 - 개요",
    content: (
      <div>
        <p>이 레벨에서는 사이드바와 본문 영역을 분리하여...</p>
        <ul>
          <li>분리된 네비게이션 사이드바</li>
          <li>동적으로 변경되는 메인 콘텐츠</li>
          <li>React Arborist를 활용한 트리 네비게이션</li>
        </ul>
      </div>
    )
  },
  "tree-basic": {
    title: "기본 트리 컴포넌트",
    content: (
      <div>
        <p>가장 기본적인 React Arborist 트리 구현입니다.</p>
        <Tree data={basicData} openByDefault />
      </div>
    )
  }
  // ... 다른 페이지들
};`;

  const navComponent = `// 네비게이션 트리 컴포넌트
function NavTreeNode({ node, style, dragHandle }) {
  const handleClick = () => {
    if (node.data.id && !node.hasChildren) {
      // 리프 노드만 클릭 가능
      (window as any).setActivePage?.(node.data.id);
    }
    if (node.hasChildren) {
      node.toggle();
    }
  };

  return (
    <div 
      ref={dragHandle} 
      style={style}
      className="flex items-center cursor-pointer hover:bg-slate-100"
      onClick={handleClick}
    >
      <span>
        {node.hasChildren && (node.isOpen ? "📂" : "📁")} {node.data.name}
      </span>
    </div>
  );
}`;

  const mainComponent = `export default function ReactArboristLevel2() {
  const [activePage, setActivePage] = useState("overview");

  // 글로벌 함수로 설정 (트리 노드에서 접근하기 위해)
  React.useEffect(() => {
    (window as any).setActivePage = setActivePage;
    return () => {
      delete (window as any).setActivePage;
    };
  }, []);

  const currentContent = contentPages[activePage] || contentPages.overview;

  return (
    <div className="flex gap-6" style={{ height: "600px" }}>
      {/* 사이드바 */}
      <div className="w-64 border-r bg-gray-50 p-4">
        <Tree data={navData} openByDefault={false}>
          {NavTreeNode}
        </Tree>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 p-6 overflow-auto">
        <h2>{currentContent.title}</h2>
        <div>{currentContent.content}</div>
      </div>
    </div>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist Level 2 매뉴얼</h1>
      <p className="text-lg text-muted-foreground">
        사이드바와 본문 영역을 분리하여 클릭으로 페이지가 변경되는 구조를 구현하는 방법을 설명합니다.
      </p>

      <h2>핵심 개념</h2>
      <ul>
        <li><strong>분리된 UI 구조:</strong> 사이드바(네비게이션)와 메인 콘텐츠 영역 분리</li>
        <li><strong>상태 관리:</strong> useState를 사용한 활성 페이지 관리</li>
        <li><strong>동적 콘텐츠:</strong> 클릭에 따라 본문 내용이 변경</li>
        <li><strong>트리 네비게이션:</strong> React Arborist를 네비게이션으로 활용</li>
      </ul>

      <h2>Step 1. 네비게이션 데이터 구조</h2>
      <p>트리 형태의 네비게이션 메뉴 데이터를 정의합니다.</p>
      <DocCodeBlock code={navDataCode} language="typescript" accent="none" />

      <h2>Step 2. 콘텐츠 페이지 구조</h2>
      <p>각 메뉴에 대응하는 콘텐츠 페이지를 객체 형태로 관리합니다.</p>
      <DocCodeBlock code={contentStructure} language="typescript" accent="none" />

      <h2>Step 3. 네비게이션 트리 컴포넌트</h2>
      <p>클릭 이벤트를 처리하는 커스텀 트리 노드 컴포넌트입니다.</p>
      <DocCodeBlock code={navComponent} language="typescript" accent="none" />

      <h2>Step 4. 메인 컴포넌트 구조</h2>
      <p>사이드바와 메인 콘텐츠 영역을 배치하고 상태를 관리합니다.</p>
      <DocCodeBlock code={mainComponent} language="typescript" accent="none" />

      <h2>주요 특징</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <ul className="mb-0">
          <li><strong>반응형 레이아웃:</strong> Flexbox를 사용한 사이드바-메인 구조</li>
          <li><strong>인터랙티브 네비게이션:</strong> 폴더 열기/닫기, 페이지 클릭</li>
          <li><strong>다양한 예제:</strong> 기본 트리부터 실무 예제까지</li>
          <li><strong>실시간 상태 표시:</strong> 현재 활성 페이지 표시</li>
        </ul>
      </div>

      <h2>구현된 예제들</h2>
      <ul>
        <li><strong>기본 트리:</strong> 가장 기본적인 React Arborist 구현</li>
        <li><strong>커스텀 트리:</strong> 커스텀 렌더러 적용</li>
        <li><strong>액션 트리:</strong> 선택, 드래그 이벤트 처리</li>
        <li><strong>파일 탐색기:</strong> 실제 파일 구조와 유사한 트리</li>
        <li><strong>메뉴 트리:</strong> 관리자 패널 스타일 네비게이션</li>
        <li><strong>조직도:</strong> 회사 조직 구조 표현</li>
      </ul>

      <h2>링크</h2>
      <ul>
        <li><a href="/react-arborist/level-2">Level 2 실행 예제</a></li>
        <li><a href="/docs/react-arborist/level-1-manual">Level 1 따라하기</a></li>
        <li><a href="/docs/react-arborist/installation">설치 가이드</a></li>
        <li><a href="/docs/react-arborist/guide">사용 가이드</a></li>
      </ul>
    </div>
  );
}