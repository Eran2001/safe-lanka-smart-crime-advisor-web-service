import React, { useState, useEffect } from "react";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import DarkModeToggle from "@/components/ui/DarkModeToggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Help", href: "#help" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-slate-200/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-900 text-white p-1.5 rounded-lg transition-transform group-hover:scale-110 duration-300">
              <SecurityRoundedIcon fontSize="medium" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-slate-900" : "text-slate-900"
              }`}
            >
              Safe<span className="text-blue-700">Lanka</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />

            <button className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">
              Login
            </button>

            <button className="group bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-700/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
              Register Officer
              <ChevronRightRoundedIcon
                fontSize="small"
                className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 -ml-2 group-hover:ml-0"
              />
            </button>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {!mobileMenuOpen && <MenuRoundedIcon fontSize="medium" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-slate-900">Menu</span>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer"
            >
              <CloseRoundedIcon fontSize="small" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-slate-100">
            <button className="w-full py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl transition-colors">
              Login
            </button>
            <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-700/20">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
