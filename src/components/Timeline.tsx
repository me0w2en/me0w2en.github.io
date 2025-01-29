import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    activities: [
      "Started Information Security Studies",
      "Completed Ethical Hacking Certification",
      "Joined Cyber Security Club",
    ],
  },
  {
    year: "2024",
    activities: [
      "Internship at Cyber Security Firm",
      "Published Research Paper on Digital Forensics",
    ],
  },
  {
    year: "2025",
    activities: ["Built Network Security Tool", "Started Blogging about Cyber Security"],
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
