import React from "react";
import Icon from "@/components/ui/Icon";

const BadgeRight = ({
  className = "bg-danger-500 text-white",
  label,
  icon,
  children,
  onClick,
}) => {
  return (
    <span className={`badge ${className}`}>
      {!children && (
        <span className="inline-flex items-center">
          {label}
          {icon && (
            <span
              className="inline-block ltr:ml-1 rtl:mr-1 cursor-pointer transition-colors duration-150 hover:text-red-500"
              onClick={onClick}
            >
              <Icon icon={icon} />
            </span>
          )}
        </span>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </span>
  );
};

export default BadgeRight;
