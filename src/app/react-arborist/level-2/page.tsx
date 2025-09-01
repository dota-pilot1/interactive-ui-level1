"use client";

import React, { useState, useEffect } from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import { 
  Users, 
  User, 
  CheckCircle2, 
  Clock, 
  XCircle,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
  Shield
} from "lucide-react";

// 상담 상태 타입
type ConsultantStatus = "available" | "busy" | "offline";

interface Consultant {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  status: ConsultantStatus;
  experience: number;
  specialties: string[];
  lastActive: string;
}

interface Team {
  id: string;
  name: string;
  consultants: Consultant[];
}

interface Group {
  id: string;
  name: string;
  teams: Team[];
}

interface Company {
  id: string;
  name: string;
  location: string;
  groups: Group[];
}

interface TreeNode {
  id: string;
  name: string;
  type: 'company' | 'group' | 'team' | 'consultant';
  children?: TreeNode[];
  data?: Company | Group | Team | Consultant;
}

// 더미 데이터
const getDummyData = (): Company[] => {
  return [
    {
      id: "company-1",
      name: "ABC 콜센터",
      location: "서울",
      groups: [
        {
          id: "group-1",
          name: "인바운드그룹",
          teams: [
            {
              id: "team-1",
              name: "일반상담팀",
              consultants: [
                {
                  id: "consultant-1",
                  name: "김상담",
                  email: "kim@company.com",
                  phone: "02-1234-5678",
                  department: "일반상담팀",
                  location: "서울 본사",
                  status: "available" as ConsultantStatus,
                  experience: 3,
                  specialties: ["일반문의", "계좌조회"],
                  lastActive: "2분 전"
                },
                {
                  id: "consultant-2", 
                  name: "이도움",
                  email: "lee@company.com",
                  phone: "02-2345-6789",
                  department: "일반상담팀",
                  location: "서울 본사",
                  status: "busy" as ConsultantStatus,
                  experience: 5,
                  specialties: ["기술지원", "장애처리"],
                  lastActive: "지금"
                }
              ]
            },
            {
              id: "team-2",
              name: "VIP상담팀",
              consultants: [
                {
                  id: "consultant-3",
                  name: "박전문",
                  email: "park@company.com", 
                  phone: "02-3456-7890",
                  department: "VIP상담팀",
                  location: "서울 본사",
                  status: "available" as ConsultantStatus,
                  experience: 7,
                  specialties: ["VIP고객", "프리미엄서비스"],
                  lastActive: "1분 전"
                }
              ]
            }
          ]
        },
        {
          id: "group-2",
          name: "아웃바운드그룹",
          teams: [
            {
              id: "team-3",
              name: "텔레세일즈팀",
              consultants: [
                {
                  id: "consultant-4",
                  name: "최영업",
                  email: "choi@company.com",
                  phone: "02-4567-8901", 
                  department: "텔레세일즈팀",
                  location: "서울 본사",
                  status: "busy" as ConsultantStatus,
                  experience: 4,
                  specialties: ["상품판매", "마케팅"],
                  lastActive: "지금"
                },
                {
                  id: "consultant-5",
                  name: "정세일즈",
                  email: "jung@company.com",
                  phone: "02-5678-9012",
                  department: "텔레세일즈팀", 
                  location: "서울 본사",
                  status: "offline" as ConsultantStatus,
                  experience: 2,
                  specialties: ["신규고객", "상품안내"],
                  lastActive: "15분 전"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "company-2",
      name: "부산 지사",
      location: "부산",
      groups: [
        {
          id: "group-3",
          name: "지역서비스그룹",
          teams: [
            {
              id: "team-4",
              name: "지역상담팀",
              consultants: [
                {
                  id: "consultant-6",
                  name: "한부산",
                  email: "han@company.com",
                  phone: "051-1234-5678",
                  department: "지역상담팀",
                  location: "부산 지사",
                  status: "available" as ConsultantStatus,
                  experience: 6,
                  specialties: ["지역특화", "방언상담"],
                  lastActive: "3분 전"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
};

// 트리 데이터 변환
const convertToTreeData = (companies: Company[]): TreeNode[] => {
  return companies.map(company => ({
    id: company.id,
    name: company.name,
    type: 'company' as const,
    data: company,
    children: company.groups.map(group => ({
      id: group.id,
      name: group.name,
      type: 'group' as const,
      data: group,
      children: group.teams.map(team => ({
        id: team.id,
        name: team.name,
        type: 'team' as const,
        data: team,
        children: team.consultants.map(consultant => ({
          id: consultant.id,
          name: consultant.name,
          type: 'consultant' as const,
          data: consultant
        }))
      }))
    }))
  }));
};

const getStatusIcon = (status: ConsultantStatus) => {
  switch (status) {
    case "available":
      return <CheckCircle2 size={16} className="text-green-500" />;
    case "busy":
      return <Clock size={16} className="text-orange-500" />;
    case "offline":
      return <XCircle size={16} className="text-red-500" />;
  }
};

const getStatusText = (status: ConsultantStatus) => {
  switch (status) {
    case "available":
      return "상담 가능";
    case "busy":
      return "상담 중";
    case "offline":
      return "오프라인";
  }
};

const getStatusColor = (status: ConsultantStatus) => {
  switch (status) {
    case "available":
      return "text-green-600 bg-green-50 border-green-200";
    case "busy":
      return "text-orange-600 bg-orange-50 border-orange-200";
    case "offline":
      return "text-red-600 bg-red-50 border-red-200";
  }
};

interface TreeNodeProps extends NodeRendererProps<TreeNode> {
  onConsultantSelect: (consultant: Consultant) => void;
}

function TreeNode({ node, style, dragHandle, onConsultantSelect }: TreeNodeProps) {
  const isOpen = node.isOpen;
  
  // Company 레벨 (회사/조직)
  if (node.data.type === 'company') {
    const company = node.data.data as Company;
    const totalConsultants = company.groups.reduce((acc, group) => 
      acc + group.teams.reduce((teamAcc, team) => teamAcc + team.consultants.length, 0), 0);
    const availableConsultants = company.groups.reduce((acc, group) => 
      acc + group.teams.reduce((teamAcc, team) => 
        teamAcc + team.consultants.filter(c => c.status === 'available').length, 0), 0);
    
    return (
      <div 
        ref={dragHandle}
        style={style}
        className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50 rounded-md p-2"
        onClick={() => node.toggle()}
      >
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <Building2 size={16} className="text-purple-600" />
        <span className="font-bold text-slate-800">{company.name}</span>
        <span className="text-xs text-slate-500 bg-purple-100 px-2 py-1 rounded-full">
          {company.location}
        </span>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
          {availableConsultants}/{totalConsultants}
        </span>
      </div>
    );
  }
  
  // Group 레벨 (그룹 - 인바운드/아웃바운드 등)
  if (node.data.type === 'group') {
    const group = node.data.data as Group;
    const totalConsultants = group.teams.reduce((acc, team) => acc + team.consultants.length, 0);
    const availableCount = group.teams.reduce((acc, team) => 
      acc + team.consultants.filter(c => c.status === 'available').length, 0);
    const busyCount = group.teams.reduce((acc, team) => 
      acc + team.consultants.filter(c => c.status === 'busy').length, 0);
    
    return (
      <div 
        ref={dragHandle}
        style={style}
        className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50 rounded-md p-2 ml-4"
        onClick={() => node.toggle()}
      >
        {isOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        <Shield size={15} className="text-indigo-600" />
        <span className="font-semibold text-slate-800">{group.name}</span>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          {totalConsultants}명
        </span>
        <div className="flex items-center gap-1">
          <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">
            {availableCount}
          </span>
          <span className="text-xs text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
            {busyCount}
          </span>
        </div>
      </div>
    );
  }
  
  // Team 레벨 (팀)
  if (node.data.type === 'team') {
    const team = node.data.data as Team;
    const availableCount = team.consultants.filter(c => c.status === 'available').length;
    const busyCount = team.consultants.filter(c => c.status === 'busy').length;
    const offlineCount = team.consultants.filter(c => c.status === 'offline').length;
    
    return (
      <div 
        ref={dragHandle}
        style={style}
        className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50 rounded-md p-2 ml-8"
        onClick={() => node.toggle()}
      >
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        <Users size={14} className="text-blue-600" />
        <span className="font-medium text-slate-700">{team.name}</span>
        <div className="flex items-center gap-1">
          <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded text-[10px]">
            🟢 {availableCount}
          </span>
          <span className="text-xs text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded text-[10px]">
            🟠 {busyCount}
          </span>
          {offlineCount > 0 && (
            <span className="text-xs text-red-600 bg-red-100 px-1.5 py-0.5 rounded text-[10px]">
              ⚫ {offlineCount}
            </span>
          )}
        </div>
      </div>
    );
  } 
  
  // Consultant 레벨 (상담사)
  else {
    const consultant = node.data.data as Consultant;
    
    return (
      <div 
        ref={dragHandle}
        style={style}
        className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 rounded-md p-2 ml-12 border-l-2 border-blue-100"
        onClick={() => onConsultantSelect(consultant)}
      >
        <User size={12} className="text-slate-600" />
        <span className="text-sm text-blue-700 font-medium">{consultant.name}</span>
        <div className="flex items-center space-x-1">
          {getStatusIcon(consultant.status)}
        </div>
      </div>
    );
  }
}

export default function ReactArboristLevel2() {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 더미 데이터 로드 (API 대신)
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        const data = getDummyData();
        setCompanies(data);
        setLoading(false);
      }, 500); // 로딩 효과를 위한 딜레이
    };

    loadData();
  }, []);

  const treeData = convertToTreeData(companies);

  const handleConsultantSelect = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">React Arborist - Level 2</h1>
        <p className="text-slate-600">
          4계층 구조: 회사(Company) &gt; 그룹(Group) &gt; 팀(Team) &gt; 상담사(Consultant)
        </p>
      </div>

      {/* 상담사 상태 종류 표시 */}
      <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">상담사 상태 종류</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={16} className="text-green-500" />
            <span className="text-sm font-medium">상담 가능 (Available)</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-orange-500" />
            <span className="text-sm font-medium">상담 중 (Busy)</span>
          </div>
          <div className="flex items-center space-x-2">
            <XCircle size={16} className="text-red-500" />
            <span className="text-sm font-medium">오프라인 (Offline)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* 좌측: 트리 메뉴 */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <Building2 size={20} />
              <span>조직 구조</span>
            </h2>
          </div>
          
          <div className="p-4">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-slate-500">데이터를 불러오는 중...</div>
              </div>
            ) : (
              <Tree
                data={treeData}
                openByDefault={true}
                width="100%"
                height={500}
                indent={24}
                rowHeight={40}
              >
                {(props) => <TreeNode {...props} onConsultantSelect={handleConsultantSelect} />}
              </Tree>
            )}
          </div>
        </div>

        {/* 우측: 상담사 상세 정보 */}
        <div className="lg:col-span-2 bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">상담사 정보</h2>
          </div>
          
          <div className="p-4">
            {selectedConsultant ? (
              <div className="space-y-4">
                {/* 기본 정보 */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedConsultant.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {selectedConsultant.name}
                    </h3>
                    <p className="text-slate-600">{selectedConsultant.department}</p>
                    <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(selectedConsultant.status)}`}>
                      {getStatusIcon(selectedConsultant.status)}
                      <span>{getStatusText(selectedConsultant.status)}</span>
                    </div>
                  </div>
                </div>

                {/* 연락처 정보 */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail size={16} className="text-slate-500" />
                    <span className="text-slate-600">이메일:</span>
                    <span className="text-slate-900">{selectedConsultant.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone size={16} className="text-slate-500" />
                    <span className="text-slate-600">전화:</span>
                    <span className="text-slate-900">{selectedConsultant.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin size={16} className="text-slate-500" />
                    <span className="text-slate-600">위치:</span>
                    <span className="text-slate-900">{selectedConsultant.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar size={16} className="text-slate-500" />
                    <span className="text-slate-600">마지막 활동:</span>
                    <span className="text-slate-900">{selectedConsultant.lastActive}</span>
                  </div>
                </div>

                {/* 전문 분야 */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">전문 분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultant.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 경력 */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">경력</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${Math.min(selectedConsultant.experience * 10, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600 whitespace-nowrap">
                      {selectedConsultant.experience}년
                    </span>
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="pt-4 border-t">
                  <div className="flex space-x-2">
                    <button 
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={selectedConsultant.status === 'offline'}
                    >
                      상담 요청
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      메모
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-12">
                <User size={48} className="mx-auto mb-4 text-slate-300" />
                <p>상담사를 선택하면 상세 정보가 표시됩니다</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}