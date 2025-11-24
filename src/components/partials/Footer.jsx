import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#262262] text-white py-4 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} SafeLanka – Smart Crime Advisor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
