import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function AgGridInstallationPage() {
  const npmCmd = "npm i ag-grid-react ag-grid-community";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>AG Grid 설치 가이드</h1>
      <p className="text-gray-600">데이터 그리드를 위한 AG Grid 리액트 래퍼를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const rowData = [{ make: 'Toyota', model: 'Celica', price: 35000 }];
const colDefs = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
];

export default function GridDemo() {
  return (
    <div className="ag-theme-quartz" style={{ height: 300 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/ag-grid/level-1">Level 1</a></li>
        <li><a href="/ag-grid/level-7">Level 7</a></li>
        <li><a href="/ag-grid/level-10">Level 10</a></li>
      </ul>
    </div>
  );
}
