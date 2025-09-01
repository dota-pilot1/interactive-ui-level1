import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function R3FInstallationPage() {
  const npmCmd = "npm i three @react-three/fiber";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Three Fiber 설치 가이드</h1>
      <p className="text-gray-600">WebGL 3D 렌더링을 위한 three.js의 React 렌더러인 R3F를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { Canvas } from '@react-three/fiber';

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/react-three-fiber/level-1">Level 1</a></li>
        <li><a href="/react-three-fiber/level-7">Level 7</a></li>
        <li><a href="/react-three-fiber/level-10">Level 10</a></li>
      </ul>
    </div>
  );
}
