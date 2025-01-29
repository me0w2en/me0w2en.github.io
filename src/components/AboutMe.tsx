import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">About Me</h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Left: Profile Picture */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/profile-photo.jpg" // 프로필 사진 경로
              alt="Profile"
              className="w-40 h-40 rounded-full shadow-lg"
            />
          </div>

          {/* Right: Information */}
          <div className="text-center md:text-left">
            {/* Name and Title */}
            <h3 className="text-4xl font-bold mb-2">
              SOJIN NA <span className="text-green-400">:)</span>
            </h3>
            <p className="text-lg text-gray-400 mb-4">
              Cybersecurity Specialist | Passionate about Securing Digital Systems
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>010-1234-5678</span>
              </div>
              <div>
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <span>example@gmail.com</span>
              </div>
              <div>
                <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
                <span>Seoul, South Korea</span>
              </div>
              <div>
                <FaLinkedin className="inline-block text-green-400 mr-2" />
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <FaGithub className="inline-block text-green-400 mr-2" />
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>
              <div>
                <FaBlog className="inline-block text-green-400 mr-2" />
                <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h4 className="text-xl font-bold text-green-400 mb-2">Education</h4>
              <p>Seoul National University (Computer Science, 2018-2022)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
