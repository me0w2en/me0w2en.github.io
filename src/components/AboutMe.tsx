import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaBlog, FaGraduationCap } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-green-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <motion.div
            className="flex-shrink-0 mb-6 md:mb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/profile-2.png"
              alt="Profile"
              className="w-70 h-auto mr-10"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h3
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NA SOJIN <span className="text-green-400">:)</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Computer Science Student | Cybersecurity Enthusiast
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <span>sjan@outlook.kr</span>
              </div>
              <div>
                <FaGithub className="inline-block text-green-400 mr-2" />
                <a
                  href="https://github.com/me0w2en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
              <div>
                <FaBlog className="inline-block text-green-400 mr-2" />
                <a
                  href="https://me0w2en.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tistory Blog
                </a>
              </div>

              <div>
                <FaGraduationCap className="inline-block text-green-400 mr-2" />
                <span>Chungnam National University</span>
              </div>
              <div>
                <FaGraduationCap className="inline-block text-green-400 mr-2" />
                <span>B.S. in Computer Science (2023 - Present)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
