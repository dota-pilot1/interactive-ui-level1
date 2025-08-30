
'use client';

import React from 'react';
import Link from 'next/link';

export default function TreeMenuManualPage() {
  return (
    <div className="container mx-auto py-10 prose dark:prose-invert max-w-4xl">
      <h1>다단계 트리 메뉴 구현 방법론</h1>
      <p className="text-lg text-muted-foreground">웹 애플리케이션에서 파일 탐색기나 조직도처럼 계층 구조를 가진 다단계 트리 메뉴를 구현하는 대표적인 방법 3가지를 비교하고 설명합니다.</p>

      <hr className="my-8" />

      <h2 id="method-1">방법 1: 고기능 전문 라이브러리 사용 (예: `react-arborist`)</h2>
      <p>가장 빠르고 강력한 방법으로, 트리 뷰를 위해 만들어진 전문 라이브러리를 사용하는 것입니다. 렌더링, 상태 관리, 가상화(대용량 데이터 처리), 키보드 네비게이션, 드래그 앤 드롭 등 대부분의 고급 기능을 내장하고 있습니다.</p>
      <div className="p-4 border rounded-lg my-4">
        <h4 className="mt-0">✅ 장점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>개발 속도</strong>: 복잡한 기능을 매우 빠르게 구현할 수 있습니다.</li>
          <li><strong>고성능</strong>: 가상화(Virtualization)를 기본 지원하여 수천, 수만 개의 항목도 끊김 없이 부드럽게 렌더링합니다.</li>
          <li><strong>풍부한 기능</strong>: 키보드 탐색, 드래그 앤 드롭, 인라인 이름 변경 등 트리 메뉴에 필요한 대부분의 기능이 내장되어 있습니다.</li>
        </ul>
        <h4 className="mt-4">❌ 단점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>제한적인 커스터마이징</strong>: 라이브러리가 제공하는 틀 안에서 UI를 만들어야 하므로, 아주 세밀한 디자인 커스터마이징에는 한계가 있을 수 있습니다.</li>
          <li><strong>러닝 커브</strong>: 라이브러리의 고유한 API와 데이터 구조를 학습해야 합니다.</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4"><strong>추천 대상</strong>: 대용량 데이터를 다루거나, 복잡한 기능(D&D, 인라인 편집 등)이 반드시 필요하며, 빠른 개발 속도가 중요한 프로젝트.</p>
      </div>

      <h2 id="method-2">방법 2: Headless 컴포넌트 조합 (예: `Radix UI` + `Tailwind CSS`)</h2>
      <p>기능(Logic)과 디자인(UI)이 분리된 Headless UI 라이브러리를 조합하여 만드는 방식입니다. 기능의 뼈대는 라이브러리를 활용하되, 모든 UI는 직접 원하는 대로 그릴 수 있어 균형이 좋은 방법입니다.</p>
      <div className="p-4 border rounded-lg my-4">
        <h4 className="mt-0">✅ 장점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>완벽한 디자인 제어</strong>: 모든 UI를 직접 만들기 때문에 원하는 디자인을 100% 구현할 수 있습니다.</li>
          <li><strong>우수한 접근성</strong>: Radix UI 같은 라이브러리는 웹 접근성 표준을 잘 준수하여 만들어졌습니다.</li>
          <li><strong>유연성</strong>: 필요한 기능만 조합해서 사용하므로 프로젝트가 가볍게 유지됩니다.</li>
        </ul>
        <h4 className="mt-4">❌ 단점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>직접 구현할 부분 증가</strong>: 상태 관리, 데이터 구조 등 많은 부분을 직접 코드로 작성해야 합니다.</li>
          <li><strong>성능 최적화의 부재</strong>: 가상화 같은 고성능 최적화는 직접 구현하거나 다른 라이브러리(`@tanstack/react-virtual`)를 추가로 조합해야 합니다.</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4"><strong>추천 대상</strong>: 고유한 디자인 시스템을 가지고 있거나, 디자인 자유도가 매우 중요하며, 데이터 양이 많지 않은 프로젝트.</p>
      </div>

      <h2 id="method-3">방법 3: 순수 React로 직접 만들기 (재귀 컴포넌트)</h2>
      <p>외부 라이브러리 의존을 최소화하고, React의 기본 기능(컴포넌트, `useState`)만으로 직접 구현하는 방식입니다. `TreeNode`라는 컴포넌트가 자신의 자식 노드들을 재귀적으로 렌더링하는 구조가 핵심입니다.</p>
      <div className="p-4 border rounded-lg my-4">
        <h4 className="mt-0">✅ 장점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>최소한의 의존성</strong>: 프로젝트를 매우 가볍게 유지할 수 있습니다.</li>
          <li><strong>완벽한 제어권</strong>: 코드의 모든 부분을 직접 작성하므로 동작 방식을 100% 제어할 수 있습니다.</li>
          <li><strong>학습 효과</strong>: 재귀, 상태 관리 등 React의 핵심 개념을 깊이 있게 이해하는 데 큰 도움이 됩니다.</li>
        </ul>
        <h4 className="mt-4">❌ 단점</h4>
        <ul className="not-prose list-disc pl-5 m-0">
          <li><strong>가장 높은 복잡도</strong>: 개발에 가장 많은 시간과 노력이 필요합니다.</li>
          <li><strong>어려운 최적화</strong>: 접근성, 키보드 네비게이션, 성능 최적화(가상화) 등을 모두 직접 구현해야 하므로 매우 어렵습니다.</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4"><strong>추천 대상</strong>: 트리 구조가 매우 단순하거나, 학습 목적으로 직접 구현해보고 싶은 경우.</p>
      </div>

      <hr className="my-8" />

      <h2 id="summary">방법론 요약 비교</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">고려사항</th>
              <th className="p-2">방법 1 (전문 라이브러리)</th>
              <th className="p-2">방법 2 (Headless 조합)</th>
              <th className="p-2">방법 3 (직접 구현)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="p-2 font-semibold">개발 속도</td><td className="p-2">매우 빠름</td><td className="p-2">보통</td><td className="p-2">느림</td></tr>
            <tr className="border-b"><td className="p-2 font-semibold">디자인 자유도</td><td className="p-2">낮음</td><td className="p-2">매우 높음</td><td className="p-2">매우 높음</td></tr>
            <tr className="border-b"><td className="p-2 font-semibold">성능 (대용량)</td><td className="p-2">매우 좋음</td><td className="p-2">별도 구현 필요</td><td className="p-2">매우 어려움</td></tr>
            <tr className="border-b"><td className="p-2 font-semibold">구현 난이도</td><td className="p-2">쉬움</td><td className="p-2">보통</td><td className="p-2">어려움</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
