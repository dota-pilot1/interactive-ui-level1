
"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code, Zap, Star, Users } from "lucide-react";
import Link from "next/link";

export default function FramerMotionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Framer Motion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            React를 위한 생산적인 모션 라이브러리. 선언적 API로 복잡한 애니메이션을 간단하게 구현하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">성능 최적화</h3>
            <p className="text-gray-600">60fps 애니메이션과 하드웨어 가속을 통한 부드러운 사용자 경험</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <Code className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">선언적 API</h3>
            <p className="text-gray-600">직관적이고 읽기 쉬운 코드로 복잡한 애니메이션 시퀀스 구현</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <Star className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">제스처 지원</h3>
            <p className="text-gray-600">드래그, 호버, 탭 등 다양한 사용자 상호작용 애니메이션</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🚀 주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Layout Animations</h4>
              <p className="text-gray-600 text-sm">컴포넌트의 레이아웃 변화를 자동으로 애니메이션화</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Shared Layout Animations</h4>
              <p className="text-gray-600 text-sm">컴포넌트 간 매끄러운 전환 효과</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• SVG Path Drawing</h4>
              <p className="text-gray-600 text-sm">SVG 패스를 따라 그리는 애니메이션</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Physics-based Springs</h4>
              <p className="text-gray-600 text-sm">물리 기반의 자연스러운 스프링 애니메이션</p>
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
            <BookOpen className="mr-3 text-purple-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 문서</h4>
                <p className="text-gray-600 text-sm">Framer Motion 공식 가이드 및 API 문서</p>
              </div>
            </a>
            
            <a
              href="https://github.com/framer/motion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">소스 코드 및 이슈 트래킹</p>
              </div>
            </a>

            <a
              href="https://www.framer.com/motion/examples/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">예제 모음</h4>
                <p className="text-gray-600 text-sm">다양한 애니메이션 예제와 코드</p>
              </div>
            </a>

            <a
              href="https://motion.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Motion Dev</h4>
                <p className="text-gray-600 text-sm">새로운 Motion 라이브러리 문서</p>
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
                href={`/framer-motion/level-${level}`}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기초 개념부터 고급 기법까지 단계별로 학습하세요!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
