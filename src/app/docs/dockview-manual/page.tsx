
'use client';

import React from 'react';
import Link from 'next/link';

export default function DockviewManualPage() {
  return (
    <div className="container mx-auto py-10 prose dark:prose-invert max-w-4xl">
      <h1>Dockview 기본 가이드</h1>
      <p className="text-lg text-muted-foreground">`Dockview`는 VS Code와 같은 복잡한 도킹 레이아웃을 웹 애플리케이션에 구현할 수 있도록 도와주는 전문 라이브러리입니다.</p>

      <hr className="my-8" />

      <h2 id="dnd-kit-relation">`dnd-kit`과의 관계</h2>
      <p>결론부터 말하면, <strong>`Dockview`는 `dnd-kit`과 함께 사용되지 않습니다.</strong></p>
      <p>`Dockview`는 패널을 드래그하여 탭을 분리하고, 화면을 분할하는 등 자체적으로 필요한 모든 드래그 앤 드롭 로직을 내장하고 있는 고수준 라이브러리입니다. 반면, `dnd-kit`은 드래그 앤 드롭 상호작용을 세밀하게 직접 구현할 때 사용하는 저수준 라이브러리입니다. 따라서 도킹 레이아웃을 구현할 때는 `Dockview` 하나만으로 충분합니다.</p>

      <h2 id="related-libraries">함께 사용하면 좋은 라이브러리</h2>
      <p>`Dockview`로 도킹 레이아웃을 구성할 때, 각 패널의 내용을 채우기 위해 다른 전문 라이브러리들을 함께 사용하는 경우가 많습니다. 예를 들어, 파일 탐색기나 계층 구조를 가진 메뉴를 구현할 때 유용한 라이브러리들이 있습니다.</p>

      <div className="p-4 border rounded-lg my-4">
        <h3 className="mt-0">트리 메뉴 (Tree Menu) / 파일 탐색기</h3>
        <p className="mt-2">VS Code의 사이드바에 있는 파일 탐색기와 같은 계층적인 트리 구조를 만들고 싶을 때 유용합니다.</p>
        <ul className="not-prose list-none p-0 m-0">
          <li><a href="https://react-arborist.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">react-arborist</a>: 가상화(Virtualization)를 지원하여 수천 개의 항목도 빠르게 렌더링할 수 있는 고성능 트리 컴포넌트 라이브러리입니다.</li>
        </ul>
      </div>

      <div className="p-4 border rounded-lg my-4">
        <h3 className="mt-0">탭 분할 (Tab Splitting)</h3>
        <p className="mt-2">탭을 드래그하여 화면을 분할하는 기능은 <strong>`Dockview`의 핵심 기능이므로 별도의 라이브러리가 필요 없습니다.</strong> `Dockview`가 이 모든 것을 처리해 줍니다.</p>
      </div>

      <hr className="my-8" />

      <h2 id="references">참고 자료</h2>
      <ul>
        <li><a href="https://dockview.dev/" target="_blank" rel="noopener noreferrer">Dockview 공식 웹사이트</a></li>
        <li><a href="https://react-arborist.com/" target="_blank" rel="noopener noreferrer">react-arborist 공식 웹사이트</a></li>
      </ul>

    </div>
  );
}
