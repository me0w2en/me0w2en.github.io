import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AboutSectionNav } from '@/components/about/AboutSectionNav';
import { ProjectsSection } from '@/components/about/ProjectsSection';

type ActivityItem = {
  title: string;
  org: string;
  period: string;
  links: { url: string; label: string }[];
};

const skillGroups = [
  {
    name: 'DFIR & Security',
    skills: ['FTK Imager', 'EnCase', 'Volatility', 'Wireshark', 'Burp Suite'],
  },
  {
    name: 'Languages',
    skills: ['Python', 'C/C++', 'JavaScript', 'VBA'],
  },
  {
    name: 'Frameworks & Platforms',
    skills: ['Elastic Stack', 'Docker', 'AWS', 'React', 'LangGraph', 'Git'],
  },
];

export const metadata: Metadata = {
  title: 'About & CV | me0w2en',
  description: '디지털 포렌식, 침해사고 대응, AI 기반 분석 자동화 관련 경력과 프로젝트',
};

function ExternalLinkBadge({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} 새 창에서 열기`}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-accent-blue/10 px-2.5 py-1 text-xs font-medium text-accent-blue transition-colors hover:bg-accent-blue hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary"
    >
      {label}
      <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </Link>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutSectionNav />
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <header className="mb-14 border-b border-border-color pb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/images/profile.jpg"
              alt="프로필 사진"
              width={96}
              height={96}
              sizes="96px"
              priority
              className="h-24 w-24 shrink-0 rounded-full border border-border-color object-cover"
            />
            <div className="min-w-0">
              <p className="section-kicker">About</p>
              <h1 className="mt-2 text-balance text-2xl font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
                Digital Forensics &amp; Incident Response
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="mailto:sjna@outlook.kr"
                  className="inline-flex min-h-10 items-center rounded-full border border-border-color px-3 text-sm text-text-secondary transition-colors hover:border-accent-blue hover:text-accent-blue"
                >
                  Email
                </Link>
                <Link
                  href="https://github.com/me0w2en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub 새 창에서 열기"
                  className="inline-flex min-h-10 items-center rounded-full border border-border-color px-3 text-sm text-text-secondary transition-colors hover:border-accent-blue hover:text-accent-blue"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sojin-na"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn 새 창에서 열기"
                  className="inline-flex min-h-10 items-center rounded-full border border-border-color px-3 text-sm text-text-secondary transition-colors hover:border-accent-blue hover:text-accent-blue"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border-color pt-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-xl font-bold tracking-[-0.025em] text-foreground">짧은 소개</h2>
            </div>
            <p className="mt-4 w-full leading-[1.8] text-text-secondary">
              디지털 포렌식과 침해사고 대응을 중심으로, 다양한 디지털 증거와 로그를 바탕으로 사고의 흐름을 재구성하는 방법을 공부하고 있습니다. 분석 과정에서 반복되는 작업을 줄이고, 근거를 확인할 수 있는 AI 기반 분석 자동화에도 관심을 두고 연구와 프로젝트를 이어가고 있습니다.
            </p>
          </div>
        </header>

        {/* 학력 */}
        <section id="education" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '충남대학교 컴퓨터융합학부',
                period: '2023.03 - 현재',
                desc: '2027년 2월 졸업 예정',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '해커스페이스(HSPACE) 전략직군 인턴',
                period: '2025.09 - 2025.12',
                desc: '인터넷전문은행 및 제조 대기업 모의 침투 프로젝트 보고 자료 작성',
              },
              {
                title: '㈜우성사료 영업전략팀 사원',
                period: '2020.08 - 2023.02',
                desc: '영업 데이터 분석, Excel VBA 기반 보고서 자동화 및 분석 도구 개발',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Experience */}
        <section id="research" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Research Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '충남대학교 사이버보안연구실 학부연구생',
                period: '2024.03 - 현재',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* Publications & Presentations */}
        <section id="publications" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Publications & Presentations
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '복합 증거 디지털 포렌식을 위한 자율형 LLM 예비 평가 및 개선 방안',
                venue: '제53회 한국컴퓨터종합학술대회(KCC2026) 학부생/주니어논문경진대회',
                year: '2026',
                credit: '제1저자, 포스터 발표',
                isFirstAuthor: true,
                detailUrl: '/about#project-autonomous-llm-dfir',
                links: [
                  {
                    url: 'https://drive.google.com/file/d/1JcvO09nt0iFkaDNKpa0km8f7clJ8LS3g/view?usp=drivesdk',
                    label: '발표 포스터 · PDF · 1쪽',
                  },
                ],
              },
              {
                title: 'sLLM(smaller Large Language Model) 기반 다중 소스 포렌식 증거 상관분석 프레임워크',
                venue: "2025년 한국정보보호학회 동계학술대회(CISC-W'25)",
                year: '2025',
                credit: '제1저자, 포스터 발표',
                isFirstAuthor: true,
                links: [
                  {
                    url: 'https://drive.google.com/file/d/19ZFqt3XaNkM3vR5WRKyri048lD5Z29nw/view?usp=drivesdk',
                    label: '발표 포스터 · PDF',
                  },
                ],
              },
              {
                title: 'Windows 디스크 이미지 데이터 추출 및 분석을 위한 MCP Server 개발 연구',
                venue: '2025년 한국디지털포렌식학회 동계학술대회',
                year: '2025',
                credit: '공동저자, 팀원 구두 발표',
                isFirstAuthor: false,
              },
              {
                title: 'AMVS: Automated Mapping of Vulnerabilities to Security Standards in Military Software',
                venue: '2025 16th International Conference on Information and Communication Technology Convergence (ICTC)',
                year: '2025',
                credit: '제3저자, 팀원 구두 발표',
                isFirstAuthor: false,
                links: [
                  { url: 'https://doi.org/10.1109/ICTC66702.2025.11389030', label: 'DOI' },
                ],
              },
              {
                title: "사용자 행위 중심의 협업 툴 'JANDI' Artifact 분석",
                venue: '2024년 한국정보보호학회 충청지부 정보보호학술논문발표대회',
                year: '2024',
                credit: '공동저자, 포스터 발표',
                isFirstAuthor: false,
              },
            ].map((item, index) => (
              <div key={index} className={`rounded-lg border border-border-color bg-background-secondary p-4 transition-colors hover:border-accent-blue/50 ${item.isFirstAuthor ? 'border-l-[3px] border-l-accent-blue' : ''}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{item.venue}</p>
                    <span className={`mt-2 inline-flex rounded px-2 py-0.5 text-xs ${item.isFirstAuthor ? 'bg-accent-blue/10 text-accent-blue' : 'bg-background-tertiary text-text-muted'}`}>
                      {item.credit}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    {item.detailUrl && (
                      <Link
                        href={item.detailUrl}
                        aria-label={`${item.title} 연구 요약 보기`}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-accent-blue/10 px-2.5 py-1 text-xs font-medium text-accent-blue transition-colors hover:bg-accent-blue hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary"
                      >
                        프로젝트 보기 <span aria-hidden="true">→</span>
                      </Link>
                    )}
                    {item.links?.map((link, linkIdx) => (
                      <ExternalLinkBadge key={linkIdx} href={link.url} label={link.label} />
                    ))}
                    <span className="whitespace-nowrap text-sm text-text-muted">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Awards
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'KCC2026 학부생/주니어논문경진대회 학부생부문 우수상',
                org: '한국정보과학회장 인증',
                period: '2026.08',
              },
              {
                title: 'Best of Best 14기 Whitehat 10 인증',
                org: '한국인터넷진흥원장 인증',
                period: '2026.02',
                links: [
                  { url: 'https://www.kisa.or.kr/402/form?lang_type=KO&page=1&postSeq=2576', label: '보도자료' },
                ],
              },
              {
                title: '2025년 (사)한국디지털포렌식학회 동계학술대회 우수논문상',
                org: '사단법인 한국디지털포렌식학회장 인증',
                period: '2025.11',
              },
              {
                title: '충남대학교 SW/AI 창의작품경진대회 주니어부문 우수상(2위)',
                org: '충남대학교 컴퓨터융합학부장 인증',
                period: '2024.06',
              },
              {
                title: '2023 ARGOS CTF CONTEST 「Just For Security」 대상(1위)',
                org: '충남대학교 컴퓨터융합학부장 인증',
                period: '2023.11',
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.org}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    {item.links?.map((link, linkIdx) => (
                      <ExternalLinkBadge key={linkIdx} href={link.url} label={link.label} />
                    ))}
                    <span className="whitespace-nowrap text-sm text-text-muted">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Certifications */}
        <section id="training" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Training & Certifications
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'CISCO Virtual Internship Program(VIP) 2026',
                period: '2026.06.29 - 2026.07.31',
                desc: '시스코코리아, 과학기술정보통신부 공동 인증 수료',
              },
              {
                title: '차세대 보안리더 양성 프로그램 Best of the Best(BoB) 14기 디지털포렌식 트랙',
                period: '2025.07.01 - 2026.02.26',
                desc: '한국정보기술연구원(KITRI)',
              },
              {
                title: 'HSPACE DFLAB 1기',
                period: '2025.06 - 현재',
                desc: 'HSPACE',
              },
              {
                title: '싱가포르 해외 IT기업 기술연수(NSHC OSINT 교육)',
                period: '2025.01.31 - 2025.02.06',
                desc: '충남대학교 데이터보안활용혁신융합대학사업단, NSHC',
              },
              {
                title: '윤리적 해커 양성 5기',
                period: '2024.02.19 - 2024.08.08',
                desc: '국가보안기술연구소 사이버안보훈련센터',
              },
              {
                title: '차세대 보안리더 양성 프로그램 화이트햇 스쿨(WhiteHat School) 1기',
                period: '2023.09 - 2024.03',
                desc: '한국정보기술연구원(KITRI), 입학식 교육생 대표',
                links: [
                  { url: 'https://localsegye.co.kr/news/view/1065600342343798', label: '교육생 대표 기사' },
                ],
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    {item.links?.map((link, linkIdx) => (
                      <ExternalLinkBadge key={linkIdx} href={link.url} label={link.label} />
                    ))}
                    <span className="whitespace-nowrap text-sm text-text-muted">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Activities
          </h2>
          <div className="space-y-4">
            {([
              {
                title: '2025년 1학기 대학생 교육기부 프로그램 「함성소리」',
                org: '고등학생 대상 Python 프로그래밍 및 큐싱 위협 대응 교육, 총 4회',
                period: '2025.05 - 2025.06',
                links: [],
              },
              {
                title: '2025 대학정보보호동아리연합회(KUCIS) 충청권역 대표',
                org: '한국정보보호산업협회(KISIA)',
                period: '2025.05 - 2025.12',
                links: [],
              },
              {
                title: '충남대학교 정보보호동아리 ARGOS 교육부장',
                org: '보안 교육 커리큘럼 및 동아리 교육 운영',
                period: '2025',
                links: [],
              },
              {
                title: 'ARGOS 해커노트북 만들기 교육',
                org: 'Pwnable, Reversing, Web Hacking, Digital Forensics 실습 환경 구축 및 Wargame 문제 풀이 교육',
                period: '2025.05',
                links: [
                  {
                    url: 'https://drive.google.com/file/d/1tMVN6VE814D5eyyO9C4OY7BEKUXDdCdt/view?usp=drivesdk',
                    label: '교육자료 · PDF · 70쪽',
                  },
                ],
              },
              {
                title: 'ARGOS 해킹시연회: 큐싱(Qshing)',
                org: '오픈소스 도구 기반 큐싱 공격 시연 및 대응 방법 교육',
                period: '2025.03',
                links: [
                  {
                    url: 'https://drive.google.com/file/d/1Myt6Xfp9eoD36aDbXROYdUu5u6IAzc12/view?usp=drivesdk',
                    label: '시연 자료 · PDF · 9쪽',
                  },
                ],
              },
              {
                title: '충남대학교 정보보호동아리 ARGOS 회장',
                org: '동아리 운영 및 보안 세미나, 해커톤, CTF 대회 개최',
                period: '2024.03 - 2025.03',
                links: [],
              },
              {
                title: 'ARGOS 하계 보안집중교육: 디지털 포렌식 강의',
                org: '파일시스템 복구, 디스크 이미징, 메모리 포렌식 교육, 총 3회',
                period: '2024.08',
                links: [
                  {
                    url: 'https://drive.google.com/file/d/1WxYi_6WMtTTfL1vWC_eQDMQsOHBLgcul/view?usp=drivesdk',
                    label: '1주차 · PDF',
                  },
                  {
                    url: 'https://drive.google.com/file/d/13pZMM1VaJ78wQ7y36-j4DVD4P8wPU3nZ/view?usp=drivesdk',
                    label: '2주차 · PDF',
                  },
                  {
                    url: 'https://drive.google.com/file/d/1qz72ZyC299Ud54lCFMo4BhrVN9VzXILs/view?usp=drivesdk',
                    label: '3주차 · PDF',
                  },
                ],
              },
              {
                title: 'ARGOS 해킹시연회: HolyGhost 랜섬웨어 감염 시나리오',
                org: 'HolyGhost 랜섬웨어 감염 과정 시연 및 대응 방법 교육',
                period: '2024.03',
                links: [],
              },
              {
                title: 'ARGOS C 언어 교육',
                org: 'C 언어 기반 프로그래밍 기초 문법 및 포인터 활용 교육',
                period: '2024.03',
                links: [],
              },
              {
                title: '코드클럽 찾아가는 SW 교육기부단',
                org: '대전도솔초등학교 4학년 대상 스크래치 프로그래밍 교육 봉사, 총 12시간',
                period: '2023.04 - 2023.07',
                links: [],
              },
            ] as ActivityItem[]).map((item, index) => (
              <div key={index} className="rounded-lg border border-border-color bg-background-secondary p-4 transition-colors hover:border-accent-blue/50">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{item.org}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    {item.links?.map((link, linkIdx) => (
                      <ExternalLinkBadge key={linkIdx} href={link.url} label={link.label} />
                    ))}
                    <span className="whitespace-nowrap text-sm text-text-muted">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-12 scroll-mt-24">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <h3 className="mb-3 text-[14px] font-medium text-text-secondary">{group.name}</h3>
                <ul className="flex flex-wrap gap-2" aria-label={`${group.name} 기술`}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border-color bg-background-secondary px-3 py-1.5 text-sm font-medium text-text-secondary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="hidden">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Contact
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:sjna@outlook.kr"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-background-secondary px-4 text-text-secondary transition-colors hover:text-accent-blue"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sjna@outlook.kr
            </Link>
            <Link
              href="https://github.com/me0w2en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 새 창에서 열기"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-background-secondary px-4 text-text-secondary transition-colors hover:text-accent-blue"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/sojin-na"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn 새 창에서 열기"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-background-secondary px-4 text-text-secondary transition-colors hover:text-accent-blue"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
