import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import useDarkMode from "@/hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDark, setDarkMode] = useDarkMode();

  const toggle = () => setDarkMode(!isDark);

  return (
    <button
      onClick={toggle}
      className="
        p-2 rounded-lg transition-all
        bg-slate-200 dark:bg-slate-700
        text-slate-700 dark:text-slate-200
        hover:bg-slate-300 dark:hover:bg-slate-600
        shadow-sm
      "
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
