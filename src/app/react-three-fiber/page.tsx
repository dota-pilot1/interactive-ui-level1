"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Zap, Globe, Box, Layers } from "lucide-react";
import Link from "next/link";

export default function ReactThreeFiberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            React Three Fiber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three.js를 React와 완벽하게 통합한 렌더러. 선언적 방식으로 3D 그래픽과 애니메이션을 구현하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
            <Box className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3D 렌더링</h3>
            <p className="text-gray-600">Three.js의 모든 기능을 React 컴포넌트로 사용</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
            <Zap className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">높은 성능</h3>
            <p className="text-gray-600">WebGL 기반의 하드웨어 가속 렌더링</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
            <Layers className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">생태계</h3>
            <p className="text-gray-600">풍부한 라이브러리와 커뮤니티 지원</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎨 주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Declarative API</h4>
              <p className="text-gray-600 text-sm">JSX로 3D 장면과 객체를 선언적으로 구성</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Animation Support</h4>
              <p className="text-gray-600 text-sm">useFrame Hook을 통한 60fps 애니메이션</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Post Processing</h4>
              <p className="text-gray-600 text-sm">Bloom, DOF, SSAO 등 다양한 포스트 프로세싱</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Physics Integration</h4>
              <p className="text-gray-600 text-sm">Cannon.js, Rapier 등 물리 엔진 통합</p>
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
            <BookOpen className="mr-3 text-orange-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://docs.pmnd.rs/react-three-fiber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-orange-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 문서</h4>
                <p className="text-gray-600 text-sm">React Three Fiber 공식 가이드 및 API</p>
              </div>
            </a>
            
            <a
              href="https://github.com/pmndrs/react-three-fiber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-orange-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">소스 코드 및 커뮤니티</p>
              </div>
            </a>

            <a
              href="https://threejs.org/examples/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-orange-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">Three.js 예제</h4>
                <p className="text-gray-600 text-sm">원본 Three.js 예제와 데모</p>
              </div>
            </a>

            <a
              href="https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-orange-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">애니메이션 튜토리얼</h4>
                <p className="text-gray-600 text-sm">기본 애니메이션 구현 방법</p>
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
                href={`/react-three-fiber/level-${level}`}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기본 3D 렌더링부터 복잡한 인터랙티브 3D 환경까지!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}