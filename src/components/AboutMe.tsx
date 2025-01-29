import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaBlog, FaGraduationCap } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
            About Me
          </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Left: Animated Profile Picture */}
          <motion.div
            className="flex-shrink-0 mb-6 md:mb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/profile-photo.jpg" // 프로필 사진 경로
              alt="Profile"
              className="w-40 h-40 rounded-full shadow-lg"
            />
          </motion.div>

          {/* Right: Information */}
          <div className="text-center md:text-left">
            {/* Name and Title with animation */}
            <motion.h3
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SOJIN NA <span className="text-green-400">:)</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Cybersecurity Specialist | Passionate about Securing Digital Systems
            </motion.p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              {/* 연락처 정보 */}
              <div>
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>010-1234-5678</span>
              </div>
              <div>
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <span>example@gmail.com</span>
              </div>
              <div>
                <FaGithub className="inline-block text-green-400 mr-2" />
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
              <div>
                <FaBlog className="inline-block text-green-400 mr-2" />
                <a
                  href="https://tistory.com/your-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tistory Blog
                </a>
              </div>

              {/* 학력 정보 */}
              <div>
                <FaGraduationCap className="inline-block text-green-400 mr-2" />
                <span>Seoul National University</span>
              </div>
              <div>
                <FaGraduationCap className="inline-block text-green-400 mr-2" />
                <span>B.S. in Computer Science (2018-2022)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
