"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Layout, Zap, Grid, Move } from "lucide-react";
import Link from "next/link";

export default function DockviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Dockview
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            현대적인 도킹 레이아웃 시스템. IDE와 같은 복잡한 레이아웃을 쉽게 구현하고 사용자가 자유롭게 조작할 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
            <Layout className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">유연한 레이아웃</h3>
            <p className="text-gray-600">탭, 스플리터, 도킹 등 다양한 레이아웃 패턴 지원</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
            <Move className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">드래그 & 드롭</h3>
            <p className="text-gray-600">직관적인 드래그 앤 드롭으로 패널 재배치 가능</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
            <Grid className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">상태 관리</h3>
            <p className="text-gray-600">레이아웃 상태 저장 및 복원 기능</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-teal-100 to-cyan-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🏗️ 핵심 컴포넌트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• DockviewComponent</h4>
              <p className="text-gray-600 text-sm">메인 도킹 컨테이너 컴포넌트</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• GridviewComponent</h4>
              <p className="text-gray-600 text-sm">그리드 기반 레이아웃 컴포넌트</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• SplitviewComponent</h4>
              <p className="text-gray-600 text-sm">분할 가능한 패널 컴포넌트</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• PaneviewComponent</h4>
              <p className="text-gray-600 text-sm">접이식 사이드바 패널</p>
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
            <BookOpen className="mr-3 text-teal-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://dockview.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:from-teal-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 문서</h4>
                <p className="text-gray-600 text-sm">Dockview 공식 가이드 및 API 문서</p>
              </div>
            </a>
            
            <a
              href="https://github.com/mathuo/dockview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:from-teal-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">오픈 소스 코드 및 이슈 트래킹</p>
              </div>
            </a>

            <a
              href="https://dockview.dev/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:from-teal-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">라이브 데모</h4>
                <p className="text-gray-600 text-sm">인터랙티브 데모와 예제</p>
              </div>
            </a>

            <a
              href="https://dockview.dev/docs/react"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl hover:from-teal-100 hover:to-cyan-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-teal-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">React 가이드</h4>
                <p className="text-gray-600 text-sm">React 프로젝트에서 Dockview 사용하기</p>
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
                href={`/dockview/level-${level}`}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기본 패널 레이아웃부터 복합 IDE 환경까지!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}