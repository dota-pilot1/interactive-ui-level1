"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Code, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              슈퍼 생산성을 위한
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              UI 파일럿 프로젝트 <span className="text-blue-600">1000개 도전!</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            현대적이고 깔끔한 UI 컴포넌트들을 학습하고 실습할 수 있는 종합 플랫폼입니다. 
            Framer Motion, Three.js, AG Grid 등 최신 라이브러리들을 마스터하세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300">
              <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">인터랙티브 UI</h3>
              <p className="text-gray-600 text-sm">동적이고 매력적인 사용자 인터페이스 구현</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">체계적 학습</h3>
              <p className="text-gray-600 text-sm">Level 1부터 10까지 단계별 프로젝트</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-300">
              <Code className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">최신 기술</h3>
              <p className="text-gray-600 text-sm">React, Next.js, TypeScript 기반 모던 스택</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-300">
              <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">생산성 향상</h3>
              <p className="text-gray-600 text-sm">실무에 바로 적용 가능한 컴포넌트들</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              프로젝트 시작하기
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
            >
              샘플 컴포넌트 보기
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 목표</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">UI 컴포넌트 실습</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">실무 적용 가능</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600">생산성 향상</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
