import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "MITER ATT&CK 기반 Purple Teaming Framework 개발 프로젝트",
        period: "2024 (4인 팀프로젝트)",
        description: "공격 및 방어팀 협업을 위한 Purple Teaming Framework 개발",
        details: [
            "Elastic SIEM 기반 보안 로그 수집 및 데이터 분석 환경 구축",
            "Sigma Rule을 활용한 맞춤형 탐지 룰 개발 및 적용",
            "ATT&CK Matrix 기반 공격 및 탐지 대시보드 구축",
        ],
        stack: ["Elastic SIEM", "Sigma", "ATT&CK Framework"],
        links: [{ label: "README", url: "https://github.com/example/network-analyzer-readme" }],
    },
    {
        title: "Just For Security CTF 문제 출제 및 운영",
        period: "2024",
        description: "충남대학교 정보보호동아리 ARGOS 주관 CTF 대회 기획 및 운영",
        details: [
            "PDF 파일 구조를 응용한 스테가노그래피 복원",
            "Windows 환경에서 삭제된 파일 복구",
            "Android 환경에서 모바일 앱 코드 난독화",
        ],
        stack: ["PDF", "APK", "FTK Imager"],
        links: [
            { label: "Writeup", url: "https://github.com/example/forensics-toolkit-writeup" },
            { label: "CTF 문제 1", url: "https://github.com/example/ctf-challenge-1" },
            { label: "CTF 문제 2", url: "https://github.com/example/ctf-challenge-2" },
            { label: "CTF 문제 3", url: "https://github.com/example/ctf-challenge-3" },
        ],
    },
    {
        title: "사용자 행위 중심의 협업 툴 ‘JANDI’ Artifact 분석 논문 투고",
        period: "2023",
        description: "협업 툴 JANDI의 아티팩트 분석을 주제로 2024년 한국정보보호학회 충청지부 하계 학술대회 투고",
        details: [
            "Chromium 기반 웹 실행 환경 및 Electron Framework 기반 애플리케이션 분석",
            "메시지 삭제 및 전송된 파일의 아티팩트 복구 기법 연구",
            "LevelDB 데이터를 활용한 사용자 행위 분석 및 증거 활용 방안 제시",
            "디지털 포렌식 수사 시나리오를 적용하여 법적 증거로서의 활용 가능성 검토",
        ],
        stack: ["FTK Imager", "LevelDB"],
        id: "jandi-paper",
        relatedAchievement: "한국정보보호학회 충청지부 정보보호학술논문발표대회 포스터 발표",
    },
    {
        title: "2024년 충남대학교 정보보호동아리 ARGOS 보안 교육 디지털포렌식 트랙 담당",
        period: "2024.08.16 - 2024.08.29",
        description: "파일 시스템 분석, 데이터 복구, 메모리 포렌식을 주제로 3회차 교육 진행",
        details: [
            "숨겨진 데이터 찾기와 손상된 파일 복구",
            "디스크 포렌식: Disk Image 분석 및 파일 복구",
            "메모리 포렌식: 휘발성 데이터 분석 및 Volatility 활용",
        ],
        stack: ["File Carving", "FTK Imager", "Volatility"],
        links: [{ label: "Github", url: "https://github.com/4RG0S/2024-Summer-Edu" }],
    },
];

export const ProjectGallery = () => {
  return (
      <section id="projects" className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
                  Project Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                      <motion.div
                          key={index}
                          id={project.id}
                          className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all flex flex-col justify-between project-card"
                      >
                          <div>
                              <h3 className="text-xl font-bold text-green-400 mb-2">
                                  {project.title}
                              </h3>

                              <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                              <p className="text-gray-300 mb-4">{project.description}</p>

                              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                                  {project.details.map((detail, idx) => (
                                      <li key={idx}>{detail}</li>
                                  ))}
                              </ul>

                              <div className="flex flex-wrap gap-2 mb-4">
                                  {project.stack?.map((tech, idx) => (
                                      <span
                                          key={idx}
                                          className="text-xs bg-green-400 text-black px-2 py-1 rounded-full"
                                      >
                                          {tech}
                                      </span>
                                  ))}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                  {project.links?.map((link, idx) => (
                                      <a
                                          key={idx}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-xs bg-gray-700 text-green-400 px-3 py-1 rounded-full hover:bg-gray-600 transition"
                                      >
                                          {link.label}
                                      </a>
                                  ))}
                              </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>
  );
};
