import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function ReactArboristGuidePage() {
  const renderRow = `import { Tree, NodeApi } from 'react-arborist';
type Item = { id: string; name: string; children?: Item[] };
const data: Item[] = [{ id: 'root', name: 'root', children: [{ id: 'a', name: 'a' }] }];
const Row = ({ node }: { node: NodeApi<Item> }) => (
  <div className="flex items-center gap-2">
    <span>{node.isInternal ? (node.isOpen ? '📂' : '📁') : '📄'}</span>
    <span>{node.data.name}</span>
  </div>
);
export default function Demo(){ return <div style={{height:300}}><Tree data={data}>{Row}</Tree></div>; }`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist 사용 가이드</h1>
      <p className="text-gray-600">기본 사용, 커스텀 렌더러, 이벤트 처리를 빠르게 익힙니다.</p>
      <h3>커스텀 행 렌더러</h3>
      <DocCodeBlock accent="none" code={renderRow} />
      <h3>선택/열림 이벤트</h3>
      <DocCodeBlock accent="none" code={`<Tree data={data} onSelect={(ids)=>{}} onOpen={(ids)=>{}} onClose={(ids)=>{}} />`} />
      <h2>베스트 프랙티스</h2>
      <ul>
        <li>데이터는 고유한 <code>id</code>를 유지하고, 큰 트리는 서버/가상화 전략을 염두에 둡니다.</li>
        <li>행 렌더러에서 무거운 연산은 피하고, 필요한 경우 메모이제이션합니다.</li>
      </ul>
      <h2>트러블슈팅</h2>
      <ul>
        <li>높이 0: 트리 컨테이너에 명시적 높이를 부여하세요.</li>
        <li>드래그가 불안정: 중첩 스크롤/오버플로우 스타일을 점검하세요.</li>
      </ul>
      <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <b>튜토리얼:</b> <a href="/docs/react-arborist/level-1-manual">Level 1 따라하기</a>로 기본 예제를 직접 만들어 보세요.
      </div>
    </div>
  );
}
