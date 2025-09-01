import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function FramerMotionGuidePage() {
  const basics = `import { motion } from 'framer-motion';

export default function MotionDemo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      Hello Motion
    </motion.div>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Framer Motion 사용 가이드</h1>
      <p className="text-gray-600">기본 애니메이션부터 화면 전환까지 핵심 패턴을 빠르게 익힙니다.</p>
      <h3>기본 사용</h3>
      <DocCodeBlock accent="none" code={basics} />
      <h3>레이아웃 애니메이션</h3>
      <DocCodeBlock accent="none" code={`<motion.div layout className="p-4 border rounded">내용</motion.div>`} />
      <h3>Presence 전환</h3>
      <DocCodeBlock accent="none" code={`import { AnimatePresence, motion } from 'framer-motion';
<AnimatePresence>{/* 조건부로 <motion.div> */}</AnimatePresence>`} />

      <h2>베스트 프랙티스</h2>
      <ul>
        <li>레이아웃 변화가 잦은 영역에는 <code>layout</code>을 적용해 자연스러운 전환을 만듭니다.</li>
        <li>조건부 렌더는 <code>AnimatePresence</code>로 진입/퇴장 애니메이션을 제어합니다.</li>
        <li>상호작용은 <code>whileHover</code>/<code>whileTap</code> 등 선언형 속성을 우선 사용합니다.</li>
      </ul>

      <h2>성능 최적화</h2>
      <ul>
        <li>가능하면 <code>transform</code> 기반 애니메이션을 사용하고, 레이아웃 쓰기를 최소화합니다.</li>
        <li>중첩 애니메이션은 <code>transition</code>을 단순화하고, 필요 시 <code>reduced motion</code>를 고려합니다.</li>
      </ul>

      <h2>트러블슈팅</h2>
      <ul>
        <li>깜빡임: 초기 상태(<code>initial</code>)를 명확히 지정하고 SSR 환경에서는 클라이언트 전용으로 둡니다.</li>
        <li>겹침/레이어: z-index와 stacking context를 점검하고, transform이 새 컨텍스트를 만드는지 확인합니다.</li>
      </ul>
    </div>
  );
}
