"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Edit, Layers, Zap, FileText } from "lucide-react";
import Link from "next/link";

export default function LexicalEditorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Lexical Editor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meta에서 개발한 확장 가능한 텍스트 에디터 프레임워크. 현대적이고 접근성이 뛰어난 리치 텍스트 에디터를 구축하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <Edit className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">확장성</h3>
            <p className="text-gray-600">플러그인 아키텍처로 필요한 기능만 선택적으로 구성</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <Zap className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">고성능</h3>
            <p className="text-gray-600">가상 DOM 최적화와 효율적인 상태 관리</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <FileText className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">접근성</h3>
            <p className="text-gray-600">ARIA 표준 준수와 키보드 네비게이션 완벽 지원</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">✨ 핵심 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Rich Text Editing</h4>
              <p className="text-gray-600 text-sm">볼드, 이탤릭, 링크 등 다양한 텍스트 포맷팅</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Collaborative Editing</h4>
              <p className="text-gray-600 text-sm">실시간 다중 사용자 편집 지원</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Custom Nodes</h4>
              <p className="text-gray-600 text-sm">이미지, 표, 코드 블록 등 커스텀 노드 생성</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Undo/Redo</h4>
              <p className="text-gray-600 text-sm">히스토리 관리와 실행 취소/다시 실행</p>
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
            <BookOpen className="mr-3 text-indigo-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://lexical.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 문서</h4>
                <p className="text-gray-600 text-sm">Lexical 공식 가이드 및 API 문서</p>
              </div>
            </a>
            
            <a
              href="https://github.com/facebook/lexical"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">오픈 소스 코드 및 커뮤니티</p>
              </div>
            </a>

            <a
              href="https://playground.lexical.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">플레이그라운드</h4>
                <p className="text-gray-600 text-sm">실시간으로 기능을 테스트해볼 수 있는 데모</p>
              </div>
            </a>

            <a
              href="https://lexical.dev/docs/react/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">React 통합 가이드</h4>
                <p className="text-gray-600 text-sm">React 프로젝트에서 Lexical 사용하기</p>
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
                href={`/lexical-editor/level-${level}`}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기본 텍스트 에디터부터 고급 리치 텍스트 편집 기능까지!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}