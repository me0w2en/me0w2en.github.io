'use client';

import { useEffect, useState } from 'react';
import { ProjectModal, Project } from '@/components/ui/ProjectModal';

const projectRecords: Project[] = [
  {
    title: 'DFIR에 활용 가능한 Agentic AI 개발 및 sLLM Fine-tuning',
    period: '2025.09 - 2025.12',
    context: '디스크 이미지와 SIEM을 따로 분석한 뒤 결과를 사람이 다시 맞춰보는 작업은 시간이 오래 걸리고 누락이 생기기 쉽습니다. 이 과정을 줄이기 위해 6인 팀으로 DFIR 분석 에이전트를 개발했습니다.',
    role: '6인 팀 PM, 요구사항 및 일정 관리, 에이전트 개발, sLLM 학습 데이터 스키마 설계',
    actions: [
      'Agentic AI와 MCP를 연결해 Windows 아티팩트 추출, 디스크 이미지와 SIEM 교차 분석, 보고서 생성 흐름 개발',
      '보안 데이터를 외부 AI 서비스에 보내기 어려운 점을 고려해 로컬 sLLM을 선택하고 PEFT 학습 데이터 스키마 설계',
      '분석 에이전트가 기존 포렌식 도구를 호출할 수 있도록 MCP 연동 구조 개발',
      '모델 학습과 기존 도구 연계 중 어느 쪽에 집중할지 의견이 갈리자 두 방향을 2주간 구현해 결과를 비교하도록 제안',
    ],
    outcomes: [
      '포렌식 분석 경험자 4명이 참여한 내부 평가에서 수작업 기초 분석 대비 평균 분석 시간을 59% 단축',
      '분석 프로그램, MCP 서버 9종, 평가 벤치, 학습용 데이터셋 공개',
    ],
    learnings: [
      '포렌식 자동화는 모델의 답변 성능만으로 완성되지 않고, 어떤 도구로 증거를 수집했는지와 분석 과정이 다시 확인돼야 한다는 점을 배웠습니다.',
      '팀의 의견이 갈릴 때는 말로 설득하기보다 작은 시제품을 먼저 만들고 같은 기준으로 비교하는 편이 결정에 도움이 됐습니다.',
    ],
    tech: ['MCP', 'Python', 'PEFT', 'sLLM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/BoB-14th-B-gent/B-gent' },
      { label: "CISC-W'25 발표 포스터 · PDF", url: 'https://drive.google.com/file/d/19ZFqt3XaNkM3vR5WRKyri048lD5Z29nw/view?usp=drivesdk' },
    ],
  },
  {
    title: "사용자 행위 중심의 협업 툴 'JANDI' Artifact 분석",
    period: '2023.11 - 2024.01',
    context: '서비스 업데이트 뒤 선행 연구에 적힌 JANDI 아티팩트 경로가 실제 환경과 맞지 않아 저장 구조를 다시 확인해야 했습니다.',
    role: '패킷 및 로그 분석, 사용자 행위 실험 설계, 분석 결과 정리 및 시각화',
    actions: [
      '선행 연구의 경로가 재현되지 않자 연구실 자문을 구하고, 기능별 동작 흐름에서 저장 위치를 예상하는 방식으로 실험 재설계',
      '시간, 텍스트, 파일 확장자, 메시지 반응, 이모티콘을 통제 변인으로 두고 사용자 행위별 실험 설계',
      'LevelDB와 Cache의 정적 흔적, Fiddler로 수집한 HTTPS 통신, 앱 실행 결과를 서로 대조',
      '삭제 메시지와 전송 파일의 복구 가능성, 이벤트 코드와 사용자 행위의 관계 정리',
    ],
    outcomes: [
      '총 60개 변수 중 53개를 실제 아티팩트에서 확인하고 변경된 Cache 구조와 새 저장 경로 확인',
      '2024 한국정보보호학회 충청지부 정보보호학술논문발표대회 포스터 발표',
    ],
    learnings: [
      '특정 파일 경로를 외우기보다 사용자 행위를 기준으로 가설을 세우고 여러 증거원에서 확인하는 방식이 서비스 변경에 더 잘 대응했습니다.',
      '확인하지 못한 항목을 추정으로 채우지 않고, 실제 아티팩트에서 검증한 53개만 결과에 포함했습니다.',
    ],
    tech: ['FTK Imager', 'Fiddler', 'LevelDB'],
    links: [],
  },
  {
    title: '복합 증거 디지털 포렌식을 위한 자율형 LLM 예비 평가 및 개선 방안',
    period: '2026',
    context: '개별 증거의 정답 여부만으로는 자율형 LLM이 이메일, 디스크, 레지스트리, 실행 이력과 이벤트 로그를 연결하는 과정에서 무엇을 놓치는지 설명하기 어려웠습니다. 복합 증거 분석의 실패 지점을 행동 과정 중심으로 확인하기 위해 예비 평가를 설계했습니다.',
    role: '연구 질문 및 평가 기준 설계, 실험 환경 구성, 독립 세션 10회 실행과 결과 분석, 논문·포스터 작성 및 발표',
    actions: [
      'NIST CFReDS의 Forensics Image Test image와 25개 검증 문항으로 평가 데이터 및 채점 기준 구성',
      'Fox-IT Dissect를 MCP 서버로 구성하고 Claude Code의 Claude Sonnet 4.6이 도구와 탐색 순서를 선택하는 실험 환경 구축',
      '같은 개방형 지시문으로 독립 세션 10회를 실행하고 분석 가능 1점, 부분 가능 0.5점 기준으로 보고서 커버리지 비교',
      '세션 기록과 보고서를 대조해 반응적 탐색, 표면적 분석, 보고서 변환 중 데이터 누락의 세 가지 실패 패턴 정리',
    ],
    outcomes: [
      '세션별 커버리지가 25점 만점에 2.5점부터 12.5점까지 달라지는 것을 확인',
      '사실 수집과 해석을 분리하는 절차 및 보고 후 누락을 다시 확인하는 자기 검증 루프 제안',
      'KCC2026 학부생/주니어논문경진대회 발표 및 학부생부문 우수상 수상',
    ],
    learnings: [
      'LLM이 자율적으로 도구를 선택하는 것만으로는 복합 증거 분석을 보장하지 못했고, 탐색 범위와 세부 속성을 명시적으로 점검해야 한다는 점을 확인했습니다.',
      '도구가 정확한 값을 반환해도 자연어 보고서로 옮기는 과정에서 수치와 시각 정보가 빠질 수 있어, 원시 결과와 최종 보고서를 다시 대조하는 단계가 필요했습니다.',
    ],
    tech: ['Dissect', 'MCP', 'Claude Code', 'Claude Sonnet 4.6', 'NIST CFReDS'],
    links: [
      {
        label: '발표 포스터 · PDF · 1쪽',
        url: 'https://drive.google.com/file/d/1JcvO09nt0iFkaDNKpa0km8f7clJ8LS3g/view?usp=drivesdk',
      },
    ],
  },
  {
    title: '멀티드론 기반 재난 현장 실시간 3D 상황인식 시스템',
    period: '2026.06 - 현재',
    context: '재난 현장에서 여러 드론의 영상이 흩어져 있으면 상황을 한 화면에서 파악하기 어렵습니다. 팀은 KOREN 환경에서 영상을 분석하고 하나의 지도에 모아 보여주는 시스템을 개발하고 있습니다.',
    role: '3D 시각화 담당, 3DGS 렌더링 프로토타입, SuGaR 검증, 실제 지형 기반 드론 상황판 구현',
    actions: [
      '3DGS에는 UV 좌표를 가진 표면이 없어 일반적인 텍스처링을 바로 적용할 수 없음을 확인하고, 화면 후처리와 SuGaR 메시 변환으로 문제 재정의',
      '커스텀 셰이더로 세 가지 화면 모드를 구현하고, GPU 지정 오류와 대용량 OBJ의 브라우저 정지 문제를 해결해 SuGaR 결과 비교',
      '팀 논의를 거쳐 3DGS 표현보다 지도 기반 관제가 더 필요하다고 판단하고 역할 전환',
      'AWS Terrain Tiles의 RGB 값을 고도로 바꾸고 실제 좌표에 지형과 드론 세 대의 이동 경로 구현',
    ],
    outcomes: [
      'K-디지털 챌린지: 넷 챌린지 캠프 시즌13 학생팀 개발 과제로 선정',
      '중간평가를 거쳐 후속 과제 수행팀 10개 팀에 선정',
      '같은 지형 데이터를 공유하는 시뮬레이션 화면과 복원 화면에서 약 12만 개 점과 드론 이동 경로 검증',
    ],
    learnings: [
      '3DGS처럼 데이터를 표현하는 방식 자체가 다르면 익숙한 그래픽 기법을 그대로 쓸 수 없고, 먼저 데이터 구조를 이해해야 했습니다.',
      '기술적으로 흥미로운 구현을 고집하기보다 실제 사용 장면에 필요한 기능을 다시 묻고 작업 방향을 바꾸는 경험을 했습니다.',
    ],
    tech: ['KOREN', 'Three.js', 'GLSL', '3DGS', 'SuGaR', 'AWS Terrain Tiles'],
    links: [
      { label: 'GitHub', url: 'https://github.com/NET-Challenge-S13/skylens' },
    ],
  },
  {
    title: 'MITRE ATT&CK 기반 Purple Teaming Framework',
    period: '2024.09 - 2024.12',
    context: 'Caldera로 실행한 공격과 Elastic SIEM의 탐지 결과를 같은 ATT&CK 기준에서 비교하기 위해 4인 팀으로 Purple Teaming 환경을 개발했습니다.',
    role: '4인 팀 리더, 프로젝트 기획 및 일정 관리, Elastic SIEM 구축, 공격 로그 수집과 Sigma 규칙 적용',
    actions: [
      'Proxmox에 Caldera용 Kali, ELK용 Ubuntu, 피해 시스템용 Windows 11을 분리해 실습 환경 구성',
      'Sysmon 이벤트가 Winlogbeat를 거쳐 Elastic SIEM에 들어오는 수집 경로 구축',
      'Caldera 공격 뒤 남은 이벤트 필드와 Sigma 규칙의 조건을 대조하며 탐지 결과 확인',
      '팀의 Caldera 공격 환경 및 ATT&CK Navigator 결과 대조 화면 개발 조율',
    ],
    outcomes: [
      '공격 재현 결과와 탐지 결과를 한 화면에서 확인할 수 있는 데모 완성',
      '프로젝트 시연 영상 공개',
    ],
    learnings: [
      'ATT&CK 기법 이름을 탐지 규칙에 옮기는 것만으로는 충분하지 않고, 필요한 이벤트가 실제로 수집되는지부터 확인해야 했습니다.',
      '규칙의 필드와 조건이 실제 로그와 맞지 않으면 오탐이 생길 수 있고, 규칙을 적용한 뒤에는 같은 공격으로 다시 검증해야 한다는 점을 배웠습니다.',
    ],
    tech: ['ELK Stack', 'Sigma', 'Caldera', 'Sysmon'],
    links: [
      { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=deRVwHO_B_8' },
    ],
  },
  {
    title: 'DAH 2026: Defense AI Cyber Security Hackathon',
    period: '2026.06 - 2026.08',
    context: 'UAV, UGV, 위성통신과 AI 공급망의 위협 자료가 여러 프레임워크에 흩어져 있어 실제 방어 설계에 바로 쓰기 어려웠습니다.',
    role: '방산 공격 사례 조사, 25개 공격 기법 근거 검증, 프레임워크 매핑, 통합 방어 아키텍처 설계 참여',
    actions: [
      'UAV 14건과 UGV 10건의 공격 사례를 조사하고 MAVLink, ROS, ROS2의 공격 표면 학습',
      '흩어진 시나리오를 6개 전술과 25개 기법의 카탈로그로 다시 묶고 ATT&CK for ICS, SPARTA, ATLAS와 대조',
      '25개 기법의 인용, 수치, 출처를 전수 확인해 오류 5건을 고치고 근거가 부족한 3건 보강',
      '팀의 방어안을 탐지, 차단, 복구 관점으로 통합하고 D3FEND, NIST, ISO 통제와 연결하는 작업 참여',
    ],
    outcomes: [
      '공격 기법 카탈로그, 예선 보고서, 통합 방어 아키텍처 제출',
      '예선 심사를 거쳐 본선 진출',
    ],
    learnings: [
      'UAV, UGV, 위성, AI는 공격 표면이 달라 하나의 프레임워크만으로 설명하기 어려웠고, 대응 항목이 없을 때는 근사 매핑임을 밝혀야 했습니다.',
      '공격 사례의 수치와 인용을 다시 확인하면서 그럴듯한 설명보다 원문 근거와 재현 가능성이 먼저라는 점을 배웠습니다.',
    ],
    tech: ['MITRE ATT&CK for ICS', 'MITRE D3FEND', 'SPARTA', 'MITRE ATLAS'],
    links: [],
  },
  {
    title: '제8회 ARGOS Just For Security CTF 포렌식 문제 출제',
    period: '2024.11',
    context: '제8회 ARGOS Just For Security CTF의 포렌식 분야에서 참가자가 서로 다른 증거를 직접 복원하며 풀이할 수 있도록 문제를 구성해야 했습니다.',
    role: '포렌식 3문항 기획, 구현, 풀이 검수 및 배포',
    actions: [
      'Android APK의 XOR 암호화 로직을 분석하고 Python으로 복호화하는 Akdongping 문제 제작',
      'Sticky Notes와 Windows 아티팩트에서 클라우드 연동 흔적을 찾는 Memoping 문제 제작',
      'PDF Object 구조를 조작한 손상 파일을 복구하는 Zzoccomping 문제 제작',
    ],
    outcomes: [
      '세 문제의 파일과 풀이 흐름을 검수한 뒤 대회에 출제',
      '문제 세트를 GitHub에 공개',
    ],
    learnings: [
      '문제를 직접 만들면서 풀이에 필요한 단서가 APK, Windows 아티팩트, PDF 원시 구조에 어떤 형태로 남는지 다시 확인했습니다.',
      '분석할 줄 아는 것과 다른 사람이 따라갈 수 있는 증거와 풀이 순서를 설계하는 것은 별개의 작업임을 배웠습니다.',
    ],
    tech: ['jadx', 'Python', 'FTK Imager', 'HxD', 'PDFStreamDumper'],
    links: [
      { label: 'Problem Set', url: 'https://github.com/4RG0S/2024-JFS-Problemset/tree/main/forensic' },
    ],
  },
  {
    title: 'HSPACE DIGITAL FORENSICS CHALLENGE 문제 출제',
    period: '2026.03 - 2026.05',
    context: 'AWS 환경에서 발생한 침해사고를 분석하는 디지털 포렌식 문제를 팀으로 출제했습니다. 저는 참가자가 공격 흐름을 재구성할 수 있도록 공격 시나리오를 실행하고 CloudTrail 로그와 사건 시간 흐름을 만들었습니다.',
    role: 'AWS 공격 시나리오 실행, 공격 로그 생성, 사건 시간 흐름 검증',
    actions: [
      '탈취된 IAM 자격 증명을 이용한 정찰, S3 데이터 접근, 백도어 계정 생성, 타 리전 EC2 실행을 순서대로 재현',
      'CloudTrail 멀티 리전 설정과 S3 데이터 이벤트를 적용해 API 호출과 객체 접근 흔적 확보',
      '이벤트 시각, IAM 사용자, 리전, 객체 접근 기록을 대조해 사건 흐름 검증',
    ],
    outcomes: [
      '생성한 공격 로그와 검증 결과를 팀의 포렌식 챌린지 문제 데이터에 반영',
    ],
    learnings: [
      'CloudTrail의 기본 관리 이벤트만으로는 S3 객체 접근을 볼 수 없고, 리전 밖 활동을 놓치지 않으려면 멀티 리전 설정이 필요하다는 점을 실습으로 확인했습니다.',
      '한 종류의 로그로 모든 행위를 단정하기 어렵기 때문에 로그마다 기록할 수 있는 범위와 빈틈을 먼저 이해해야 했습니다.',
    ],
    tech: ['AWS', 'CloudTrail', 'IAM', 'S3', 'EC2'],
    links: [],
  },
  {
    title: '공기업 홈페이지 안전 진단',
    period: '2024.05',
    context: '국가보안기술연구소 사이버안보훈련센터의 윤리적 해커 양성 5기 실습에서 4인 팀으로 대전 지역 공공기관 웹사이트를 진단했습니다.',
    role: '인증 우회 및 API 노출 가능성 분석, 재현 절차와 대응 방안 작성, 결과 발표',
    actions: [
      'HTML과 JavaScript에서 서버 요청 구조를 확인하고 Nmap과 Burp Suite로 서비스와 인증 흐름 분석',
      'API 키 노출과 구버전 프레임워크에서 발생할 수 있는 인증 우회 가능성 확인',
      '확인한 취약점의 재현 절차와 대응 방안을 안전 진단 보고서로 정리',
    ],
    outcomes: [
      '팀 진단에서 잔존 게시판 기능과 사용자 식별자 노출을 포함해 총 4종의 취약점 확인',
      '대응 방안을 담은 보고서를 제출하고 결과 발표',
    ],
    learnings: [
      '공개된 소스에서 찾은 단서를 취약점으로 단정하지 않고, 실제 요청과 입력값을 바꾸어 영향이 재현되는지 확인하는 순서를 익혔습니다.',
      '발견 사실만 나열하는 대신 운영자가 적용할 수 있는 대응 방안까지 보고서에 담는 과정을 경험했습니다.',
    ],
    tech: ['Burp Suite', 'Nmap', 'HTML', 'JavaScript'],
    links: [],
  },
];

