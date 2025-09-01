import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function QuickExamplesPage() {
  const base = "http://localhost:3000";

  const sections: { title: string; routes: { label: string; path: string }[] }[] = [
    {
      title: "dnd-kit",
      routes: [
        { label: "Level 1", path: "/dnd-kit/level-1" },
        { label: "Level 5", path: "/dnd-kit/level-5" },
        { label: "Level 9", path: "/dnd-kit/level-9" },
      ],
    },
    {
      title: "Dockview",
      routes: [
        { label: "Level 1", path: "/dockview/level-1" },
        { label: "Level 7", path: "/dockview/level-7" },
        { label: "Level 10", path: "/dockview/level-10" },
      ],
    },
    {
      title: "Lexical Editor",
      routes: [
        { label: "Level 1", path: "/lexical-editor/level-1" },
        { label: "Level 7", path: "/lexical-editor/level-7" },
        { label: "Level 10", path: "/lexical-editor/level-10" },
      ],
    },
    {
      title: "React Three Fiber",
      routes: [
        { label: "Level 1", path: "/react-three-fiber/level-1" },
        { label: "Level 7", path: "/react-three-fiber/level-7" },
        { label: "Level 10", path: "/react-three-fiber/level-10" },
      ],
    },
    {
      title: "AG Grid",
      routes: [
        { label: "Level 1", path: "/ag-grid/level-1" },
        { label: "Level 7", path: "/ag-grid/level-7" },
        { label: "Level 10", path: "/ag-grid/level-10" },
      ],
    },
    {
      title: "Headless Tree",
      routes: [{ label: "Level 1", path: "/headless-tree/level-1" }],
    },
    {
      title: "샘플 모음",
      routes: [
        { label: "Apple Imitation", path: "/samples/apple-imitation" },
        { label: "Kanban Board", path: "/samples/kanban-board" },
        { label: "Chat", path: "/samples/chat" },
        { label: "Survey", path: "/samples/survey" },
        { label: "File Upload", path: "/samples/file-upload" },
        { label: "Dockview Window Management", path: "/samples/dockview-window-management" },
        { label: "Tab Splitting", path: "/samples/tab-splitting" },
        { label: "Real-time Events", path: "/samples/real-time-events" },
      ],
    },
  ];

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>빠른 예제 실행</h1>
      <p className="text-gray-600">
        자주 사용하는 예제 화면으로 바로 이동하세요. 링크를 클릭하거나, 아래 URL을 복사해 브라우저 주소창에 붙여넣을 수 있습니다.
      </p>

      {sections.map((s) => (
        <section key={s.title} className="mt-8">
          <h3>{s.title}</h3>
          <ul>
            {s.routes.map((r) => (
              <li key={r.path}>
                <a href={r.path}>{r.label}</a>
                <DocCodeBlock accent="none" code={`${base}${r.path}`} language="bash" />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <b>팁:</b> 개발 서버가 실행 중이어야 페이지에 접속할 수 있습니다. <code>npm run dev</code>로 서버를 켠 뒤 이동하세요.
      </div>
    </div>
  );
}
