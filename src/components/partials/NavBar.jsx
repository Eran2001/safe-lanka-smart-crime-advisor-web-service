import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { mainNavItems } from "@/constant/data";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/60 dark:bg-black/30 backdrop-blur-xl shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-primary-700 text-white p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md">
              <SecurityRoundedIcon fontSize="medium" />
            </div>

            <span
              className={`text-xl font-bold tracking-tight text-black dark:text-white ${
                isScrolled ? "" : ""
              }`}
            >
              Safe<span className="text-primary-500">Lanka</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`relative px-4 py-2 text-sm font-medium text-black dark:text-white ${
                    isActive ? "bg-slate-100 dark:bg-white/10" : ""
                  } rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-500 group`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <DarkModeToggle />

            <button
              className="text-black dark:text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-slate-200
                             dark:hover:bg-white/10 transition-all duration-500 group cursor-pointer"
            >
              Login
            </button>

            <button className="group bg-primary-500 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-primary-700/20 transition-all flex items-center gap-1 cursor-pointer">
              Register Officer
              <ChevronRightRoundedIcon
                fontSize="medium"
                className="hidden group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500"
              />
            </button>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/60 dark:hover:bg-muted/40 transition cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuRoundedIcon fontSize="medium" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition 
          ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-muted-700 
          rounded-l-3xl shadow-2xl z-50 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/40 transition"
            >
              <CloseRoundedIcon fontSize="small" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {mainNavItems.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-muted-600 dark:text-white 
                hover:bg-primary-100 hover:text-primary-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
            <button className="w-full py-3 rounded-xl hover:bg-slate-200/50 dark:hover:bg-muted-500/40 transition text-muted-700 dark:text-white font-semibold">
              Login
            </button>
            <button className="w-full bg-primary-700 text-white py-3 rounded-xl font-semibold shadow-md shadow-primary-700/20 hover:bg-primary-600 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