const projectOrder = [
  '멀티드론 기반 재난 현장 실시간 3D 상황인식 시스템',
  'DAH 2026: Defense AI Cyber Security Hackathon',
  '복합 증거 디지털 포렌식을 위한 자율형 LLM 예비 평가 및 개선 방안',
  'HSPACE DIGITAL FORENSICS CHALLENGE 문제 출제',
  'DFIR에 활용 가능한 Agentic AI 개발 및 sLLM Fine-tuning',
  '제8회 ARGOS Just For Security CTF 포렌식 문제 출제',
  'MITRE ATT&CK 기반 Purple Teaming Framework',
  '공기업 홈페이지 안전 진단',
  "사용자 행위 중심의 협업 툴 'JANDI' Artifact 분석",
];

const projectIdByTitle: Record<string, string> = {
  '멀티드론 기반 재난 현장 실시간 3D 상황인식 시스템': 'project-skylens',
  'DAH 2026: Defense AI Cyber Security Hackathon': 'project-dah-2026',
  '복합 증거 디지털 포렌식을 위한 자율형 LLM 예비 평가 및 개선 방안': 'project-autonomous-llm-dfir',
  'HSPACE DIGITAL FORENSICS CHALLENGE 문제 출제': 'project-aws-forensics-challenge',
  'DFIR에 활용 가능한 Agentic AI 개발 및 sLLM Fine-tuning': 'project-b-gent',
  '제8회 ARGOS Just For Security CTF 포렌식 문제 출제': 'project-jfs-ctf',
  'MITRE ATT&CK 기반 Purple Teaming Framework': 'project-purple-teaming',
  '공기업 홈페이지 안전 진단': 'project-public-web-security',
  "사용자 행위 중심의 협업 툴 'JANDI' Artifact 분석": 'project-jandi',
};

