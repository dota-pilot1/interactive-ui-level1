import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function FramerMotionInstallationPage() {
  const npmCmd = "npm i framer-motion";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Framer Motion 설치 가이드</h1>
      <p className="text-gray-600">애니메이션을 위한 Framer Motion을 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { motion } from 'framer-motion';

export default function MotionDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-4 rounded border inline-block"
    >
      안녕하세요 👋
    </motion.div>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/framer-motion/level-1">Level 1</a></li>
        <li><a href="/framer-motion/level-7">Level 7</a></li>
        <li><a href="/framer-motion/level-10">Level 10</a></li>
      </ul>
    </div>
  );
}
