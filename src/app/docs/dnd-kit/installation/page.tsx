import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


export default function DndKitInstallationPage() {
  const npmCmd = "npm i @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities";
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>dnd-kit 설치 가이드</h1>
      <p className="text-gray-600">드래그 앤 드롭을 위한 dnd-kit 라이브러리를 설치합니다.</p>
      <h3>설치</h3>
      <DocCodeBlock accent="none" code={npmCmd} />
      <h3>기본 예제</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { DndContext, useDraggable } from '@dnd-kit/core';
function Draggable() {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: 'drag-1' });
  const style = { transform: transform ? 'translate3d(' + transform.x + 'px, ' + transform.y + 'px, 0)' : undefined };
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Drag me
    </button>
  );
}
export default function Demo() {
  return (
    <DndContext>
      <Draggable />
    </DndContext>
  );
}`} />
      <h3>예제 보기</h3>
      <ul>
        <li><a href="/dnd-kit/level-1">Level 1</a></li>
        <li><a href="/dnd-kit/level-5">Level 5</a></li>
        <li><a href="/dnd-kit/level-9">Level 9</a></li>
      </ul>
    </div>
  );
}
