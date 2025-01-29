import React from "react";

const education = [
  { year: "2020 - 2024", degree: "B.S. in Information Security", school: "Cyber University" },
  { year: "2024 - 2026", degree: "M.S. in Digital Forensics", school: "Tech Graduate School" },
];

const experience = [
  { year: "2025", role: "Cybersecurity Intern", company: "SecureTech Corp" },
  { year: "2026", role: "Junior Digital Forensic Analyst", company: "Forensic Labs Inc." },
];

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* 사용자 소개 */}
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">About Me</h2>
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hello! I'm an aspiring cybersecurity and digital forensics professional dedicated to securing digital systems 
            and uncovering hidden truths in the digital world.
          </p>
        </div>

        {/* 학력 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-lg font-bold text-green-400">{edu.degree}</p>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 경력 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Experience</h3>
          <ul className="space-y-4">
            {experience.map((exp, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-lg font-bold text-green-400">{exp.role}</p>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-500">{exp.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
