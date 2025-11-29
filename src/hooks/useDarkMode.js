import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const setDarkMode = (mode) => {
    setIsDark(mode);
    localStorage.setItem("darkMode", JSON.stringify(mode));
  };

  useEffect(() => {
    const body = window.document.body;

    if (isDark) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [isDark]);

  return [isDark, setDarkMode];
};

export default useDarkMode;
