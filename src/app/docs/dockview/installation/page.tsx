import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function DockviewInstallationPage() {
  const npmCmd = "npm i dockview";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Dockview 설치 가이드</h1>
      <p className="text-gray-600">윈도우 관리 UI를 위한 Dockview 라이브러리를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { DockviewReact, DockviewReadyEvent } from 'dockview';
const components = { default: () => <div style={{ padding: 8 }}>Hello Dockview</div> };
export default function Demo() {
  const onReady = (e: DockviewReadyEvent) => {
    e.api.addPanel({ id: 'panel-1', component: 'default', title: 'Panel 1' });
  };
  return (
    <div style={{ height: 400 }}>
      <DockviewReact components={components} onReady={onReady} />
    </div>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/dockview/level-1">Level 1</a></li>
        <li><a href="/dockview/level-7">Level 7</a></li>
        <li><a href="/dockview/level-10">Level 10</a></li>
      </ul>
      <p className="text-sm text-gray-600">샘플: <a href="/samples/dockview-window-management">윈도우 관리</a>, <a href="/samples/tab-splitting">탭 분할</a></p>
    </div>
  );
}
