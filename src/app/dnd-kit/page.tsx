
"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code, Zap, MousePointer, Layers } from "lucide-react";
import Link from "next/link";

export default function DndKitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            dnd kit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            React를 위한 현대적이고 접근성이 뛰어난 드래그 앤 드롭 툴킷. 다양한 드래그 앤 드롭 패턴을 쉽게 구현하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <MousePointer className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">접근성 우선</h3>
            <p className="text-gray-600">키보드 네비게이션과 스크린 리더 지원으로 모든 사용자가 접근 가능</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibent text-gray-800 mb-2">모듈러 설계</h3>
            <p className="text-gray-600">필요한 기능만 선택적으로 사용할 수 있는 플러그인 아키텍처</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <Layers className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">다양한 패턴</h3>
            <p className="text-gray-600">정렬 가능한 목록, 다중 컨테이너, 가상화 등 다양한 사용 사례 지원</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛠️ 핵심 패키지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• @dnd-kit/core</h4>
              <p className="text-gray-600 text-sm">드래그 앤 드롭 기능의 핵심 API와 컴포넌트</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• @dnd-kit/sortable</h4>
              <p className="text-gray-600 text-sm">정렬 가능한 목록과 그리드 구현</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• @dnd-kit/utilities</h4>
              <p className="text-gray-600 text-sm">CSS 변환과 정렬 알고리즘 등 유용한 유틸리티</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• @dnd-kit/modifiers</h4>
              <p className="text-gray-600 text-sm">드래그 동작을 수정하는 다양한 모디파이어</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <BookOpen className="mr-3 text-blue-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://dndkit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 문서</h4>
                <p className="text-gray-600 text-sm">dnd kit 공식 가이드 및 API 문서</p>
              </div>
            </a>
            
            <a
              href="https://github.com/clauderic/dnd-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">소스 코드 및 이슈 트래킹</p>
              </div>
            </a>

            <a
              href="https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Storybook 예제</h4>
                <p className="text-gray-600 text-sm">실제 동작하는 컴포넌트 예제 모음</p>
              </div>
            </a>

            <a
              href="https://dndkit.com/presets/sortable"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Sortable 프리셋</h4>
                <p className="text-gray-600 text-sm">정렬 가능한 리스트 구현 가이드</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🎯 학습 로드맵</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
              <Link
                key={level}
                href={`/dnd-kit/level-${level}`}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기초 드래그 앤 드롭부터 복잡한 정렬 시스템까지 마스터하세요!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
