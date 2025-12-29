import Link from 'next/link';
import { ProjectsSection } from '@/components/about/ProjectsSection';

export const metadata = {
  title: 'About | me0w2en',
  description: 'me0w2en - Digital Forensics & Incident Response',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        {/* 한 줄 소개 */}
        <section className="mb-12">
          <h1 className="text-[28px] font-bold text-foreground mb-3">
            About
          </h1>
          <p className="text-[17px] text-text-secondary leading-relaxed">
            <span className="text-foreground font-medium">Digital Forensics</span>와{' '}
            <span className="text-foreground font-medium">Incident Response</span>에 관심을 가지고,{' '}
            <span className="text-accent-blue font-medium">DFIR Analyst</span>를 목표로 공부하고 있습니다.
          </p>
        </section>

        {/* 학력 */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '충남대학교 컴퓨터융합학부',
                period: '2023.03 - 현재',
                desc: 'Expected Feb 2027',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

          {/* 연구 경험 */}
          <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Research Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '충남대학교 사이버보안연구실 학부연구생',
                period: '2024.02 - 현재',
                desc: '충남대학교',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'HSPACE 인턴',
                period: '2024',
                desc: '보안 스타트업 인턴십',
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 교육 */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Certifications & Training
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'KITRI Best of the Best 14기 디지털포렌식 트랙',
                period: '2025.07 - 2025.12',
                desc: 'KISA(한국인터넷진흥원)',
              },
              {
                title: 'NSHC Singapore OSINT 교육',
                period: '2025.01',
                desc: 'NSHC',
              },
              {
                title: '윤리적 해커 양성 5기',
                period: '2024.02 - 2024.08',
                desc: '사이버안보훈련센터',
              },
              {
                title: 'KITRI White-hat School 1기',
                period: '2023.09 - 2024.04',
                desc: 'KITRI(한국정보기술연구원)',
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* Publications / Posters */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Publications / Posters
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'sLLM(smaller Large Language Model) 기반 다중 소스 포렌식 증거 상관분석 프레임워크',
                venue: '한국정보보호학회 동계 학술대회',
                year: '2025',
                type: 'Poster',
                isFirstAuthor: true,
                links: [
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1tlckfjv3TFxdunAKPyOWnZ_qIaHPdC3X/view?usp=drive_link', label: 'Journal' },
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1AQFDcdQ8hPnjWhTUgfQBU4JSpJC_5qg5/view?usp=drive_link', label: 'Poster' }
                ],
              },
              {
                title: 'LLM 기반 정적 증거 분석 자동화: Windows 디스크 이미지 데이터 추출 및 분석을 위한 MCP Server 개발 연구',
                venue: '한국디지털포렌식학회 동계 학술대회',
                year: '2025',
                type: 'Presentation',
                isFirstAuthor: false,
              },
              {
                title: 'AMVS: Automated Mapping of Vulnerabilities to Security Standards in Military Software',
                venue: '2025 16th International Conference on Information and Communication Technology Convergence (ICTC)',
                year: '2025',
                type: 'Journal',
                isFirstAuthor: false,
              },
              {
                title: '사용자 행위 중심의 협업 툴 ‘JANDI’ Artifact 분석',
                venue: '한국정보보호학회 충청지부 하계학술대회',
                year: '2024',
                type: 'Poster',
                isFirstAuthor: false,
              },
            ].map((item, index) => (
              <div key={index} className={`group p-4 rounded-lg bg-background-secondary border border-border-color hover:border-accent-blue/50 transition-all duration-200 ${item.isFirstAuthor ? 'border-l-[3px] border-l-accent-blue' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">
                      {item.venue}
                      <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${item.isFirstAuthor ? 'bg-accent-blue/10 text-accent-blue' : 'bg-background-tertiary text-text-muted'}`}>
                        {item.isFirstAuthor ? 'First Author' : 'Co-Author'}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Links - 호버 시 나타남 */}
                    <div className="flex items-center gap-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                      {item.links?.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-colors"
                        >
                          {link.type === 'pdf' && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          )}
                          {link.type === 'link' && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                          {link.type === 'github' && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          )}
                          {link.type === 'google drive' && (
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.433 22l-1.47-2.55L8.617 8.88l1.47 2.55L4.433 22zm15.134 0H8.433l1.47-2.55h9.664l1.47 2.55h-1.47zm-1.47-2.55L12.443 8.88 7.717 2h4.9l5.48 10.57-1.47 2.55v.33h1.47zM12.443 8.88L7.717 2h-4.9l6.126 10.57 3.5-3.69z"/>
                            </svg>
                          )}
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <span className="text-sm text-text-muted whitespace-nowrap">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Awards
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '충남대학교 SW/AI Project Fair 주니어 부문 2위',
                org: '충남대학교',
                period: '2024.11',
              },
              {
                title: '2023 ARGOS CTF CONTEST 「Just For Security」 1위',
                org: 'ARGOS 주최 CTF 대회',
                period: '2023.11',
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.org}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Activities
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'KUCIS(대학정보보호동아리연합회) 충청권역 대표',
                org: 'KISIA(정보보호산업협회)',
                period: '2025',
                links: [],
              },
              {
                title: 'ARGOS 해커노트북 만들기 교육',
                org: 'Pwnable, Reversing, Web hacking, Forensic 4개 분야 실습 환경 구축 및 Wargame 문제 풀이 교육',
                period: '2025.05',
                links: [
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1zYhwfKqP09hOVaG94K4HrqEXRDCLmHU2/view?usp=drive_link', label: '강의 자료' },
                ],
              },
              {
                title: 'ARGOS 해킹시연회 발표 : Qushing',
                org: '오픈소스 기반 Qushing 시연 및 청중 참여형 보안 교육',
                period: '2025.03',
                links: [
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1uVWmjsmJVuc_8G2gIa6SxwddgVCzgBlF/view?usp=drive_link', label: '발표 자료' },
                ],
              },
              {
                title: '충남대학교 정보보호동아리 ARGOS 회장',
                org: '동아리 운영 및 보안 세미나, 해커톤, CTF 대회 개최',
                period: '2024.03 - 2025.03',
                links: [],
              },
              {
                title: 'Just For Security CTF - 포렌식 문제 출제',
                org: '충남대학교 정보보호 동아리 ARGOS 주최 CTF 대회',
                period: '2024.11',
                links: [
                  { type: 'github', url: 'https://github.com/4RG0S/2024-JFS-Problemset/tree/main/forensic', label: 'GitHub' },
                ],
              },
              {
                title: 'ARGOS 하계 보안집중교육 - 디지털포렌식 강의',
                org: '파일시스템 복구, 디스크 이미징, 메모리 포렌식 (3회차)',
                period: '2024.08',
                links: [
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1lYjv07WaBT5Ai3I1dQ426i77NDxSmPZJ/view?usp=drive_link', label: '강의 자료 #1' },
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1FJcm-MA0vNkZPtW0UgFzpHUnYX-Jqra5/view?usp=drive_link', label: '강의 자료 #2' },
                  { type: 'google drive', url: 'https://drive.google.com/file/d/1AX8_LlN4QBXD_F7R3B0q5Vvjj3UOgvf-/view?usp=drive_link', label: '강의 자료 #3' },
                ],
              },
              {
                title: '지역 공기업 홈페이지 안전진단',
                org: '윤리적 해커 양성 교육 프로그램 실습',
                period: '2024.05',
                links: [],
              },
              {
                title: 'ARGOS 해킹시연회 발표 : 랜섬웨어 감염 시나리오',
                org: '랜섬웨어 감염 과정 시연 및 보안 교육',
                period: '2024.03',
                links: [],
              },
              {
                title: 'ARGOS C언어 교육 진행',
                org: '프로그래밍 기초 교육 (3회차)',
                period: '2024.03',
                links: [],
              },
            ].map((item, index) => (
              <div key={index} className="group p-4 rounded-lg bg-background-secondary border border-border-color hover:border-accent-blue/50 transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.org}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Links - 호버 시 나타남 */}
                    {item.links && item.links.length > 0 && (
                      <div className="flex items-center gap-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        {item.links.map((link, linkIdx) => (
                          <Link
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-colors"
                          >
                            {link.type === 'github' && (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            )}
                            {link.type === 'google drive' && (
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.433 22l-1.47-2.55L8.617 8.88l1.47 2.55L4.433 22zm15.134 0H8.433l1.47-2.55h9.664l1.47 2.55h-1.47zm-1.47-2.55L12.443 8.88 7.717 2h4.9l5.48 10.57-1.47 2.55v.33h1.47zM12.443 8.88L7.717 2h-4.9l6.126 10.57 3.5-3.69z"/>
                              </svg>
                            )}
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Skills
          </h2>
          <div className="space-y-6">
            {/* Security */}
            <div>
              <h3 className="text-[14px] font-medium text-text-secondary mb-3">Security</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'FTK Imager', color: 'bg-slate-700' },
                  { name: 'Encase', color: 'bg-orange-600' },
                  { name: 'Wireshark', color: 'bg-[#1679a7]' },
                  { name: 'Volatility', color: 'bg-indigo-600' },
                  { name: 'Elasticsearch', color: 'bg-[#fed10a] text-black' },
                  { name: 'Burp Suite', color: 'bg-[#ff6633]' },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div>
              <h3 className="text-[14px] font-medium text-text-secondary mb-3">Development</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Python', color: 'bg-[#3776ab]' },
                  { name: 'C/C++', color: 'bg-[#00599c]' },
                  { name: 'VBA', color: 'bg-[#867db1]' },
                  { name: 'JavaScript', color: 'bg-[#f7df1e] text-black' },
                  { name: 'React', color: 'bg-[#61dafb] text-black' },
                  { name: 'Git', color: 'bg-[#f05032]' },
                  { name: 'Docker', color: 'bg-[#2496ed]' },
                  { name: 'LangGraph', color: 'bg-[#1c3c3c]' },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section>
          <h2 className="text-[20px] font-bold text-foreground mb-6">
            Contacts
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:sjna@outlook.kr"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary text-text-secondary hover:text-accent-blue transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sjna@outlook.kr
            </Link>
            <Link
              href="https://github.com/me0w2en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary text-text-secondary hover:text-accent-blue transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/sojin-na"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary text-text-secondary hover:text-accent-blue transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
