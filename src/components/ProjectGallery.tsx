import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "실시간 네트워크 트래픽 분석 시스템",
    period: "2023.06 - 2023.07 (3인 팀 프로젝트)",
    description: "기업 환경에서 네트워크 트래픽을 실시간으로 분석하고 가시화하는 시스템",
    details: [
      "Wireshark와 NetFlow 데이터를 활용하여 실시간 트래픽 시각화",
      "D3.js를 사용한 네트워크 트래픽 대시보드 구현",
      "네트워크 프로토콜 분석을 통해 비정상적인 트래픽 패턴 탐지",
      "Node.js 기반의 RESTful API를 통해 데이터 수집 및 처리",
    ],
    stack: ["React", "Node.js", "D3.js", "Wireshark", "MongoDB"],
    links: [
      { label: "README", url: "https://github.com/example/network-analyzer-readme" },
      { label: "Live Demo", url: "https://example.com/network-analyzer" },
    ],
  },
  {
    title: "디지털 포렌식 자동화 도구",
    period: "2023.02 - 2023.03 (2인 팀 프로젝트)",
    description: "침해 사고 발생 시 디지털 증거 수집과 분석을 자동화하는 솔루션",
    details: [
      "Python을 활용한 시스템 로그 및 메모리 덤프 분석",
      "Kali Linux의 Autopsy 모듈 확장을 통한 데이터 시각화",
      "SQLite 데이터베이스를 사용하여 증거 데이터 관리",
      "악성코드 패턴 분석을 통해 의심 파일 자동 분류",
    ],
    stack: ["Python", "Kali Linux", "Autopsy", "SQLite"],
    links: [
      { label: "README", url: "https://github.com/example/forensics-toolkit-readme" },
      { label: "Live Demo", url: "https://example.com/forensics-toolkit" },
    ],
  },
  {
    title: "암호화 기반 파일 저장소",
    period: "2022.11 - 2022.12 (개인 프로젝트)",
    description: "AES 암호화를 기반으로 보안 파일 저장 및 복호화를 지원하는 클라우드 서비스",
    details: [
      "AES-256 암호화 알고리즘을 사용한 파일 암호화 및 복호화",
      "Spring Boot를 활용한 인증 및 암호화 API 구현",
      "MySQL을 기반으로 사용자 데이터와 메타데이터 관리",
      "클라우드 환경에서의 데이터 전송 암호화(TLS) 적용",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "AES", "AWS"],
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
