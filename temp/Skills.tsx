import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "Linux", level: 85, icon: "🐧" },
  { name: "Wireshark", level: 80, icon: "🌐" },
  { name: "Kali Linux", level: 75, icon: "💻" },
  { name: "Burp Suite", level: 70, icon: "🔍" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="snap-start py-16 bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl text-green-400 mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                <motion.div
                  className="h-4 bg-green-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                ></motion.div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Skill Level: {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
