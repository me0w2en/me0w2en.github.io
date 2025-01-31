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
    links: [
      { label: "README", url: "https://github.com/example/network-analyzer-readme" },
      { label: "Live Demo", url: "https://example.com/network-analyzer" },
    ],
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
    stack: ["APK", "FTK Imager"],
    links: [
      { label: "README", url: "https://github.com/example/forensics-toolkit-readme" },
      { label: "Live Demo", url: "https://example.com/forensics-toolkit" },
    ],
  },
  {
    title: "사용자 행위 중심의 협업 툴 ‘JANDI’ Artifact 분석",
    period: "2023.10 - 2024.03 (4인 팀프로젝트)",
    description: "협업 툴 JANDI의 Artifact 분석",
    details: [
      "AES-256 암호화 알고리즘을 사용한 파일 암호화 및 복호화",
    ],
    stack: ["FTK Imager"],
    links: [
      { label: "README", url: "https://github.com/example/encrypted-storage-readme" },
      { label: "Live Demo", url: "https://example.com/encrypted-storage" },
    ],
  },
];

export const ProjectGallery = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
          Project Gallery
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {project.title}
              </h3>

              {/* Period */}
              <p className="text-sm text-gray-400 mb-4">{project.period}</p>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Details */}
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-green-400 text-black px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, idx) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
