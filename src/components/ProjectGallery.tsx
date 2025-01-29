import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Network Traffic Analyzer",
    description: "Visualizes and analyzes real-time network traffic.",
    details: "Built with React, Node.js, and D3.js for advanced traffic monitoring.",
    stack: ["React", "Node.js", "D3.js"],
  },
  {
    title: "Digital Forensics Toolkit",
    description: "Extracts and analyzes compromised system data.",
    details: "Developed using Python, Kali Linux, and SQLite for forensic investigation.",
    stack: ["Python", "Kali Linux", "SQLite"],
  },
  {
    title: "Cryptographic File Storage",
    description: "Securely stores files using AES encryption.",
    details: "Implemented with Java, Spring Boot, and MySQL for encrypted storage.",
    stack: ["Java", "Spring Boot", "MySQL"],
  },
];

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-green-400 text-black px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 모달 */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-400 text-black px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
