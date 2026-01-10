import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSkin } from "@/store/layoutSlice";

const useSkin = () => {
  const dispatch = useDispatch();
  const skin = useSelector((state) => state.layout.skin);

  const setSkin = (mode) => dispatch(handleSkin(mode));

  useEffect(() => {
    const body = document.body;

    body.classList.remove("skin--default", "skin--bordered");

    if (skin === "default") {
      body.classList.add("skin--default");
    }

    if (skin === "bordered") {
      body.classList.add("skin--bordered");
    }
  }, [skin]);

  return [skin, setSkin];
};

export default useSkin;
