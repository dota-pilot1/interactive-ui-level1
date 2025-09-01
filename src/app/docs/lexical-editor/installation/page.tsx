import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function LexicalInstallationPage() {
  const npmCmd = "npm i lexical @lexical/react";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Lexical 설치 가이드</h1>
      <p className="text-gray-600">리치 텍스트 에디터를 위한 Meta의 Lexical 라이브러리를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

const theme = {};

export default function Editor() {
  const initialConfig = { namespace: 'Demo', theme, onError: console.error };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="border rounded p-3 min-h-32" />}
        placeholder={<div className="text-gray-400">여기에 입력...</div>}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/lexical-editor/level-1">Level 1</a></li>
        <li><a href="/lexical-editor/level-7">Level 7</a></li>
        <li><a href="/lexical-editor/level-10">Level 10</a></li>
      </ul>
      <p className="text-sm text-gray-600">샘플: <a href="/samples/lexical-editor-with-ai">AI 보조 에디터</a></p>
    </div>
  );
}
