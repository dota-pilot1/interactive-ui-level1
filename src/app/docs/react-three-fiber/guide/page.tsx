import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function R3FGuidePage() {
  const setup = `import { Canvas } from '@react-three/fiber';

function SpinningBox() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="tomato" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SpinningBox />
    </Canvas>
  );
}`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Three Fiber 사용 가이드</h1>
      <p className="text-gray-600">Canvas 레이아웃과 기본 Mesh 구성으로 3D 장면을 빠르게 시작합니다.</p>
      <ol>
        <li>패키지 설치: <code>npm i three @react-three/fiber</code></li>
        <li>Canvas로 렌더 영역 생성, 라이트/메시 추가</li>
        <li>컴포넌트로 도형/재질을 분리해 재사용</li>
      </ol>
      <h3>기본 장면 예제</h3>
      <DocCodeBlock accent="none" code={setup} />
      <h2>심화 예제</h2>
      <h3>1) 회전 애니메이션</h3>
      <DocCodeBlock accent="none" code={`import { Canvas, useFrame } from '@react-three/fiber';
function RotatingBox() {
  const ref = React.useRef<{ rotation: { y: number } }>(null);
  useFrame(() => { if (ref.current) ref.current.rotation.y += 0.01; });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}`} />

      <h3>2) 반응형 캔버스 팁</h3>
      <ul>
        <li>부모 컨테이너에 고정 높이 또는 비율 박스를 주어 Canvas가 보이도록 합니다.</li>
        <li>SSR 이슈가 있으면 페이지를 클라이언트 컴포넌트로 전환하거나 dynamic import를 사용하세요.</li>
      </ul>
      <h2>베스트 프랙티스</h2>
      <ul>
        <li>지오메트리/머티리얼은 <code>useMemo</code>로 재사용해 생성 비용을 줄입니다.</li>
        <li><code>useFrame</code>에서 상태 변경은 최소화하고, 필요 시 refs를 사용합니다.</li>
        <li>조명/그림자 설정은 단순하게 유지하고, 필요한 곳에만 사용합니다.</li>
      </ul>
      <h2>성능 최적화</h2>
      <ul>
        <li><code>dpr</code>를 제한하고(<code>dpr={[1, 1.5]}</code>), <code>frameloop</code>를 <code>&apos;demand&apos;</code>로 설정해 불필요한 렌더를 줄입니다.</li>
        <li>복잡한 모델은 로우 폴리 버전을 사용하고, 텍스처 해상도를 적절히 낮춥니다.</li>
      </ul>
      <p className="text-sm text-gray-600">예제 페이지: <a href="/react-three-fiber/level-1">Level 1</a>, <a href="/react-three-fiber/level-7">Level 7</a>, <a href="/react-three-fiber/level-10">Level 10</a></p>
    </div>
  );
}
