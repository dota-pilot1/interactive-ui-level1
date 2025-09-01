import React from "react";
import { DocCodeBlock } from "@/components/docs/CodeBlock";

export default function ReactArboristLevel2FeaturesPage() {
  const basicTreeCode = `// Level 1: 기본 트리 (정적 데이터, 단순 구조)
export default function ReactArboristLevel1() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Tree<Item>
      data={data}
      openByDefault  // 모든 노드 기본 열림
      indent={20}
      rowHeight={28}
      onSelect={(ids) => setSelected(ids as string[])}
    >
      {(props) => {
        const { node, style, dragHandle } = props as any;
        return (
          <div style={style} ref={dragHandle} className="flex items-center gap-2">
            <span>{node.isInternal ? (node.isOpen ? "📂" : "📁") : "📄"}</span>
            <span className="select-none">{node.data.name}</span>
          </div>
        );
      }}
    </Tree>
  );
}`;

  const advancedTreeCode = `// Level 2: 고급 트리 (복잡한 데이터, 다층 구조, 상태 관리)
type ConsultantStatus = "available" | "busy" | "offline";

interface Consultant {
  id: string;
  name: string;
  email: string;
  status: ConsultantStatus;
  experience: number;
  // ... 더 많은 필드들
}

// 4계층 구조: Company > Group > Team > Consultant
interface TreeNode {
  id: string;
  name: string;
  type: 'company' | 'group' | 'team' | 'consultant';
  children?: TreeNode[];
  data?: Company | Group | Team | Consultant;
}

export default function ReactArboristLevel2() {
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 트리 영역 */}
      <div>
        <Tree
          data={treeData}
          openByDefault={true}  // 초기 열림 상태
          width="100%"
          height={500}
          indent={24}  // 더 큰 들여쓰기
          rowHeight={40}  // 더 큰 행 높이
        >
          {(props) => <TreeNode {...props} onConsultantSelect={handleConsultantSelect} />}
        </Tree>
      </div>
      
      {/* 상세 정보 영역 */}
      <div className="lg:col-span-2">
        {selectedConsultant && (
          <ConsultantDetailView consultant={selectedConsultant} />
        )}
      </div>
    </div>
  );
}`;

  const dynamicNodeCode = `// Level 2의 동적 노드 렌더링
function TreeNode({ node, style, dragHandle, onConsultantSelect }: any) {
  const isOpen = node.isOpen;
  
  // Company 레벨
  if (node.data.type === 'company') {
    const company = node.data.data as Company;
    const totalConsultants = calculateTotalConsultants(company);
    const availableConsultants = calculateAvailableConsultants(company);
    
    return (
      <div 
        ref={dragHandle}
        style={style}
        className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50"
        onClick={() => node.toggle()}  // 확장/축소 토글
      >
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <Building2 size={16} className="text-purple-600" />
        <span className="font-bold">{company.name}</span>
        <span className="text-xs bg-purple-100 px-2 py-1 rounded-full">
          {company.location}
        </span>
        <span className="text-xs bg-slate-100 px-2 py-1 rounded-full">
          {availableConsultants}/{totalConsultants}
        </span>
      </div>
    );
  }
  
  // Group 레벨
  if (node.data.type === 'group') {
    // 그룹별 통계 표시
    const group = node.data.data as Group;
    const availableCount = calculateGroupStats(group, 'available');
    const busyCount = calculateGroupStats(group, 'busy');
    
    return (
      <div className="ml-4">  {/* 계층별 들여쓰기 */}
        {/* 상태별 통계 표시 */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-green-600 bg-green-100">🟢 {availableCount}</span>
          <span className="text-xs text-orange-600 bg-orange-100">🟠 {busyCount}</span>
        </div>
      </div>
    );
  }
  
  // Team 레벨  
  if (node.data.type === 'team') {
    // 팀별 실시간 상태 표시
  }
  
  // Consultant 레벨
  else {
    const consultant = node.data.data as Consultant;
    return (
      <div 
        className="ml-12 cursor-pointer hover:bg-blue-50"
        onClick={() => onConsultantSelect(consultant)}  // 선택 이벤트
      >
        <User size={12} />
        <span>{consultant.name}</span>
        {getStatusIcon(consultant.status)}  // 실시간 상태 아이콘
      </div>
    );
  }
}`;

  const statusManagementCode = `// Level 2의 상태 관리 시스템
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
    case "available": return "상담 가능";
    case "busy": return "상담 중";
    case "offline": return "오프라인";
  }
};

// 상태별 통계 계산
const calculateGroupStats = (group: Group, status: ConsultantStatus) => {
  return group.teams.reduce((acc, team) => 
    acc + team.consultants.filter(c => c.status === status).length, 0
  );
};`;

  const interactionCode = `// Level 2의 고급 인터랙션
const handleConsultantSelect = (consultant: Consultant) => {
  setSelectedConsultant(consultant);
  // 추가 로직: 히스토리, 로깅 등
};

// 동적 데이터 로딩
useEffect(() => {
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {  // API 호출 시뮬레이션
      const data = getDummyData();
      setCompanies(data);
      setLoading(false);
    }, 500);
  };
  loadData();
}, []);

// 트리 데이터 변환
const convertToTreeData = (companies: Company[]): TreeNode[] => {
  return companies.map(company => ({
    id: company.id,
    name: company.name,
    type: 'company' as const,
    data: company,
    children: company.groups.map(group => ({
      // 재귀적 구조 변환
      id: group.id,
      name: group.name,
      type: 'group' as const,
      data: group,
      children: group.teams.map(/* ... */)
    }))
  }));
};`;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>React Arborist Level 2 - 확장 기능</h1>
      <p className="text-lg text-muted-foreground">
        Level 1의 기본 트리에서 Level 2로 확장된 고급 기능들을 상세히 설명합니다.
      </p>

      <h2>Level 1 vs Level 2 비교</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">Level 1 (기본)</h3>
          <ul className="text-sm space-y-1">
            <li>• 정적 데이터 구조</li>
            <li>• 단순한 파일 탐색기 형태</li>
            <li>• 기본 확장/축소 기능</li>
            <li>• 선택 기능만 있음</li>
            <li>• 단일 트리 영역</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-bold text-green-900 mb-2">Level 2 (고급)</h3>
          <ul className="text-sm space-y-1">
            <li>• 4계층 복잡한 데이터 구조</li>
            <li>• 실시간 상태 관리</li>
            <li>• 동적 통계 표시</li>
            <li>• 상세 정보 패널</li>
            <li>• 분할된 UI 레이아웃</li>
          </ul>
        </div>
      </div>

      <h2>1. 확장된 데이터 구조</h2>
      <p>Level 2에서는 4계층의 복잡한 조직 구조를 표현합니다:</p>
      <ul>
        <li><strong>Company (회사):</strong> 최상위 조직 단위</li>
        <li><strong>Group (그룹):</strong> 인바운드/아웃바운드 등 업무 그룹</li>
        <li><strong>Team (팀):</strong> 실제 업무 팀</li>
        <li><strong>Consultant (상담사):</strong> 개별 직원</li>
      </ul>

      <h2>2. 기본 트리 (Level 1)</h2>
      <DocCodeBlock code={basicTreeCode} language="typescript" accent="blue" />

      <h2>3. 고급 트리 (Level 2)</h2>
      <DocCodeBlock code={advancedTreeCode} language="typescript" accent="green" />

      <h2>4. 동적 노드 렌더링</h2>
      <p>각 계층별로 다른 렌더링과 인터랙션을 제공합니다:</p>
      <DocCodeBlock code={dynamicNodeCode} language="typescript" accent="purple" />

      <h2>5. 실시간 상태 관리</h2>
      <p>상담사의 상태를 실시간으로 표시하고 관리합니다:</p>
      <DocCodeBlock code={statusManagementCode} language="typescript" accent="orange" />

      <h2>6. 고급 인터랙션</h2>
      <p>선택, 데이터 로딩, 상태 변경 등 복합적인 기능들:</p>
      <DocCodeBlock code={interactionCode} language="typescript" accent="red" />

      <h2>주요 확장 기능</h2>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-blue-900 mb-2">UI/UX 확장</h4>
            <ul className="text-sm space-y-1">
              <li>🎨 계층별 다른 아이콘과 색상</li>
              <li>📊 실시간 통계 배지</li>
              <li>🖱️ 호버 효과와 상태 표시</li>
              <li>📱 반응형 그리드 레이아웃</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-900 mb-2">기능적 확장</h4>
            <ul className="text-sm space-y-1">
              <li>🔄 동적 데이터 로딩</li>
              <li>🎯 선택된 항목 상세 보기</li>
              <li>📈 상태별 집계 및 통계</li>
              <li>🔀 복잡한 데이터 구조 변환</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>확장/축소 기능의 진화</h2>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-bold mb-2">Level 1</h4>
        <p className="text-sm mb-3">• <code>openByDefault</code> 속성으로 모든 노드가 열림</p>
        
        <h4 className="font-bold mb-2">Level 2</h4>
        <ul className="text-sm space-y-1">
          <li>• <code>node.toggle()</code>을 통한 개별 노드 제어</li>
          <li>• <code>node.isOpen</code> 상태 기반 아이콘 변경</li>
          <li>• 계층별 선택적 확장/축소</li>
          <li>• 클릭 이벤트 분기 처리 (확장 vs 선택)</li>
        </ul>
      </div>

      <h2>다음 단계: Level 3 계획</h2>
      <p>Level 3에서는 다음과 같은 기능들을 추가할 예정입니다:</p>
      <ul>
        <li>🖱️ <strong>컨텍스트 메뉴:</strong> 우클릭으로 추가 액션</li>
        <li>🎯 <strong>드래그 앤 드롭:</strong> 노드 이동 및 재배치</li>
        <li>🔍 <strong>검색 및 필터링:</strong> 트리 내 검색</li>
        <li>⚡ <strong>실시간 업데이트:</strong> WebSocket 연동</li>
        <li>⌨️ <strong>키보드 네비게이션:</strong> 접근성 개선</li>
      </ul>

      <h2>관련 링크</h2>
      <ul>
        <li><a href="/react-arborist/level-1">Level 1 실행 예제</a></li>
        <li><a href="/react-arborist/level-2">Level 2 실행 예제</a></li>
        <li><a href="/docs/react-arborist/level-1-manual">Level 1 매뉴얼</a></li>
        <li><a href="/docs/react-arborist/level-2-manual">Level 2 매뉴얼</a></li>
      </ul>
    </div>
  );
}