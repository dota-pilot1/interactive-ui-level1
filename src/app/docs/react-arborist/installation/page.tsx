import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function ReactArboristInstallationPage() {
  const npmCmd = "npm i react-arborist";
  const example = `import { Tree } from 'react-arborist';
const data = [{ id: 'src', name: 'src', children: [{ id: 'src/index.ts', name: 'index.ts' }] }];
export default function Demo() { return <div style={{ height: 300 }}><Tree data={data} openByDefault /></div>; }`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist 설치 가이드</h1>
      <p className="text-gray-600">대용량 트리, 가상화, 드래그 앤 드롭을 지원하는 고성능 트리 컴포넌트입니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={example} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/react-arborist/level-1">Level 1</a></li>
        <li><a href="/react-arborist/level-5">Level 5</a></li>
        <li><a href="/react-arborist/level-10">Level 10</a></li>
      </ul>
      <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <b>다음 단계:</b> <a href="/docs/react-arborist/level-1-manual">Level 1 따라하기</a>에서 단계별 구현을 진행하세요.
      </div>
    </div>
  );
}
