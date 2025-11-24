import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full shadow-sm border-b border-slate-200 bg-white py-3">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-[#262262]">
          SafeLanka
        </Link>

        <div className="flex gap-6 text-[16px] font-medium">
          <Link to="/" className="hover:text-[#262262] transition">
            Home
          </Link>
          <Link to="/blog" className="hover:text-[#262262] transition">
            Blog
          </Link>
          <Link to="/guide" className="hover:text-[#262262] transition">
            Guide
          </Link>
          <Link to="/about" className="hover:text-[#262262] transition">
            About
          </Link>
          <Link
            to="/login"
            className="bg-[#262262] text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#262262] text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
