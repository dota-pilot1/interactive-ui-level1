import Link from "next/link";
import { Button } from "@/components/ui/button";

type VLib = {
  title: string;
  description: string;
  docsHref: string;
};

const vueLibraries: VLib[] = [
  {
    title: "Vue Flow",
    description: "노드 기반 플로우/그래프 에디터 (React Flow의 Vue 포트)",
    docsHref: "https://vue-flow.dev/",
  },
  {
    title: "Vue Draggable Next",
    description: "SortableJS 기반 드래그 앤 드롭 (Vue 3)",
    docsHref: "https://github.com/SortableJS/vue.draggable.next",
  },
  {
    title: "@vueuse/motion",
    description: "Motion One 기반 애니메이션 유틸 (VueUse Motion)",
    docsHref: "https://motion.vueuse.org/",
  },
  {
    title: "TroisJS",
    description: "Three.js를 Vue 방식으로 사용하는 3D UI 프레임워크",
    docsHref: "https://troisjs.github.io/",
  },
  {
    title: "AG Grid (Vue)",
    description: "대규모 데이터 그리드 컴포넌트의 Vue 래퍼",
    docsHref: "https://www.ag-grid.com/vue-data-grid/",
  },
  {
    title: "Tiptap",
    description: "ProseMirror 기반 리치 텍스트 에디터 (Vue 지원)",
    docsHref: "https://tiptap.dev/",
  },
  {
    title: "Vue Virtual Scroller",
    description: "대용량 리스트/그리드 가상 스크롤",
    docsHref: "https://github.com/Akryum/vue-virtual-scroller",
  },
  {
    title: "Vue Grid Layout",
    description: "반응형 대시보드 그리드(드래그/리사이즈)",
    docsHref: "https://github.com/jbaysolutions/vue-grid-layout",
  },
  {
    title: "Splitpanes",
    description: "분할 패널/리사이즈 가능한 레이아웃",
    docsHref: "https://antoniandre.github.io/splitpanes/",
  },
  {
    title: "PrimeVue",
    description: "방대한 컴포넌트 세트와 테마 제공",
    docsHref: "https://primevue.org/",
  },
  {
    title: "Vuetify",
    description: "Material Design 기반 Vue 컴포넌트 프레임워크",
    docsHref: "https://vuetifyjs.com/",
  },
  {
    title: "Element Plus",
    description: "기업용 UI에 강한 Vue 3 컴포넌트 라이브러리",
    docsHref: "https://element-plus.org/",
  },
  {
    title: "Naive UI",
    description: "현대적 디자인과 풍부한 컴포넌트 제공",
    docsHref: "https://www.naiveui.com/",
  },
  {
    title: "Quasar",
    description: "SPA/PWA/모바일/데스크톱까지 아우르는 Vue 풀스택 프레임워크",
    docsHref: "https://quasar.dev/",
  },
  {
    title: "Vue-ECharts",
    description: "ECharts의 Vue 래퍼 (대시보드 차트 구성)",
    docsHref: "https://vue-echarts.dev/",
  },
  {
    title: "Vue ApexCharts",
    description: "ApexCharts의 Vue 래퍼",
    docsHref: "https://apexcharts.com/docs/vue-charts/",
  },
  {
    title: "he-tree-vue",
    description: "유연한 트리/드래그 지원 트리 컴포넌트",
    docsHref: "https://github.com/phphe/he-tree-vue",
  },
  {
    title: "monaco-editor-vue3",
    description: "Monaco Editor의 Vue 3 래퍼",
    docsHref: "https://github.com/Fe3dback/monaco-editor-vue3",
  },
];

export default function VueLibrariesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">라이브러리 (Vue)</h1>
      <p className="text-muted-foreground mb-8">
        Vue 생태계의 대세급 검증된 라이브러리를 모았습니다. 각 카드의 문서를 통해 설치와 사용 예시를 확인하세요.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vueLibraries.map((lib) => (
          <div
            key={lib.title}
            className="border rounded-lg p-5 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{lib.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{lib.description}</p>
            <Button asChild variant="secondary">
              <Link href={lib.docsHref} target="_blank" rel="noreferrer">
                문서 보기
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}

