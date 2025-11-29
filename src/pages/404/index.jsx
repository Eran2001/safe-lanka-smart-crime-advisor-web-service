import React from "react";
import { useNavigate } from "react-router-dom";

import NotFoundImg from "@/assets/images/404.jpg";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-primary mb-2">Oops!</h1>

      <p className="text-secondary text-lg mb-8">
        Sry we couldn't find the page.
      </p>

      <img
        src={NotFoundImg}
        alt="Unauthorized"
        className="w-[500px] h-auto mb-8"
      />

      <Button
        type="button"
        text="Go Back Home"
        onClick={() => navigate("/")}
        icon="mdi:arrow-left"
        iconPosition="left"
      />
    </div>
  );
};

export default NotFound;
