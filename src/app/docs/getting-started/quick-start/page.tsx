import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function QuickStartPage() {
  const repoUrl = "https://github.com/dota-pilot1/interactive-ui-level1.git";

  const oneLiner = `git clone ${repoUrl} \\\n+&& cd interactive-ui-level1/my-admin-project/ui-example-front \\\n+&& npm install \\\n+&& npm run dev`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>빠른 시작</h1>
      <p className="text-gray-600">
        모던 리액트 라이브러리 실전 예제를 즉시 실행해 보세요. 아래 원라인 명령으로 클론부터 개발 서버 실행까지 한 번에 진행합니다.
      </p>

      <div className="mt-4 p-4 rounded-lg border bg-white">
        <p className="m-0">
          프론트 깃 주소: <a href={repoUrl} target="_blank" rel="noreferrer" className="font-mono break-all">{repoUrl}</a>
        </p>
      </div>

      <h3 className="mt-6">원라인 실행</h3>
      <DocCodeBlock code={oneLiner} accent="none" />

      <p className="text-sm text-gray-600">
        실행 후 브라우저에서 <code>http://localhost:3000</code>으로 접속하세요. 문서는 좌측 사이드바 또는 <code>/docs</code> 경로에서 확인할 수 있습니다.
      </p>

      <h3>문서 바로가기</h3>
      <ul>
        <li><a href="/docs/getting-started/installation">설치 가이드</a></li>
        <li><a href="/docs">문서 홈</a></li>
      </ul>

      <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <b>팁:</b> 포트가 사용 중이면 <code>PORT=3001 npm run dev</code>로 변경할 수 있습니다.
      </div>
    </div>
  );
}
