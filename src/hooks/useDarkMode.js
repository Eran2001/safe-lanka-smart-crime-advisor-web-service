// import { useEffect } from "react";

// const useDarkMode = () => {
//    const isDark = useSelector((state) => state.layout.darkMode);

//   const setDarkMode = (mode) => {
//
//   };

//   useEffect(() => {
//     const body = window.document.body;
//     const classNames = {
//       dark: "dark",
//       light: "light",
//     };
//     if (isDark) {
//       body.classList.add(classNames.dark);
//       body.classList.remove(classNames.light);
//     } else {
//       body.classList.add(classNames.light);
//       body.classList.remove(classNames.dark);
//     }
//   }, [isDark]);

//   return [isDark, setDarkMode];
// };

// export default useDarkMode;
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
