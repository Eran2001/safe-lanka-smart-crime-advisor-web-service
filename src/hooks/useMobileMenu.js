// import { useSelector, useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";

// const useMobileMenu = () => {
//   const dispatch = useDispatch();
//   const mobileMenu = useSelector((state) => state.layout.mobileMenu);
//   const location = useLocation();

//   const setMobileMenu = (val) => dispatch(handleMobileMenu(val));

//   return [mobileMenu, setMobileMenu];
// };

// export default useMobileMenu;
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useMobileMenu = () => {
  const [mobileMenu, setMobileMenuState] = useState(() => {
    const stored = localStorage.getItem("mobileMenu");
    return stored ? JSON.parse(stored) : false;
  });

  const location = useLocation();

  // 2️⃣ Setter function
  const setMobileMenu = (val) => {
    setMobileMenuState(val);
    localStorage.setItem("mobileMenu", JSON.stringify(val));
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  return [mobileMenu, setMobileMenu];
};

export default useMobileMenu;
