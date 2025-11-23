// import { useSelector, useDispatch } from "react-redux";

// const useMenuLayout = () => {
//   const dispatch = useDispatch();
//   const menuType = useSelector((state) => state.layout.type);

//   const setMenuLayout = (value) => {
//     dispatch(handleType(value));
//   };

//   return [menuType, setMenuLayout];
// };

// export default useMenuLayout;
import { useState, useEffect } from "react";

const useMenuLayout = () => {
  const [menuType, setMenuType] = useState(() => {
    const stored = localStorage.getItem("menuLayout");
    return stored ? stored : "vertical";
  });

  const setMenuLayout = (value) => {
    setMenuType(value);
    localStorage.setItem("menuLayout", value);
  };

  useEffect(() => {
    const body = document.body;

    body.classList.remove("layout-vertical", "layout-horizontal");
    body.classList.add(`layout-${menuType}`);
  }, [menuType]);

  return [menuType, setMenuLayout];
};

export default useMenuLayout;
