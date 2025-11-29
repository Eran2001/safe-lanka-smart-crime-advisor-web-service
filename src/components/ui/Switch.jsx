import React from "react";

const Switch = ({
  checked = false,
  onChange = () => {},
  disabled = false,
  id,
  className = "",
}) => {
  // eslint-disable-next-line react-hooks/purity
  const switchId = id || "switch-" + Math.random().toString(36).substr(2, 9);

  return (
    <label
      htmlFor={switchId}
      className={`relative inline-block w-9 h-5 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        id={switchId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="peer sr-only"
      />

      <span
        className="
          absolute inset-0 bg-gray-300 rounded-full 
          transition-colors duration-200 ease-in-out 
          peer-checked:bg-primary
          peer-disabled:opacity-50 peer-disabled:pointer-events-none
        "
      />

      <span
        className="
          absolute top-1/2 left-0.5 -translate-y-1/2 
          w-4 h-4 bg-white rounded-full shadow 
          transition-transform duration-200 ease-in-out 
          scale-90                       
          peer-checked:translate-x-full   
        "
      />
    </label>
  );
};

export default Switch;
