import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function AgGridGuidePage() {
  const setup = `import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function Grid() {
  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
  ];
  const colDefs = [ { field: 'make' }, { field: 'model' }, { field: 'price' } ];
  return (
    <div className="ag-theme-quartz" style={{ height: 300 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>AG Grid 사용 가이드</h1>
      <p className="text-gray-600">기본 테이블 구성, 컬럼 정의, 행 데이터 주입을 빠르게 익힙니다.</p>
      <ol>
        <li>패키지 설치: <code>npm i ag-grid-react ag-grid-community</code></li>
        <li>테마 CSS를 가져오고 컨테이너에 테마 클래스를 부여</li>
        <li>열 정의(<code>columnDefs</code>)와 데이터(<code>rowData</code>) 지정</li>
      </ol>
      <h3>기본 테이블 예제</h3>
      <DocCodeBlock accent="none" code={setup} />
      <h2>심화 예제</h2>
      <h3>1) 정렬/필터/포맷터</h3>
      <DocCodeBlock accent="none" code={`const colDefs = [
  { field: 'make', sortable: true, filter: true },
  { field: 'model', sortable: true, filter: true },
  { field: 'price', sortable: true, valueFormatter: ({ value }) => value.toLocaleString() },
];`} />

      <h3>2) 퀵 필터</h3>
      <DocCodeBlock accent="none" code={`<input placeholder="검색" onChange={(e) => gridApi.setQuickFilter(e.target.value)} />`} />

      <h2>트러블슈팅</h2>
      <ul>
        <li>스타일 깨짐: 필수 CSS(ag-grid.css, 테마 css)가 로드됐는지 확인하세요.</li>
        <li>열 너비 문제: 컨테이너 크기가 변하면 <code>api.sizeColumnsToFit()</code>을 고려하세요.</li>
        <li>성능: 대량 데이터는 서버 사이드 모델 또는 가상 스크롤을 검토하세요.</li>
      </ul>
      <h2>베스트 프랙티스</h2>
      <ul>
        <li>열 정의/기능 옵션은 상수 또는 <code>useMemo</code>로 고정해 리렌더 비용을 줄입니다.</li>
        <li>행 <code>getRowId</code>를 설정해 델타 업데이트를 활용하세요.</li>
        <li>셀 렌더러는 가벼운 컴포넌트로 유지하고 불필요한 상태를 피합니다.</li>
      </ul>
      <h2>성능 최적화</h2>
      <ul>
        <li>대량 데이터는 서버사이드/인피니트 로우 모델을 사용해 페이지네이션하세요.</li>
        <li>그룹핑/피벗 등 무거운 기능은 필요한 화면에만 한정적으로 사용합니다.</li>
      </ul>
      <p className="text-sm text-gray-600">예제 페이지: <a href="/ag-grid/level-1">Level 1</a>, <a href="/ag-grid/level-7">Level 7</a>, <a href="/ag-grid/level-10">Level 10</a></p>
    </div>
  );
}
