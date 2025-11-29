import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import useDarkMode from "@/hooks/useDarkMode";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setDarkMode] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => setDarkMode(!isDark);

  return (
    <button
      onClick={toggle}
      className={`w-10 h-10 rounded-full transition-all text-muted dark:text-white hover:bg-slate-200 dark:hover:bg-muted ${
        isScrolled && isDark ? "text-muted!" : "text-blue-500"
      } cursor-pointer`}
    >
      {isDark ? (
        <LightModeRoundedIcon fontSize="small" className="animate-fade-in" />
      ) : (
        <DarkModeRoundedIcon fontSize="small" className="animate-fade-in" />
      )}
    </button>
  );
};

export default DarkModeToggle;
