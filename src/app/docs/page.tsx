export default function DocsHomePage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-8">문서</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">🚀 시작하기</h2>
          <p className="text-gray-600 mb-4">
            프로젝트 설정부터 첫 번째 컴포넌트 만들기까지
          </p>
          <ul className="space-y-1 text-sm">
            <li>• <a className="text-blue-600 hover:underline" href="/docs/getting-started/installation">설치 가이드</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/getting-started/quick-start">빠른 시작</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/getting-started/quick-examples">빠른 예제 실행</a></li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">📚 라이브러리</h2>
          <p className="text-gray-600 mb-4">자주 사용하는 라이브러리 설치 및 사용 가이드</p>
          <ul className="space-y-1 text-sm">
            <li>• <a className="text-blue-600 hover:underline" href="/docs/dnd-kit/installation">dnd-kit 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/dockview/installation">Dockview 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/lexical-editor/installation">Lexical 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/react-three-fiber/installation">React Three Fiber 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/ag-grid/installation">AG Grid 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/headless-tree/installation">Headless Tree 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/framer-motion/installation">Framer Motion 설치</a></li>
            <li>• <a className="text-blue-600 hover:underline" href="/docs/react-arborist/installation">React Arborist 설치</a></li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">🧭 패턴/방법론</h2>
          <p className="text-gray-600 mb-4">UI 구현 시 선택할 수 있는 아키텍처/패턴 가이드</p>
          <ul className="space-y-1 text-sm">
            <li>• <a className="text-blue-600 hover:underline" href="/docs/patterns/tree-menu">트리 메뉴 구현 방법론</a></li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">⚡ 고급 기능</h2>
          <p className="text-gray-600 mb-4">
            성능 최적화와 고급 커스터마이징
          </p>
          <ul className="space-y-1 text-sm">
            <li>• 성능 최적화 팁</li>
            <li>• 커스터마이징 가이드</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">💡 도움말</h2>
          <p className="text-gray-600 mb-4">
            자주 묻는 질문과 문제 해결
          </p>
          <ul className="space-y-1 text-sm">
            <li>• FAQ</li>
            <li>• 트러블슈팅</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">👈 사이드바를 이용하세요</h3>
        <p className="text-blue-800">
          왼쪽 사이드바에서 원하는 문서를 선택하여 자세한 내용을 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
