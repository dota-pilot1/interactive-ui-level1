"use client";

import React from "react";

// 상담 상태 타입
type ConsultationStatus = "waiting" | "in-call" | "break" | "offline" | "after-call";

interface CurrentCall {
  callStartTime: string;
  customerName: string;
  customerPhone: string;
  callType: string;
  issue: string;
}

interface Consultant {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  status: ConsultationStatus;
  experience: number;
  specialties: string[];
  lastActive: string;
  employeeId: string;
  extension: string;
  shift: string;
  breakStartTime?: string;
  offlineReason?: string;
  currentCall?: CurrentCall;
  lastCall?: {
    customerName: string;
    customerPhone: string;
    callType: string;
    issue: string;
    callDuration: string;
    resolution: string;
  };
  todayStats?: {
    totalCalls: number;
    completedCalls: number;
    avgCallTime: string;
    satisfaction: number;
  };
  callHistory?: Array<{
    time: string;
    customer: string;
    duration: string;
    type: string;
    satisfaction: number;
  }>;
}

interface ConsultantDetailProps {
  consultant: Consultant;
  onBack: () => void;
}

export function ConsultantDetail({ consultant, onBack }: ConsultantDetailProps) {
  const getStatusInfo = (status: ConsultationStatus) => {
    switch (status) {
      case "waiting": return { 
        icon: "🟢", 
        text: "대기중", 
        color: "text-green-600", 
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
      case "in-call": return { 
        icon: "🔴", 
        text: "통화중", 
        color: "text-red-600", 
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      };
      case "after-call": return { 
        icon: "🟡", 
        text: "후처리", 
        color: "text-yellow-600", 
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      };
      case "break": return { 
        icon: "🟠", 
        text: "휴식중", 
        color: "text-orange-600", 
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
      };
      case "offline": return { 
        icon: "⚫", 
        text: "오프라인", 
        color: "text-gray-600", 
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200"
      };
    }
  };

  const statusInfo = getStatusInfo(consultant.status);
  const currentTime = new Date().toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="h-full flex flex-col">
      {/* PDS 스타일 헤더 */}
      <div className="bg-slate-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
          >
            <span>←</span>
            <span>조직도</span>
          </button>
          <div className="text-lg font-semibold">상담사 데스크톱</div>
        </div>
        <div className="text-sm opacity-75">
          현재시간: {currentTime}
        </div>
      </div>

      {/* 상담사 정보 헤더 */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold">{consultant.name}</h2>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bgColor} ${statusInfo.color} ${statusInfo.borderColor} border`}>
                <span>{statusInfo.icon}</span>
                <span>{statusInfo.text}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 flex gap-4">
              <span>사번: {consultant.employeeId}</span>
              <span>내선: {consultant.extension}</span>
              <span>근무: {consultant.shift}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 flex gap-4 p-4 bg-gray-50">
        {/* 좌측: 현재 상담 현황 */}
        <div className="flex-1 space-y-4">
          {/* 실시간 상담 현황 */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
              <h3 className="font-semibold text-gray-800">실시간 상담 현황</h3>
            </div>
            <div className="p-4">
              {consultant.status === "in-call" && consultant.currentCall && (
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-lg p-4`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">📞</span>
                    <span className="font-semibold text-lg">통화 진행중</span>
                    <div className="ml-auto text-sm text-gray-600">
                      시작: {consultant.currentCall.callStartTime}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">고객정보</div>
                      <div className="bg-white p-3 rounded border mt-1">
                        <div className="font-semibold">{consultant.currentCall.customerName}</div>
                        <div className="text-sm text-gray-600">{consultant.currentCall.customerPhone}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">상담유형</div>
                      <div className="bg-white p-3 rounded border mt-1">
                        <div className="font-semibold">{consultant.currentCall.callType}</div>
                        <div className="text-sm text-gray-600">{consultant.currentCall.issue}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                      통화종료
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      보류
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                      녹음듣기
                    </button>
                  </div>
                </div>
              )}

              {consultant.status === "after-call" && consultant.lastCall && (
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-lg p-4`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">📝</span>
                    <span className="font-semibold text-lg">후처리 작업</span>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">마지막 고객:</span>
                        <div className="font-semibold">{consultant.lastCall.customerName}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">통화시간:</span>
                        <div className="font-semibold">{consultant.lastCall.callDuration}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">처리내용</div>
                      <textarea 
                        className="w-full p-2 border rounded h-20 text-sm" 
                        placeholder="상담 내용을 기록하세요..."
                        defaultValue={consultant.lastCall.issue}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        후처리 완료
                      </button>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                        추가 작업 필요
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {consultant.status === "waiting" && (
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-lg p-4 text-center`}>
                  <div className="text-6xl mb-4">⏳</div>
                  <div className="text-lg font-semibold mb-2">고객 대기중</div>
                  <div className="text-gray-600 mb-4">다음 상담을 위해 준비하고 있습니다</div>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                    상담 가능
                  </button>
                </div>
              )}

              {consultant.status === "break" && (
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-lg p-4 text-center`}>
                  <div className="text-6xl mb-4">☕</div>
                  <div className="text-lg font-semibold mb-2">휴식시간</div>
                  <div className="text-gray-600 mb-4">
                    시작: {consultant.breakStartTime || "알 수 없음"}
                  </div>
                  <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
                    복귀하기
                  </button>
                </div>
              )}

              {consultant.status === "offline" && (
                <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} border rounded-lg p-4 text-center`}>
                  <div className="text-6xl mb-4">🚫</div>
                  <div className="text-lg font-semibold mb-2">오프라인</div>
                  <div className="text-gray-600 mb-4">
                    사유: {consultant.offlineReason || "알 수 없음"}
                  </div>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                    온라인 전환
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 빠른 액션 */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
              <h3 className="font-semibold text-gray-800">빠른 액션</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2">
                <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center">
                  <div className="text-2xl mb-1">📞</div>
                  <div className="text-xs">고객연결</div>
                </button>
                <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center">
                  <div className="text-2xl mb-1">💬</div>
                  <div className="text-xs">내부메신저</div>
                </button>
                <button className="p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-center">
                  <div className="text-2xl mb-1">📋</div>
                  <div className="text-xs">상담이력</div>
                </button>
                <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center">
                  <div className="text-2xl mb-1">📊</div>
                  <div className="text-xs">성과조회</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 우측: 통계 및 정보 */}
        <div className="w-80 space-y-4">
          {/* 오늘의 통계 */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
              <h3 className="font-semibold text-gray-800">오늘의 성과</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{consultant.todayStats?.totalCalls || 0}</div>
                  <div className="text-xs text-gray-600">총 상담</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{consultant.todayStats?.completedCalls || 0}</div>
                  <div className="text-xs text-gray-600">완료</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">{consultant.todayStats?.avgCallTime || 'N/A'}</div>
                  <div className="text-xs text-gray-600">평균통화</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{consultant.todayStats?.satisfaction || 0}</div>
                  <div className="text-xs text-gray-600">만족도</div>
                </div>
              </div>
            </div>
          </div>

          {/* 개인 정보 */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
              <h3 className="font-semibold text-gray-800">개인 정보</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">이메일:</span>
                <span className="font-mono text-blue-600 text-xs">{consultant.email}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">근무시간:</span>
                <span>{consultant.shift}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">내선번호:</span>
                <span className="font-mono">{consultant.extension}</span>
              </div>
            </div>
          </div>

          {/* 시스템 정보 */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg border-b">
              <h3 className="font-semibold text-gray-800">시스템</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>CRM 연결</span>
                  <span className="text-green-600">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>CTI 연결</span>
                  <span className="text-green-600">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>녹음 시스템</span>
                  <span className="text-green-600">●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}