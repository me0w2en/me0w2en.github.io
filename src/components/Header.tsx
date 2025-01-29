import React from "react";
import "@/styles/particles.css";

export const Header = () => {
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 5}s`,
      };
      particles.push(<span key={i} style={style}></span>);
    }
    return particles;
  };

  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-white">
      <div className="particles">{generateParticles()}</div>
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome</h1>
        <p className="text-lg text-gray-400 mt-4">
          Information Security & Digital Forensics
        </p>
      </div>
    </header>
  );
};
