import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReactArboristHubPage() {
  const levels = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">React Arborist</h1>
        <p className="text-muted-foreground mt-2">
          트리 UI 구현을 위한 강력한 React 라이브러리. 예제 레벨과 문서를 한 곳에서 탐색하세요.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">빠른 실행</h2>
        <div className="grid grid-cols-3 gap-3 max-w-md">
          <Button asChild>
            <Link href="/react-arborist/level-1">Level 1</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/react-arborist/guide">Docs</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/react-arborist/api">API</Link>
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">레벨</h2>
        <div className="grid grid-cols-5 gap-2 max-w-2xl">
          {levels.map((lv) => (
            <Button key={lv} variant="secondary" size="sm" asChild>
              <Link href={`/react-arborist/level-${lv}`}>Lv {lv}</Link>
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">문서</h2>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
          <li>
            <Link className="text-blue-600 hover:underline" href="/docs/react-arborist/installation">
              설치 가이드
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 hover:underline" href="/docs/react-arborist/guide">
              사용 가이드
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 hover:underline" href="/docs/react-arborist/api">
              API 레퍼런스
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

