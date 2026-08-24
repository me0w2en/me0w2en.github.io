'use client';

import { useState } from 'react';
import { ProjectModal, Project } from '@/components/ui/ProjectModal';

const projects: Project[] = [
  {
    title: 'DFIR Agent 개발 및 sLLM Fine-tuning',
    period: '2025.09 - 2025.12',
    summary: 'DFIR 분석가의 반복 작업(아티팩트 추출/파싱/검색/요약)을 자동화하고, LLM의 근거·신뢰성·민감정보 이슈를 해결하기 위해 단일 Agent 기반 분석 파이프라인을 구축했습니다. 입력 전처리부터 MCP 자동 중개, 교차분석, 보고서 출력까지 일관된 흐름을 제공합니다.',
    role: 'PM / Architecture 설계 / Agent 개발 & 관련 데이터셋 설계',
    highlights: [
      'LangGraph 기반 상태 그래프 워크플로우로 멀티스테이지 분석 흐름 구현',
      'Two-Stage Hybrid Planning 설계: High-Level Planning(Task 분해, DAG 의존성) + ReAct Execution(Think→Execute→Observe)',
      'MCP 서버 선택 전략 및 동적 프롬프트 주입으로 Tool 선택 정확도 향상',
      'Lazy Loading, 컨텍스트 절약, 스키마 캐싱, 재시도 로직 등 실사용 안정화 구현',
      '포렌식 분석 경험자 6명 대상 수작업 기초 분석 대비 평균 분석 시간 59% 단축',
      '분석 자동화 프로그램, MCP 서버 9종, 평가 벤치 및 학습용 데이터셋 오픈소스 공개',
    ],
    tech: ['LangGraph', 'MCP', 'Python'],
    links: [
      { label: 'B-gent GitHub', url: 'https://github.com/BoB-14th-B-gent/B-gent' },
    ],
  },
  {
    title: 'DAH 2026 방산 Agentic AI 사이버 보안 해커톤',
    period: '2026.06 - 2026.08',
    summary: 'LIG Defense & Aerospace가 주최한 방산 Agentic AI 공방 해커톤에서 공격·방어 시나리오와 방어 아키텍처를 설계해 본선에 진출했습니다.',
    role: '방산 사이버 공격 사례 조사 / 공격 기법 카탈로그 검증 / 방어 아키텍처 설계',
    highlights: [
      'UAV·UGV·위성통신·AI 공급망 공격 사례를 조사하고 방산 위협 시나리오로 구체화',
      '6개 전술 25개 공격 기법의 사실관계와 근거를 전수 검증하고 ATT&CK ICS·SPARTA·ATLAS에 매핑',
      '탐지·차단·복구 3계층 방어 아키텍처를 설계하고 MITRE D3FEND 및 NIST·ISO 통제와 연결',
      '예선 보고서와 아키텍처 산출물을 기반으로 본선 진출',
    ],
    tech: ['MITRE ATT&CK', 'MITRE D3FEND', 'SPARTA', 'NIST'],
    links: [
      { label: 'DAH 2026', url: 'https://dah.ai.kr/' },
    ],
  },
  {
    title: 'DFLAB 포렌식 챌린지 문제 출제',
    period: '2026.05',
    summary: 'AWS를 활용한 침해사고 시나리오를 팀으로 설계하고, 참가자가 사건 흐름을 추적할 수 있도록 공격 행위를 재현해 분석용 로그를 제작했습니다.',
    role: 'AWS 공격 환경 구성 / 공격 행위 재현 / 공격 로그 생성 및 검증',
    highlights: [
      '클라우드 환경의 침해 흐름을 단계별 포렌식 문제로 구성',
      '시나리오에 맞는 공격 행위를 직접 수행해 분석 대상 로그 생성',
      '팀원이 설계한 문제 흐름과 로그의 시간·행위 맥락이 일치하도록 검증',
    ],
    tech: ['AWS', 'Cloud Forensics', 'Incident Response'],
    links: [],
  },
  {
    title: 'SkyLens — K-디지털 챌린지: 넷 챌린지 캠프 시즌13',
    period: '2026.06 - 현재',
    summary: '재난 현장 드론의 영상·소리 데이터를 KOREN 분산 인프라에서 분석하고 지도 기반 상황판으로 통합하는 재난 인텔리전스 플랫폼으로 본선에 진출했습니다.',
    role: '3DGS 시각화 프로토타입 / 실사-시뮬레이션 화면 변환 / 실제 지도 기반 드론 화면 개발',
    highlights: [
      'Three.js 커스텀 셰이더로 3DGS 장면의 실사·시뮬레이션·분할 화면 전환 프로토타입 구현',
      'SuGaR 기반 메시·텍스처 변환 가능성을 검증하고 GPU 실행 환경의 제약을 해결',
      '서비스 방향 전환에 맞춰 실제 지도 데이터 기반 드론 이동 화면 개발로 역할 전환',
      '과학기술정보통신부 주최 시즌13 학생팀 본선 진출',
    ],
    tech: ['KOREN', 'Three.js', '3DGS', 'CesiumJS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/b-re-w/skylens' },
    ],
  },
  {
    title: 'MITRE ATT&CK 기반 Purple Teaming Framework',
    period: '2024.09 - 2024.12',
    summary: 'Red/Blue 팀 간 협업 한계를 극복하고 실제 APT 공격 기반 보안 평가를 자동화하기 위한 Purple Teaming 프레임워크를 개발했습니다. Caldera 기반 자동화된 침투 테스트 환경과 Elastic SIEM 기반 탐지 시스템을 구축했습니다.',
    role: '팀 리더 / 프로젝트 기획 및 문서 작성 / Elastic SIEM 환경 구축 및 SIGMA rule 설정',
    highlights: [
      'Ubuntu Server 환경 기반 Elastic SIEM 환경 구축',
      'APT 공격 시나리오 기반 SIGMA rule 설정',
      'Caldera 기반 자동화된 침투 테스트 환경 (RED TEAM)',
      '공격/탐지 결과 시각화 도구 (Purple Team Navigator)',
    ],
    tech: ['ELK Stack', 'Sigma', 'Caldera', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/me0w2en/me0w2en/tree/main/Development_Projects/0x02_puple_teaming' },
      { label: 'Demo Video', url: 'https://youtu.be/deRVwHO_B_8' },
    ],
  },
  {
    title: '공기업 홈페이지 안전 진단',
    period: '2024.05',
    summary: '윤리적 해커 양성 교육 프로그램을 통해 대전지역 공공기관 웹사이트를 대상으로 실습 기반 보안 진단 프로젝트를 수행했습니다. API 노출 및 인증 우회 등 4종의 보안 취약점을 탐지했습니다.',
    role: '인증 우회 및 API 노출 취약점 분석 / 분석 보고서 작성 및 발표',
    highlights: [
      '공개된 네이버 지도 API Key를 통한 서비스 남용 가능성 확인',
      '구버전 .NET Framework 사용을 통한 One-day 취약점 활용한 인증 우회 확인',
      '삭제된 기능이 남아있는 게시판 코드를 통한 비인가 글쓰기 취약점 확인',
      '익명처리 되지 않은 사용자 식별자 노출과 비밀번호 무차별 대입 가능성 확인',
    ],
    tech: ['Burp Suite', 'Nmap', 'HTML/JavaScript'],
    links: [],
  },
  {
    title: 'JANDI Artifact 분석 연구',
    period: '2023.10 - 2024.06',
    summary: 'COVID-19 이후 협업 도구 시장 급성장과 디지털 포렌식 수요 증가에 따른 JANDI 아티팩트 분석 연구를 수행했습니다. Fiddler를 활용한 패킷 캡처 및 이벤트 로그 분석을 통해 사용자 행위와 아티팩트 생성 간의 상관관계를 확인했습니다.',
    role: '패킷 및 로그 분석 / 실험 시나리오 구성 / 분석 결과 정리 및 시각화',
    highlights: [
      'Chromium 기반 협업 툴의 데이터 저장 구조 및 아티팩트 생성 메커니즘 파악',
      '5개 통제 변인(시간, 텍스트, 파일 확장자, 메시지 반응, 이모티콘)에 따른 시나리오 설계',
      'Fiddler를 활용한 HTTPS 패킷 분석 및 JWT 토큰 디코딩',
      '2024년 한국정보보호학회 충청지부 하계 학술대회 포스터 발표',
    ],
    tech: ['FTK Imager', 'Fiddler', 'IDA', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/me0w2en/me0w2en/tree/main/Development_Projects/0x00_jandi_paper' },
    ],
  },
  {
    title: 'Just For Security CTF 포렌식 문제 출제',
    period: '2024.11',
    summary: '디지털 포렌식 세부 영역별로 실제 공격 및 분석 시나리오 기반 CTF 문제를 기획·출제하고, 다양한 환경과 기술 스택에서의 실제 복원/분석 흐름을 학습용으로 재구성했습니다.',
    role: '디지털포렌식 문제 설계 및 테스트',
    highlights: [
      'Android APK 내 XOR 기반 암호화 로직 분석 및 Python 스크립트로 복호화 구현',
      'Sticky Notes 등 Windows 아티팩트를 활용한 클라우드 연동 서비스 분석 시나리오',
      'PDF 파일 구조 내 Object 영역 조작을 통한 파일 손상/복구 시나리오 설계',
      '실전 포렌식 3문항 기획 및 출제, GitHub 문제 세트 배포',
    ],
    tech: ['jadx', 'Python', 'FTK Imager', 'HxD', 'PDFStreamDumper'],
    links: [
      { label: 'GitHub', url: 'https://github.com/4RG0S/2024-JFS-Problemset/tree/main/forensic' },
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="mb-12">
        <h2 className="text-[20px] font-bold text-foreground mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => openModal(project)}
              className="group p-4 rounded-lg bg-background-secondary border border-border-color hover:border-accent-blue hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm text-accent-blue">{project.period}</span>
                <svg
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
                {project.summary}
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
