"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";

// Enhanced CodeBlock with a Copy button
const CodeBlock = ({
  codeString,
  language,
}: {
  codeString: string;
  language: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4">
      <Button
        size="sm"
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 h-7 w-16"
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default function DndKitManualPage() {
  const step1Code = `import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// 정렬 가능한 각 항목을 위한 컴포넌트
export function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    marginBottom: '0.5rem',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    cursor: 'grab',
    userSelect: 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}`;

  const step2Code = `'use client';

import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
// import { SortableItem } from './SortableItem'; // (이전 단계에서 만든 컴포넌트)

// 임시로 SortableItem을 여기에 포함시킵니다. 실제로는 파일을 분리하는 것이 좋습니다.
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition, padding: '1rem', marginBottom: '0.5rem', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'grab', userSelect: 'none' };
  return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{id}</div>;
}

export default function DndKitLevel1Page() {
  const [items, setItems] = useState(['항목 1', '항목 2', '항목 3', '항목 4', '항목 5']);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Simple Sortable List</h1>
        <p className="text-muted-foreground text-center mb-8">아이템을 드래그하여 순서를 바꿔보세요.</p>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={() => {}}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="p-4 bg-slate-50 rounded-lg">
              {items.map((id) => <SortableItem key={id} id={id} />)}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}`;

  const step3Code = `const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

  if (over && active.id !== over.id) {
    setItems((currentItems) => {
      const oldIndex = currentItems.indexOf(active.id as string);
      const newIndex = currentItems.indexOf(over.id as string);
      // arrayMove 유틸리티로 배열 순서를 쉽게 변경
      return arrayMove(currentItems, oldIndex, newIndex);
    });
  }
};

// ... DndContext의 onDragEnd 속성에 이 함수를 연결합니다.
// <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
`;

  const finalCode = `'use client';

import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// 1. Sortable Item Component
function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    marginBottom: '0.5rem',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    cursor: 'grab',
    userSelect: 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

// 2. Main Page Component
export default function DndKitLevel1Page() {
  const [items, setItems] = useState(['항목 1', '항목 2', '항목 3', '항목 4', '항목 5']);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.indexOf(active.id as string);
        const newIndex = currentItems.indexOf(over.id as string);
        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Simple Sortable List</h1>
        <p className="text-muted-foreground text-center mb-8">아이템을 드래그하여 순서를 바꿔보세요.</p>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="p-4 bg-slate-50 rounded-lg">
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
`;

  return (
    <div className="container mx-auto py-10 prose dark:prose-invert max-w-4xl">
      <h1>dnd-kit Level 1 따라하기 (Sortable List)</h1>
      <p className="text-lg text-muted-foreground">
        이 가이드를 따라 `dnd-kit/level-1` 페이지에 코드를 직접
        복사-붙여넣기하며 간단한 정렬 리스트를 만들어 보세요.
      </p>

      <hr className="my-8" />

      <h2 id="step-1">Step 1: 개별 항목 컴포넌트 만들기</h2>
      <p>
        먼저, 드래그 될 리스트의 각 항목을 위한 `SortableItem` 컴포넌트를
        만듭니다. 이 코드는 항목을 드래그 가능하게 하고 움직임에 따른 스타일을
        적용하는 역할을 합니다.
      </p>
      <CodeBlock codeString={step1Code} language="jsx" />

      <h2 id="step-2">Step 2: 상태와 기본 구조 설정</h2>
      <p>
        이제 페이지의 기본 구조를 설정합니다. 항목들의 순서를 저장할
        상태(`useState`)를 만들고, `DndContext`와 `SortableContext`로 전체
        리스트를 감싸줍니다. 아직 드래그 로직은 비어있습니다.
      </p>
      <CodeBlock codeString={step2Code} language="jsx" />

      <h2 id="step-3">Step 3: 드래그 종료 로직 추가하기</h2>
      <p>
        드래그가 끝났을 때, 실제 항목의 순서를 바꿔주는 `handleDragEnd` 함수를
        작성합니다. 이 함수는 `DndContext`의 `onDragEnd` 속성에 연결되어야
        합니다.
      </p>
      <CodeBlock codeString={step3Code} language="jsx" />

      <h2 id="step-4">Step 4: 전체 코드 확인</h2>
      <p>
        위의 모든 단계를 합친 최종 코드입니다. `dnd-kit/level-1/page.tsx` 파일의
        내용이 아래와 같아야 합니다.
      </p>
      <CodeBlock codeString={finalCode} language="jsx" />

      <hr className="my-8" />

      <h2 id="references">참고 자료</h2>
      <ul>
        <li>
          <a
            href="https://dndkit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            dnd-kit 공식 웹사이트
          </a>
        </li>
      </ul>
    </div>
  );
}
