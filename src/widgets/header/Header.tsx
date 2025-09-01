"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const topics: { title: string; slug: string; levels: number }[] = [
  { title: "Framer Motion", slug: "framer-motion", levels: 10 },
  { title: "dnd-kit", slug: "dnd-kit", levels: 10 },
  { title: "React Three Fiber", slug: "react-three-fiber", levels: 10 },
  { title: "AG Grid", slug: "ag-grid", levels: 10 },
  { title: "Lexical Editor", slug: "lexical-editor", levels: 10 },
  { title: "Dockview", slug: "dockview", levels: 10 },
  { title: "Headless Tree", slug: "headless-tree", levels: 10 },
  { title: "React Arborist", slug: "react-arborist", levels: 10 },
];

const sampleTopics: { title: string; href: string }[] = [
  { title: "트리 메뉴", href: "/samples/tree-menu" },
  { title: "탭 분할", href: "/samples/tab-splitting" },
  { title: "파일 업로드", href: "/samples/file-upload" },
  { title: "실시간 이벤트 수신", href: "/samples/real-time-events" },
  { title: "채팅", href: "/samples/chat" },
  { title: "애플 따라 잡기", href: "/samples/apple-imitation" },
  { title: "설문조사", href: "/samples/survey" },
  { title: "칸반 보드", href: "/samples/kanban-board" },
  {
    title: "Dockview로 윈도우 관리",
    href: "/samples/dockview-window-management",
  },
  { title: "렉시컬 에디터 with AI", href: "/samples/lexical-editor-with-ai" },
];

export const Header = () => {
  return (
    <header className="bg-background text-foreground p-4 flex items-center border-b">
      <div className="text-lg font-bold w-1/4">
        <Link href="/">UI Practice</Link>
      </div>
      <nav className="flex justify-center items-center w-2/4 space-x-1">
        {topics.map((topic) => (
          <DropdownMenu key={topic.title}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">{topic.title}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-96 overflow-y-auto">
              {Array.from({ length: topic.levels }, (_, i) => i + 1).map(
                (level) => (
                  <DropdownMenuItem key={level} asChild>
                    <Link href={`/${topic.slug}/level-${level}`}>
                      Level {level}
                    </Link>
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        {/* Sample Components Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Sample Components</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-96 overflow-y-auto">
            {sampleTopics.map((sample) => (
              <DropdownMenuItem key={sample.title} asChild>
                <Link href={sample.href}>{sample.title}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Docs Link */}
        <Button variant="ghost" asChild>
          <Link href="/docs">Docs</Link>
        </Button>
      </nav>
      <div className="w-1/4"></div>
    </header>
  );
};
