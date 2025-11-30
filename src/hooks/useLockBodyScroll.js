import { useEffect } from "react";

export default function useLockBodyScroll(lock) {
  useEffect(() => {
    const body = document.body;

    if (lock) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Add padding to prevent layout shift
      body.style.paddingRight = `${scrollbarWidth}px`;
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [lock]);
}
