import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function InstallationGuidePage() {
  const repoUrl = "https://github.com/dota-pilot1/interactive-ui-level1.git";

  const steps = [
    {
      title: "필수 조건 확인",
      desc:
        "Node.js 18+ 및 Git이 설치되어 있어야 합니다. macOS는 Homebrew, Windows는 winget/Chocolatey로 설치할 수 있습니다.",
      code: `node -v\nnpm -v\ngit --version`,
    },
    {
      title: "레포지토리 클론",
      desc: "프론트엔드 레포지토리를 로컬로 복제합니다.",
      code: `git clone ${repoUrl}`,
    },
    {
      title: "프로젝트 폴더로 이동",
      desc:
        "모노레포 구조에서 프론트 예제 앱 위치로 이동합니다. (폴더 구조가 다르다면 레포 클론 후 실제 경로에 맞게 이동하세요)",
      code: `cd interactive-ui-level1/my-admin-project/ui-example-front`,
    },
    {
      title: "의존성 설치",
      desc: "패키지를 설치합니다.",
      code: `npm install`,
    },
    {
      title: "개발 서버 실행",
      desc: "Next.js 개발 서버를 실행하고 브라우저에서 접속합니다.",
      code: `npm run dev\n# 브라우저에서 http://localhost:3000 접속`,
    },
    {
      title: "프로덕션 빌드 (선택)",
      desc: "프로덕션용으로 빌드 후 로컬에서 실행해볼 수 있습니다.",
      code: `npm run build\nnpm start`,
    },
  ];

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>설치 가이드</h1>
      <p className="text-gray-600">
        이 사이트의 목적은 <b>모던 리액트 라이브러리</b>를 활용해 <b>실전 예제</b>를
        구현하고 공유하는 것입니다. 아래 단계에 따라 프론트엔드 예제를 로컬에서 빠르게 실행해보세요.
      </p>

      <div className="mt-6 p-4 rounded-lg border bg-white">
        <p className="m-0">
          프론트 깃 주소: 
          <a href={repoUrl} target="_blank" rel="noreferrer" className="font-mono break-all">
            {repoUrl}
          </a>
        </p>
      </div>

      <ol className="mt-6">
        {steps.map((s, idx) => (
          <li key={s.title} className="mb-8">
            <h3 className="mb-1">Step {idx + 1}. {s.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
            <DocCodeBlock code={s.code} language="bash" accent="none" />
          </li>
        ))}
      </ol>

      <div className="mt-10 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <h4 className="m-0">문제 해결</h4>
        <ul className="mt-2 mb-0 text-sm text-blue-900">
          <li>포트 충돌 시: 다른 앱을 종료하거나 <code>PORT=3001 npm run dev</code>로 포트를 변경하세요.</li>
          <li>권한 문제 시: macOS/Linux는 <code>sudo</code> 사용 대신 폴더 권한을 조정하는 것을 권장합니다.</li>
          <li>패키지 설치 에러 시: <code>rm -rf node_modules package-lock.json</code> 후 다시 <code>npm install</code>.</li>
        </ul>
      </div>
    </div>
  );
}