const projects = projectOrder
  .map((title) => projectRecords.find((project) => project.title === title))
  .filter((project): project is Project => Boolean(project));

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const openProjectFromHash = () => {
      const project = projects.find(
        (item) => `#${projectIdByTitle[item.title]}` === window.location.hash
      );

      if (project) {
        setSelectedProject(project);
        setIsModalOpen(true);
        return;
      }

      setIsModalOpen(false);
      setSelectedProject(null);
    };

    openProjectFromHash();
    window.addEventListener('hashchange', openProjectFromHash);

    return () => window.removeEventListener('hashchange', openProjectFromHash);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);

    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <section id="projects" className="mb-12 scroll-mt-24">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="text-[20px] font-bold text-foreground">
            Projects
          </h2>
          <p className="text-xs text-text-muted">최신순으로 정리</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <button
              id={projectIdByTitle[project.title]}
              key={project.title}
              type="button"
              aria-haspopup="dialog"
              onClick={() => openModal(project)}
              className="group scroll-mt-24 rounded-lg border border-border-color bg-background-secondary p-4 text-left transition-all duration-200 hover:border-accent-blue hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm text-accent-blue">{project.period}</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-text-muted group-hover:text-accent-blue transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mt-1 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted mt-1 line-clamp-2">
                {project.context}
              </p>
            </button>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
