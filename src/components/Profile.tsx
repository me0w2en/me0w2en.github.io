import React from "react";
import { NetworkTraffic } from "@/components/NetworkTraffic"; // Canvas 기반 NetworkTraffic 컴포넌트 가져오기
import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white"
    >
      <NetworkTraffic />

      {/* <motion.img
        src="/profile.png"
        width={300}
        className="relative z-10 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      /> */}

      <motion.h1
        className="relative z-10 text-4xl font-bold text-green-400 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hello, I&apos;m [SOJIN]
      </motion.h1>

      <motion.p
        className="relative z-10 text-lg text-gray-300 text-center max-w-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I am passionate about Information Security and Digital Forensics. 
        My journey is driven by curiosity, problem-solving, and a desire 
        to secure digital systems.
      </motion.p>
    </section>
  );
};
