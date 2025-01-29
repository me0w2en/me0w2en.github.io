import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCogs } from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, label: "Home", href: "#profile" },
  { icon: <FaUser />, label: "About", href: "#skills" },
  { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
  { icon: <FaCogs />, label: "Timeline", href: "#timeline" },
  { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
];

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 햄버거 메뉴 상태
  const [isExpanded, setIsExpanded] = useState(false); // 데스크톱 사이드바 상태

  return (
    <>
      {/* 햄버거 버튼 (모바일 전용) */}
      <button
        className="fixed top-4 left-4 z-50 text-3xl text-green-400 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white z-50 shadow-lg md:hidden"
        >
          <ul className="mt-16 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 p-4 hover:bg-gray-800 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)} // 클릭 시 메뉴 닫기
                >
                  <span className="text-2xl text-green-400">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.aside>
      )}

      {/* 데스크톱 사이드바 */}
      <motion.aside
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-90 text-white z-50 shadow-lg hidden md:block ${
          isExpanded ? "w-64" : "w-20"
        } transition-all duration-300`}
        onMouseEnter={() => setIsExpanded(true)} // 확장
        onMouseLeave={() => setIsExpanded(false)} // 축소
      >
        {/* 로고 */}
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <span className="text-2xl font-bold text-green-400">
            {isExpanded ? "MyPortfolio" : "MP"}
          </span>
        </div>

        {/* 메뉴 항목 */}
        <ul className="mt-4 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center gap-4 p-4 hover:bg-gray-800 rounded-lg transition-all"
              >
                <span className="text-2xl text-green-400">{item.icon}</span>
                {isExpanded && <span className="text-sm">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </motion.aside>
    </>
  );
};
