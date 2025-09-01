import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function LexicalGuidePage() {
  const setup = `import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

const theme = {};

export default function Editor() {
  const initialConfig = { namespace: 'DocsEditor', theme, onError: console.error };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="border rounded p-3 min-h-32" />}
        placeholder={<div className="text-gray-400">여기에 입력...</div>}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Lexical 사용 가이드</h1>
      <p className="text-gray-600">에디터 초기화, 리치 텍스트 플러그인, 히스토리 등 핵심 요소를 빠르게 셋업합니다.</p>
      <ol>
        <li>패키지 설치: <code>npm i lexical @lexical/react</code></li>
        <li>테마/네임스페이스/에러 핸들러가 포함된 초기설정을 구성</li>
        <li>RichTextPlugin/HistoryPlugin 등 필요한 플러그인 추가</li>
      </ol>
      <h3>기본 설정 예제</h3>
      <DocCodeBlock accent="none" code={setup} />
      <h2>심화 예제</h2>
      <h3>1) 변경 감지와 저장</h3>
      <DocCodeBlock accent="none" code={`import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
function Editor() {
  const onChange = (editorState) => {
    editorState.read(() => {
      // JSON 직렬화 또는 HTML export 등
    });
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/* ... */}
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}`} />

      <h3>2) 코드 하이라이트(간단)</h3>
      <DocCodeBlock accent="none" code={`// 간단 강조만 필요한 경우, ContentEditable에 코드 스타일을 적용하거나
// CodeHighlight 플러그인(별도 구현/라이브러리)을 조합해 사용합니다.`} />

      <h2>트러블슈팅</h2>
      <ul>
        <li>SSR 경고: Next.js App Router에서 클라이언트 전용 컴포넌트로 두고 dynamic import를 고려하세요.</li>
        <li>스타일 누락: ContentEditable에 적절한 높이/테두리/패딩을 부여해야 레이아웃이 안정적입니다.</li>
        <li>undo/redo가 동작 안 함: <code>HistoryPlugin</code>이 빠지지 않았는지 확인하세요.</li>
      </ul>
      <h2>베스트 프랙티스</h2>
      <ul>
        <li>플러그인은 필요한 것만 로드하고, 무거운 플러그인은 지연 로딩합니다.</li>
        <li>에디터 상태 저장은 디바운스하여 빈번한 저장을 피합니다.</li>
        <li>테마와 노드 정의는 컴포넌트 외부로 분리해 재사용합니다.</li>
      </ul>
      <h2>성능 최적화</h2>
      <ul>
        <li>대용량 문서는 스니펫 단위로 렌더링하거나, 이미지/코드블록은 placeholer를 사용합니다.</li>
        <li>외부 상태 관리와의 동기화는 최소화하고, 필요한 시점에만 수행합니다.</li>
      </ul>
      <p className="text-sm text-gray-600">예제 페이지: <a href="/lexical-editor/level-1">Level 1</a>, <a href="/lexical-editor/level-7">Level 7</a>, <a href="/lexical-editor/level-10">Level 10</a></p>
    </div>
  );
}
