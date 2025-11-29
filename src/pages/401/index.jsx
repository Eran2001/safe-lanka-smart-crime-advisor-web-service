import React from "react";
import { useNavigate } from "react-router-dom";

import UnauthorizedImg from "@/assets/images/unauthorized.jpg";
import Button from "@/components/ui/Button";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-primary mb-2">Hold Up!</h1>

      <p className="text-secondary text-lg mb-8">
        You're not unauthorized for this page.
      </p>

      <img
        src={UnauthorizedImg}
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

export default UnauthorizedPage;
