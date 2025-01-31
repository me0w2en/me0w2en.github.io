import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} me0w2en. All rights reserved.
        </p>
      </div>
    </footer>
  );
};