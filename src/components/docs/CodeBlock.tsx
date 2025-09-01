"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";

export interface DocCodeBlockProps {
  code: string;
  language?: string;
  accent?: "emerald" | "sky" | "none" | "blue" | "green" | "purple" | "orange" | "red";
}

export function DocCodeBlock({ code, language = "bash", accent = "emerald" }: DocCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const accentClass = accent === "none" ? "" : 
    `border-l-4 ${
      accent === "sky" ? "border-l-sky-300 dark:border-l-sky-400/60" :
      accent === "blue" ? "border-l-blue-300 dark:border-l-blue-400/60" :
      accent === "green" ? "border-l-green-300 dark:border-l-green-400/60" :
      accent === "purple" ? "border-l-purple-300 dark:border-l-purple-400/60" :
      accent === "orange" ? "border-l-orange-300 dark:border-l-orange-400/60" :
      accent === "red" ? "border-l-red-300 dark:border-l-red-400/60" :
      "border-l-emerald-300 dark:border-l-emerald-400/60"
    }`;

  // Force transparent backgrounds regardless of theme defaults
  const PreTag = (props: React.ComponentProps<'pre'>) => (
    <pre
      {...props}
      style={{ ...(props.style || {}), background: "transparent", border: "none", borderRadius: 0 }}
      className={`${props.className || ""} bg-transparent border-none`}
    />
  );
  const CodeTag = (props: React.ComponentProps<'code'>) => (
    <code
      {...props}
      style={{ ...(props.style || {}), background: "transparent" }}
      className={`${props.className || ""} bg-transparent`}
    />
  );

  return (
    <div className={`not-prose relative my-8 rounded-md border border-slate-200 dark:border-slate-700 bg-blue-50 overflow-auto shadow-sm ${accentClass}`}>
      <Button size="sm" onClick={onCopy} className="absolute top-2 right-2 z-10 h-7 w-16">
        {copied ? "Copied!" : "Copy"}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={ghcolors}
        PreTag={PreTag}
        CodeTag={CodeTag}
        customStyle={{ background: "#dbeafe", padding: 16, border: "none", borderRadius: 0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
