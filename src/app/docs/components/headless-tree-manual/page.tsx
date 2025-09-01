import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function HeadlessTreeManualPage() {
  const step1Code = `import React from 'react';
import type { ItemInstance } from "@headless-tree/core";

// Dummy data for the tree structure
const initialTreeData = {
  "package.json": { "//": "..." },
  src: {
    "App.tsx": { "//": "..." },
    "index.ts": { "//": "..." },
    components: {
      "Button.tsx": { "//": "..." },
      "Modal.tsx": { "//": "..." },
    },
  },
};

// Helper to get item details from path
const getItemFromPath = (data: any, path: string): { name: string; isFolder: boolean } | null => {
  const parts = path.split('/').filter(Boolean);
  let current = data;
  let name = path;
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
      name = part;
    } else { return null; }
  }
  return { name, isFolder: current && typeof current === 'object' && !current.hasOwnProperty('//') };
};

// The TreeItem component renders each node in the tree
const TreeItem = ({ item }: { item: ItemInstance<string> }) => {
  const isExpanded = item.isExpanded();
  const isFolder = item.isFolder();
  const isSelected = item.isSelected();
  const itemData = getItemFromPath(initialTreeData, item.getItemData());
  const label = itemData?.name || item.getItemData();

  return (
    <div
      {...item.getProps()}
      style={{ paddingLeft: \`\${item.getItemMeta().level * 20}px\` }}
      className={\`flex items-center space-x-2 cursor-pointer hover:bg-slate-100 rounded-md p-1 \${isSelected ? "bg-blue-100" : ""}\`}
    >
      <span>{isFolder ? (isExpanded ? "📂" : "📁") : "📄"}</span>
      <span>{label}</span>
    </div>
  );
};`;

  const step2Code = `import { useTree } from "@headless-tree/react";
import { syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature } from "@headless-tree/core";

// Helper to get children from path
const getChildrenFromPath = (data: any, path: string): string[] => {
  if (!path) return Object.keys(data);
  const parts = path.split('/').filter(Boolean);
  let current = data;
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
    } else { return []; }
  }
  if (current && typeof current === 'object' && !current.hasOwnProperty('//')) {
    return Object.keys(current).map(key => path ? \`\${path}/\${key}\` : key);
  }
  return [];
};

// The main tree controller hook
const tree = useTree<string>({
  rootItemId: "",
  getItemName: (item) => {
    const itemData = getItemFromPath(initialTreeData, item.getItemData());
    return itemData?.name || item.getItemData();
  },
  isItemFolder: (item) => {
    const itemData = getItemFromPath(initialTreeData, item.getItemData());
    return itemData?.isFolder || false;
  },
  dataLoader: {
    getItem: (itemId: string) => itemId,
    getChildren: (itemId: string) => getChildrenFromPath(initialTreeData, itemId)
  },
  features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  initialState: {
    expandedItems: ["src"]
  }
});`;

  const step3Code = `export default function HeadlessTreeLevel1() {
  // ... (useTree hook from previous step)

  // Get all visible items from the tree instance for rendering
  const items = tree.getItems();

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Headless Tree - Level 1
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Basic file explorer tree implementation. Click on folders to expand and collapse them.
        </p>
        <div {...tree.getContainerProps()} className="p-4 bg-white border rounded-lg">
          {items.map((item) => (
            <TreeItem key={item.getId()} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}`;

  const finalCode = `"use client";

import { useTree } from "@headless-tree/react";
import { syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature } from "@headless-tree/core";
import type { ItemInstance } from "@headless-tree/core";
import React from "react";

const initialTreeData = {
  "package.json": { "//": "..." },
  src: {
    "App.tsx": { "//": "..." },
    "index.ts": { "//": "..." },
    components: {
      "Button.tsx": { "//": "..." },
      "Modal.tsx": { "//": "..." },
    },
  },
};

const getItemFromPath = (data: any, path: string): { name: string; isFolder: boolean } | null => {
  const parts = path.split('/').filter(Boolean);
  let current = data;
  let name = path;
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
      name = part;
    } else { return null; }
  }
  return { name, isFolder: current && typeof current === 'object' && !current.hasOwnProperty('//') };
};

const getChildrenFromPath = (data: any, path: string): string[] => {
  if (!path) return Object.keys(data);
  const parts = path.split('/').filter(Boolean);
  let current = data;
  for (const part of parts) {
    if (current && typeof current === 'object' && current[part] !== undefined) {
      current = current[part];
    } else { return []; }
  }
  if (current && typeof current === 'object' && !current.hasOwnProperty('//')) {
    return Object.keys(current).map(key => path ? \`\${path}/\${key}\` : key);
  }
return [];
};

const TreeItem = ({ item }: { item: ItemInstance<string> }) => {
  const isExpanded = item.isExpanded();
  const isFolder = item.isFolder();
  const isSelected = item.isSelected();
  const itemData = getItemFromPath(initialTreeData, item.getItemData());
  const label = itemData?.name || item.getItemData();

  return (
    <div
      {...item.getProps()}
      style={{ paddingLeft: \`\${item.getItemMeta().level * 20}px\` }}
      className={\`flex items-center space-x-2 cursor-pointer hover:bg-slate-100 rounded-md p-1 \${isSelected ? "bg-blue-100" : ""}\`}
    >
      <span>{isFolder ? (isExpanded ? "📂" : "📁") : "📄"}</span>
      <span>{label}</span>
    </div>
  );
};

export default function HeadlessTreeLevel1() {
  const tree = useTree<string>({
    rootItemId: "",
    getItemName: (item) => {
      const itemData = getItemFromPath(initialTreeData, item.getItemData());
      return itemData?.name || item.getItemData();
    },
    isItemFolder: (item) => {
      const itemData = getItemFromPath(initialTreeData, item.getItemData());
      return itemData?.isFolder || false;
    },
    dataLoader: {
      getItem: (itemId: string) => itemId,
      getChildren: (itemId: string) => getChildrenFromPath(initialTreeData, itemId)
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
    initialState: {
      expandedItems: ["src"]
    }
  });

  const items = tree.getItems();

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Headless Tree - Level 1
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Basic file explorer tree implementation. Click on folders to expand and collapse them.
        </p>
        <div {...tree.getContainerProps()} className="p-4 bg-white border rounded-lg">
          {items.map((item) => (
            <TreeItem key={item.getId()} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="container mx-auto py-10 prose dark:prose-invert max-w-4xl">
      <h1>Headless Tree Level 1 따라하기</h1>
      <p className="text-lg text-muted-foreground">
        이 가이드를 따라 `headless-tree/level-1/page.tsx` 페이지에 코드를 직접
        복사-붙여넣기하며 간단한 파일 탐색기 트리를 만들어 보세요.
      </p>

      <hr className="my-8" />

      <h2 id="step-1">Step 1: 트리 노드(항목) 컴포넌트 만들기</h2>
      <p>
        먼저, 트리의 각 항목(파일 또는 폴더)을 렌더링할 `TreeItem` 컴포넌트를 만듭니다. 이 컴포넌트는 아이콘, 이름, 들여쓰기 및 선택 상태를 표시합니다. 또한 데이터 구조와 데이터를 파싱하는 헬퍼 함수도 포함합니다.
      </p>
      <DocCodeBlock accent="none" code={step1Code} language="jsx" />

      <h2 id="step-2">Step 2: Tree 컨트롤러 설정</h2>
      <p>
        `@headless-tree/react`의 `useTree` 훅을 사용하여 트리의 상태와 동작을 관리하는 컨트롤러를 설정합니다. 여기서는 데이터 로딩, 항목의 폴더 여부 판단, 초기 상태 등을 정의합니다.
      </p>
      <DocCodeBlock accent="none" code={step2Code} language="jsx" />

      <h2 id="step-3">Step 3: 트리 렌더링 및 UI 구성</h2>
      <p>
        `tree` 인스턴스에서 렌더링할 항목 목록을 가져와 UI를 구성합니다. `tree.getContainerProps()`를 사용하여 키보드 네비게이션과 같은 상호작용을 위한 컨테이너 속성을 적용하고, `map` 함수로 각 `TreeItem`을 렌더링합니다.
      </p>
      <DocCodeBlock accent="none" code={step3Code} language="jsx" />

      <h2 id="step-4">Step 4: 전체 코드 확인</h2>
      <p>
        위의 모든 단계를 합친 최종 코드입니다. `headless-tree/level-1/page.tsx` 파일의
        내용이 아래와 같아야 합니다.
      </p>
      <DocCodeBlock accent="none" code={finalCode} language="jsx" />

      <hr className="my-8" />

      <h2 id="advanced">심화 예제</h2>
      <h3>1) 선택/단축키 기능 추가</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { selectionFeature, hotkeysCoreFeature } from '@headless-tree/core';
const tree = useTree<string>({
  // ...기본 설정,
  features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  initialState: { selectedItems: ['src'], expandedItems: ['src'] },
});`} />

      <h3>2) 지연 로딩(DataLoader)</h3>
      <DocCodeBlock accent="none" language="tsx" code={`const tree = useTree<string>({
  // ...
  dataLoader: {
    getItem: async (id) => await fetchItem(id),
    getChildren: async (id) => await fetchChildren(id),
  },
  features: [syncDataLoaderFeature],
});`} />

      <h2 id="troubleshooting">트러블슈팅</h2>
      <ul>
        <li>클릭 반응 없음: <code>getContainerProps()</code>와 각 <code>item.getProps()</code>가 올바르게 바인딩됐는지 확인하세요.</li>
        <li>아이콘/레이아웃 깨짐: 레벨 들여쓰기 계산(<code>item.getItemMeta().level</code>)과 스타일 중첩을 점검하세요.</li>
        <li>대량 데이터: 가상 스크롤이 필요하면 외부 가상화 라이브러리 연동을 검토하세요.</li>
      </ul>

      <h2 id="best-practices">베스트 프랙티스</h2>
      <ul>
        <li>항목 <code>id</code>는 경로 기반 등 예측 가능한 규칙으로 고정합니다.</li>
        <li>데이터 로더는 순수 함수로 유지하고, 네트워크 지연을 고려해 로딩 표시를 제공합니다.</li>
        <li>키보드 접근성을 위해 컨테이너/아이템 prop 바인딩을 빠짐없이 적용합니다.</li>
      </ul>

      <h2 id="performance">성능 최적화</h2>
      <ul>
        <li>지연 로딩으로 하위 노드 요청을 최소화합니다.</li>
        <li>아이템 컴포넌트를 메모이제이션하고, 긴 리스트는 가상 스크롤을 검토합니다.</li>
        <li>필요 없는 피처는 비활성화해 오버헤드를 줄입니다.</li>
      </ul>

      <hr className="my-8" />

      <h2 id="references">참고 자료</h2>
      <ul>
        <li>
          <a
            href="https://headless-tree.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Headless Tree 공식 웹사이트
          </a>
        </li>
      </ul>
    </div>
  );
}
