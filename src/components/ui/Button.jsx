import React from "react";
import { Link } from "react-router-dom";

import Icons from "@/components/ui/Icons";

const Button = ({
  text = "Button",
  type = "button",
  isLoading = false,
  disabled = false,
  onClick,
  link,
  icon,
  iconPosition = "left",
  iconClass = "w-5 h-5",
  className = "bg-blue-600 text-white hover:bg-blue-700",
  loadingText = "Loading...",
}) => {
  const btnContent = (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${
        disabled || isLoading ? "cursor-not-allowed" : "cursor-pointer"
      }
        py-3 px-5 
        inline-flex items-center justify-center gap-x-2 
        text-sm font-medium rounded-lg 
        border border-transparent
        focus:outline-none
        transition-all
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <span
            className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full"
            role="status"
            aria-label="loading"
          ></span>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <Icons icon={icon} className={iconClass} />
          )}

          <span>{text}</span>

          {icon && iconPosition === "right" && (
            <Icons icon={icon} className={iconClass} />
          )}
        </>
      )}
    </button>
  );

  if (link) {
    return <Link to={link}>{btnContent}</Link>;
  }

  return btnContent;
};

export default Button;

// usage

{
  /*
  <Button text="Save" />

  <Button text="Add Crime Record" icon="mdi:plus" iconPosition="left" />

  <Button text="Next" icon="mdi:arrow-right" iconPosition="right" />

  <Button isLoading={true} loadingText="Saving..." />
*/
}
