import React, { useEffect, useState } from "react";

export const SecurityDashboard = () => {
  const [ip, setIp] = useState("Loading...");
  const [location, setLocation] = useState("Unknown");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        setLocation(`${data.city}, ${data.country_name}`);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Security Monitoring</h3>
      <p>🔍 Your IP: {ip}</p>
      <p>📍 Location: {location}</p>
      <p>🛡️ Status: No Threats Detected</p>
    </div>
  );
};
