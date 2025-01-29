import React from "react";

export const TerminalEffect = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-green-400 font-mono p-4">
      <p className="animate-pulse">root@portfolio:~$ whoami</p>
      <p className="text-green-300">Cyber Security Enthusiast</p>
      <p className="animate-pulse">root@portfolio:~$ ls -la</p>
      <p className="text-green-300">Profile Projects Achievements Contact</p>
    </div>
  );
};
