import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";


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
      <DocCodeBlock accent="none" code={step1Code} language="jsx" />

      <h2 id="step-2">Step 2: 상태와 기본 구조 설정</h2>
      <p>
        이제 페이지의 기본 구조를 설정합니다. 항목들의 순서를 저장할
        상태(`useState`)를 만들고, `DndContext`와 `SortableContext`로 전체
        리스트를 감싸줍니다. 아직 드래그 로직은 비어있습니다.
      </p>
      <DocCodeBlock accent="none" code={step2Code} language="jsx" />

      <h2 id="step-3">Step 3: 드래그 종료 로직 추가하기</h2>
      <p>
        드래그가 끝났을 때, 실제 항목의 순서를 바꿔주는 `handleDragEnd` 함수를
        작성합니다. 이 함수는 `DndContext`의 `onDragEnd` 속성에 연결되어야
        합니다.
      </p>
      <DocCodeBlock accent="none" code={step3Code} language="jsx" />

      <h2 id="step-4">Step 4: 전체 코드 확인</h2>
      <p>
        위의 모든 단계를 합친 최종 코드입니다. `dnd-kit/level-1/page.tsx` 파일의
        내용이 아래와 같아야 합니다.
      </p>
      <DocCodeBlock accent="none" code={finalCode} language="jsx" />

      <hr className="my-8" />

      <h2 id="advanced">심화 예제</h2>
      <h3>1) DragOverlay로 미리보기 제공</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { DndContext, DragOverlay } from '@dnd-kit/core';
import { createPortal } from 'react-dom';

function Overlay({ activeId }: { activeId: string | null }) {
  if (!activeId) return null;
  return createPortal(
    <div className="px-3 py-2 rounded border bg-white shadow">{activeId}</div>,
    document.body
  );
}

export default function Example() {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  return (
    <DndContext onDragStart={(e) => setActiveId(String(e.active.id))} onDragEnd={() => setActiveId(null)}>
      {/* ... SortableContext / items ... */}
      <DragOverlay>
        <Overlay activeId={activeId} />
      </DragOverlay>
    </DndContext>
  );
}`} />

      <h3>2) 수평/수직 축 제한 + 드래그 핸들</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } = useSortable({ id });
  const style = { transform: CSS.Translate.toString({ x: transform?.x || 0, y: 0 }), transition };
  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2 border p-2 rounded">
      <button ref={setActivatorNodeRef} {...listeners} {...attributes} className="cursor-grab px-2 py-1 border rounded bg-slate-50">::</button>
      <span>{id}</span>
    </div>
  );
}`} />

      <h3>3) Sensor/Collision 튜닝</h3>
      <DocCodeBlock accent="none" language="tsx" code={`import { DndContext, closestCenter, pointerWithin, rectIntersection } from '@dnd-kit/core';
import { useSensors, useSensor, PointerSensor } from '@dnd-kit/core';

const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

export default function Example() {
  return (
    <DndContext sensors={sensors} collisionDetection={pointerWithin /* 또는 rectIntersection / closestCenter */}>
      {/* ... */}
    </DndContext>
  );
}`} />

      <h2 id="troubleshooting">트러블슈팅</h2>
      <ul>
        <li>드래그가 안 될 때: 부모 요소의 <code>pointer-events</code>와 <code>overflow</code> 스타일, 포지셔닝을 확인하세요.</li>
        <li>레이아웃 깨짐: 드래그 중 <code>transform</code> 적용으로 인해 컨테이너 높이가 줄어드는 경우 placeholder 스타일을 추가하세요.</li>
        <li>모바일 지연: <code>activationConstraint.distance</code>를 낮추거나 <code>touchAction: &apos;none&apos;</code>을 검토하세요.</li>
      </ul>

      <h2 id="best-practices">베스트 프랙티스</h2>
      <ul>
        <li>항목의 <code>id</code>는 불변하고 고유하게 유지합니다.</li>
        <li>큰 리스트는 아이템 컴포넌트를 메모이제이션하고, 필요 시 가상 스크롤과 조합합니다.</li>
        <li>드래그 프리뷰는 <code>DragOverlay</code>를 사용하고, <code>createPortal</code>로 <code>document.body</code>에 렌더링합니다.</li>
        <li>센서 활성 조건(<code>activationConstraint</code>)을 환경(모바일/데스크톱)에 맞춰 조정합니다.</li>
      </ul>

      <h2 id="performance">성능 최적화</h2>
      <ul>
        <li>스타일 변화는 <code>transform</code> 중심으로 적용하여 레이아웃 reflow를 줄입니다.</li>
        <li>충돌 전략은 단순한 것부터 테스트(<code>closestCenter</code>)하고, 필요한 경우에만 정밀 전략으로 전환합니다.</li>
        <li><code>arrayMove</code>로 최소 변경만 적용하고 불필요한 상태 복제를 피합니다.</li>
      </ul>

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
