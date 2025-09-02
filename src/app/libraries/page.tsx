import Link from "next/link";
import { Button } from "@/components/ui/button";

type Library = {
  title: string;
  slug: string;
  description: string;
  levels: number; // how many level pages exist
  docsHref?: string; // optional external/internal docs link
};

const libraries: Library[] = [
  {
    title: "Framer Motion",
    slug: "framer-motion",
    description: "애니메이션과 모션을 손쉽게 구현하는 React 모션 라이브러리",
    levels: 10,
  },
  {
    title: "dnd-kit",
    slug: "dnd-kit",
    description: "가벼운 드래그 앤 드롭 유틸리티로 유연한 인터랙션 구성",
    levels: 10,
  },
  {
    title: "React Three Fiber",
    slug: "react-three-fiber",
    description: "Three.js를 React 방식으로 활용하여 3D UI를 구축",
    levels: 10,
  },
  {
    title: "AG Grid",
    slug: "ag-grid",
    description: "강력한 데이터 그리드 컴포넌트로 대규모 데이터 테이블 처리",
    levels: 10,
  },
  {
    title: "Lexical Editor",
    slug: "lexical-editor",
    description: "Meta가 만든 확장 가능한 리치 텍스트 에디터 프레임워크",
    levels: 10,
  },
  {
    title: "Dockview",
    slug: "dockview",
    description: "VS Code처럼 도킹 가능한 패널/레이아웃 관리 UI 구성",
    levels: 10,
  },
  {
    title: "Headless Tree",
    slug: "headless-tree",
    description: "헤드리스 트리 구성요소로 커스텀 트리/네비게이션 구현",
    levels: 1,
  },
  {
    title: "React Flow",
    slug: "react-flow",
    description: "노드 기반 플로우/그래프 UI를 직관적으로 구현하는 라이브러리",
    levels: 0,
    docsHref: "https://reactflow.dev/learn/",
  },
  {
    title: "React Virtualized",
    slug: "react-virtualized",
    description: "대용량 리스트/그리드 가상 스크롤링 라이브러리",
    levels: 0,
    docsHref: "https://github.com/bvaughn/react-virtualized",
  },
  {
    title: "React Window",
    slug: "react-window",
    description: "가벼운 대체: 간단한 가상 스크롤 컴포넌트",
    levels: 0,
    docsHref: "https://github.com/bvaughn/react-window",
  },
];

export default function LibrariesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">라이브러리</h1>
      <p className="text-muted-foreground mb-8">
        자주 쓰는 UI 라이브러리를 카드로 정리했습니다. 각 카드에서 레벨별 예제와 설치/가이드를 확인하세요.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraries.map((lib) => (
          <div
            key={lib.slug}
            className="border rounded-lg p-5 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{lib.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{lib.description}</p>
            {lib.levels > 0 ? (
              <div className="grid grid-cols-5 gap-2 mb-4">
                {Array.from({ length: lib.levels }, (_, i) => i + 1).map((level) => (
                  <Button key={level} variant="outline" size="sm" asChild>
                    <Link href={`/${lib.slug}/level-${level}`}>Lv {level}</Link>
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground mb-4">레벨 예제 준비중</p>
            )}
            <Button variant="secondary" asChild>
              <Link
                href={lib.docsHref ?? `/docs/${lib.slug}/installation`}
                target={lib.docsHref?.startsWith("http") ? "_blank" : undefined}
                rel={lib.docsHref?.startsWith("http") ? "noreferrer" : undefined}
              >
                설치/문서
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
