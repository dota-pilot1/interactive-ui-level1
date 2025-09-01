import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function HeadlessTreeInstallationPage() {
  const npmCmd = "npm i @headless-tree/react @headless-tree/core";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Headless Tree 설치 가이드</h1>
      <p className="text-gray-600">트리 UI를 위한 Headless Tree 라이브러리를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`"use client";
import { useTree } from '@headless-tree/react';
import { syncDataLoaderFeature } from '@headless-tree/core';

const data = { src: { 'index.ts': {}, components: { 'Button.tsx': {} } } } as const;
const children = (path: string) => {
  const parts = path.split('/').filter(Boolean);
  let cur: any = data; for (const p of parts) cur = cur?.[p];
  return Object.keys(cur || {} ).map((k) => (path ? path + '/' + k : k));
};

export default function TreeDemo() {
  const tree = useTree<string>({
    rootItemId: '',
    getItemName: (i) => i.getItemData().split('/').pop() || '',
    isItemFolder: (i) => !i.getItemData().includes('.'),
    dataLoader: { getItem: (id) => id, getChildren: (id) => children(id) },
    features: [syncDataLoaderFeature],
  });
  return (
    <div {...tree.getContainerProps()}>
      {tree.getItems().map((it) => (
        <div key={it.getId()} {...it.getProps()} style={{ paddingLeft: it.getItemMeta().level * 16 }}>
          {it.isFolder() ? '📁' : '📄'} {it.getItemName()}
        </div>
      ))}
    </div>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/headless-tree/level-1">Level 1</a></li>
      </ul>
      <p className="text-sm text-gray-600">문서: <a href="/docs/components/headless-tree-manual">사용 가이드</a></p>
    </div>
  );
}
