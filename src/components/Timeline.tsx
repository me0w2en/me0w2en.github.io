import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    activities: [
      "KITRI 주관 White-hat School 1기 수료",
    ],
  },
  {
    year: "2024",
    activities: [
      "충남대학교 정보보호동아리 ARGOS 회장 역임",
      "충남대학교 정보보호동아리 ARGOS \"2024년 해킹 시연회\" 개최 및 발표 (북한발 HolyGhost 랜섬웨어 분석 발표)",
      "충남대학교 정보보호동아리 ARGOS \"SOGRA Hackathon\" 기획 및 운영",
      "충남대학교 정보보호동아리 ARGOS \"제 8회 Just For Security CTF\" 개최 및 문제 출제",
      "사이버안보훈련센터 주관 윤리적 해커 양성 5기 수료", 
      "한국정보보호학회 충청지부 정보보호학술논문발표대회 포스터 발표", 
      "충남대학교 정보보호동아리 ARGOS 하계 집중 보안 교육 디지털 포렌식 트랙 강의", 
    ],
  },
  {
    year: "2025",
    activities: [
      "NSHC Singapore OSINT 교육 연수"
    ],
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">Timeline</h2>
        <div className="space-y-8">
          {timelineData.map((yearData, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">{yearData.year}</h3>
              <ul className="space-y-2">
                {yearData.activities.map((activity, idx) => (
                  <li key={idx} className="text-gray-300">
                    - {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
