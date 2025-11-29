import React, { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 text-white p-1.5 rounded-lg">
            <Shield size={24} strokeWidth={2.5} />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              isScrolled ? "text-slate-900" : "text-slate-800"
            }`}
          >
            Safe<span className="text-blue-700">Lanka</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            Blog
          </a>
          <a
            href="#help"
            className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            Help
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">
            Login
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-700/20 transition-all transform hover:scale-105 active:scale-95">
            Register Officer
          </button>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium text-slate-700">
            Features
          </a>
          <a href="#about" className="text-lg font-medium text-slate-700">
            About
          </a>
          <a href="#blog" className="text-lg font-medium text-slate-700">
            Blog
          </a>
          <hr className="border-slate-100" />
          <button className="w-full text-center py-3 text-slate-600 font-semibold">
            Login
          </button>
          <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
