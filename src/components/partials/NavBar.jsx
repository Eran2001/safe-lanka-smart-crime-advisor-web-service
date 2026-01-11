import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import DarkModeToggle from "@/components/ui/DarkModeToggle";
import Drawer from "@/components/ui/Drawer";
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
            <div className="bg-primary-700 text-white dark:bg-muted-500 dark:text-muted-900 p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md">
              <SecurityRoundedIcon fontSize="medium" />
            </div>

            <span
              className={`text-xl font-bold tracking-tight text-muted-900 dark:text-white ${
                isScrolled ? "" : ""
              }`}
            >
              Safe
              <span className="text-primary-500 dark:text-muted-500">
                Lanka
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`relative px-4 py-2 text-sm font-medium text-muted-900 dark:text-white ${
                    isActive
                      ? "bg-muted-200 dark:text-muted-900! dark:bg-muted-100"
                      : "hover:bg-muted-200 dark:hover:text-muted-900 dark:hover:bg-muted-200"
                  } rounded-lg transition-all duration-500 group`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <DarkModeToggle />

            <button
              onClick={() => navigate("/login")}
              className="text-black dark:text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-slate-200
                             dark:hover:bg-muted-200 dark:hover:text-muted-900 transition-all duration-500 group cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="group bg-primary-500 hover:bg-primary-700 text-white dark:bg-slate-500 dark:hover:bg-muted-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-primary-700/20 dark:shadow-muted-700/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              Register Officer
              <ChevronRightRoundedIcon
                fontSize="medium"
                className="hidden group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500"
              />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-muted-900 dark:text-white hover:bg-muted-200 dark:hover:text-muted-900 dark:hover:bg-muted-200 transition cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuRoundedIcon fontSize="medium" />
            </button>
          </div>
        </div>
      </nav>

      <Drawer
        activeModal={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Menu"
        themeClass="w-[280px]"
      >
        <div className="flex flex-col gap-2">
          {mainNavItems.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-muted-900 dark:text-white hover:bg-muted-200
        dark:hover:text-muted-900 dark:hover:bg-muted-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
