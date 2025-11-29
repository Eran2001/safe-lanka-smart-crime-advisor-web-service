import React, { useState } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

import Icons from "@/components/ui/Icons";

const TextInput = ({
  type = "text",
  label,
  placeholder = "Add placeholder",
  classLabel = "text-sm font-medium text-gray-700 mb-2 cursor-pointer",
  className = "",
  classGroup = "",
  name,
  id,
  register,
  readonly = false,
  disabled = false,
  error,
  description,
  icon,
  hasIcon,
  horizontal = false,
  isMask = false,
  options = {},
  onChange,
  onFocus,
  value,
  defaultValue,
}) => {
  const inputId = id || name;

  return (
    <div
      className={`formGroup mb-4 ${
        horizontal ? "flex items-center gap-3" : ""
      } ${classGroup}`}
    >
      {label && (
        <label htmlFor={inputId} className={classLabel}>
          {label}
        </label>
      )}

      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        {hasIcon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-muted pointer-events-none">
            <Icons icon={icon} className="text-lg" />
          </span>
        )}

        {isMask ? (
          <Cleave
            id={inputId}
            name={name}
            className={`
              w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary
              focus:border-primary outline-none
              ${hasIcon ? "pl-10" : ""}
              ${className}
              ${error ? "border-danger" : "border-muted"}
            `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
            options={options}
            value={value}
            defaultValue={defaultValue}
            onFocus={onFocus}
          />
        ) : (
          <input
            type={type}
            id={inputId}
            name={name}
            className={`
              w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary
              focus:border-primary outline-none
              ${hasIcon ? "pl-10" : ""}
              ${className}
              ${error ? "border-danger" : "border-muted"}
            `}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
            onFocus={onFocus}
            value={value}
            defaultValue={defaultValue}
            {...(register ? register(name) : {})}
          />
        )}

        {error && <p className="text-sm text-danger mt-1">{error}</p>}

        {description && (
          <p className="text-xs text-muted mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TextInput;

/*

<TextInput
        label="Full Name"
        name="fullname"
        placeholder="Enter your name"
        onChange={(e) => console.log(e.target.value)}
      />

      <TextInput
        label="Email"
        name="email"
        placeholder="your@email.com"
        hasIcon
        icon="mdi:email-outline"
        onChange={(e) => console.log(e.target.value)}
      />

      <TextInput
        label="Password"
        name="password"
        type="password"
        error="Password is required."
      />

*/
