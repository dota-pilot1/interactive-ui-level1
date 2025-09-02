"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// Dropdown components removed from header usage

// Keep header minimal: React Arborist dropdown + Libraries + Docs
const arboristTopic: { title: string; slug: string; levels: number } = {
  title: "React Arborist",
  slug: "react-arborist",
  levels: 10,
};

// (Samples moved out of header; see /samples pages if needed)

export const Header = () => {
  return (
    <header className="bg-background text-foreground p-4 flex items-center border-b">
      <div className="text-lg font-bold w-1/4">
        <Link href="/">UI Practice</Link>
      </div>
      <nav className="flex justify-center items-center w-2/4 space-x-1">
        {/* React Arborist Hub Link */}
        <Button variant="ghost" asChild>
          <Link href={`/${arboristTopic.slug}`}>{arboristTopic.title}</Link>
        </Button>

        {/* Libraries (React) */}
        <Button variant="ghost" asChild>
          <Link href="/libraries">Libraries (React)</Link>
        </Button>

        {/* Libraries (Vue) */}
        <Button variant="ghost" asChild>
          <Link href="/libraries/vue">Libraries (Vue)</Link>
        </Button>

        {/* Docs Link */}
        <Button variant="ghost" asChild>
          <Link href="/docs">Docs</Link>
        </Button>
      </nav>
      <div className="w-1/4"></div>
    </header>
  );
};
