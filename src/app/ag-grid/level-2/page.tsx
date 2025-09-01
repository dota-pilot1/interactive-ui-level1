
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type ConsultantStatus = 'online' | 'busy' | 'away' | 'offline' | 'break';

const statusConfig = {
  online: { label: '온라인', color: 'bg-green-500', textColor: 'text-green-700' },
  busy: { label: '바쁨', color: 'bg-red-500', textColor: 'text-red-700' },
  away: { label: '자리비움', color: 'bg-yellow-500', textColor: 'text-yellow-700' },
  offline: { label: '오프라인', color: 'bg-gray-500', textColor: 'text-gray-700' },
  break: { label: '휴식', color: 'bg-blue-500', textColor: 'text-blue-700' },
};

export default function Page() {
  const [consultantStatus, setConsultantStatus] = useState<ConsultantStatus>('online');
  const currentConfig = statusConfig[consultantStatus];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">AG Grid - Level 2</h1>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">상담사 상태</h2>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${currentConfig.color}`}></div>
              <span className={`font-medium ${currentConfig.textColor}`}>
                {currentConfig.label}
              </span>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  상태 변경
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(statusConfig).map(([status, config]) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => setConsultantStatus(status as ConsultantStatus)}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
                    <span>{config.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          현재 시간: {new Date().toLocaleString('ko-KR')}
        </div>
      </div>
    </div>
  );
}
