// import { useSelector, useDispatch } from "react-redux";

// const useSidebar = () => {
//   const dispatch = useDispatch();
//   const collapsed = useSelector((state) => state.layout.isCollapsed);

//   const setMenuCollapsed = (val) => dispatch(handleSidebarCollapsed(val));

//   return [collapsed, setMenuCollapsed];
// };

// export default useSidebar;
import { useState } from "react";

const useSidebar = () => {
  const [collapsed, setCollapsed] = useState(() => {
    const stored = localStorage.getItem("sidebarCollapsed");
    return stored ? JSON.parse(stored) : false;
  });

  const setMenuCollapsed = (val) => {
    setCollapsed(val);
    localStorage.setItem("sidebarCollapsed", JSON.stringify(val));
  };

  return [collapsed, setMenuCollapsed];
};

export default useSidebar;
