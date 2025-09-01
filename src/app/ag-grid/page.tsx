"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Grid, Zap, Filter, BarChart } from "lucide-react";
import Link from "next/link";

export default function AgGridPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            AG Grid
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            엔터프라이즈급 고성능 데이터 그리드. 대용량 데이터를 빠르고 효율적으로 표시하고 조작하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <Grid className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">고성능</h3>
            <p className="text-gray-600">수백만 행의 데이터를 부드럽게 렌더링하는 가상화 기능</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <Filter className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">풍부한 기능</h3>
            <p className="text-gray-600">정렬, 필터링, 그룹화, 피벗팅 등 모든 그리드 기능 제공</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <BarChart className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">확장성</h3>
            <p className="text-gray-600">커스텀 셀 렌더러, 에디터, 필터 등으로 무한 확장</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📊 핵심 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Row Virtualization</h4>
              <p className="text-gray-600 text-sm">대용량 데이터셋을 메모리 효율적으로 렌더링</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Cell Editing</h4>
              <p className="text-gray-600 text-sm">인라인 셀 편집과 다양한 에디터 타입</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Tree Data</h4>
              <p className="text-gray-600 text-sm">계층형 데이터 표시 및 그룹화</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">• Export/Import</h4>
              <p className="text-gray-600 text-sm">Excel, CSV 등 다양한 형식으로 데이터 처리</p>
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
            <BookOpen className="mr-3 text-green-600" />
            참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.ag-grid.com/react-data-grid/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">React 공식 문서</h4>
                <p className="text-gray-600 text-sm">AG Grid React 컴포넌트 가이드</p>
              </div>
            </a>
            
            <a
              href="https://github.com/ag-grid/ag-grid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Repository</h4>
                <p className="text-gray-600 text-sm">오픈 소스 코드 및 커뮤니티</p>
              </div>
            </a>

            <a
              href="https://www.ag-grid.com/example/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">라이브 예제</h4>
                <p className="text-gray-600 text-sm">다양한 기능별 예제와 데모</p>
              </div>
            </a>

            <a
              href="https://blog.ag-grid.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">공식 블로그</h4>
                <p className="text-gray-600 text-sm">최신 기능 소개 및 사용법</p>
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
                href={`/ag-grid/level-${level}`}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Level {level}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-gray-600">
            <p>기본 그리드부터 엔터프라이즈급 데이터 분석 도구까지!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}