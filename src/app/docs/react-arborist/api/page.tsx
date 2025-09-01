export default function ReactArboristApiPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">React Arborist API</h1>
      <p className="text-muted-foreground mb-8">
        이 페이지는 React Arborist의 주요 컴포넌트와 속성을 정리한 API 레퍼런스 초안입니다. 점진적으로 보완됩니다.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Tree</h2>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
          <li><code>data</code>: 트리 데이터 소스</li>
          <li><code>openByDefault</code>: 초기 확장 여부</li>
          <li><code>rowHeight</code>: 행 높이</li>
          <li><code>indent</code>: 들여쓰기 폭</li>
          <li>children: <code>(props) =&gt; ReactNode</code> 렌더러</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">NodeRendererProps</h2>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
          <li><code>node</code>: 현재 노드 컨트롤러</li>
          <li><code>style</code>: 가상 스크롤용 스타일 객체</li>
          <li><code>dragHandle</code>: 드래그 핸들 ref</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">예정</h2>
        <p className="text-sm text-slate-700">
          선택/토글/드래그 API, 컨텍스트 메뉴, 키보드 내비게이션 속성 등 세부 항목 추가 예정입니다.
        </p>
      </section>
    </main>
  );
}

