import React from "react";

const TextArea = ({
  label,
  name,
  id,
  placeholder = "Enter text...",
  classLabel = "text-sm font-medium text-gray-700 mb-2 cursor-pointer",
  className = "",
  classGroup = "",
  horizontal = false,
  register,
  readonly = false,
  disabled = false,
  error,
  description,
  value,
  defaultValue,
  onChange,
  onFocus,
  rows = 4,
}) => {
  const inputId = id || name;

  return (
    <div
      className={`formGroup mb-4 ${
        horizontal ? "flex items-start gap-3" : ""
      } ${classGroup}`}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={`${classLabel} ${horizontal ? "pt-2" : ""}`}
        >
          {label}
        </label>
      )}

      <div className={`${horizontal ? "flex-1" : ""}`}>
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          rows={rows}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          defaultValue={defaultValue}
          className={`
            w-full border rounded-lg px-3 py-2 text-sm 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            outline-none resize-none 
            ${className}
            ${error ? "border-red-500" : "border-gray-300"}
          `}
          {...(register ? register(name) : {})}
        />

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;

/*

<TextArea
        label="Message"
        name="message"
        placeholder="Write your message..."
        onChange={(e) => console.log(e.target.value)}
      />

      <TextArea
        label="Bio"
        name="bio"
        placeholder="Tell us about yourself"
        description="Max 200 characters."
      />

      <TextArea
        label="Comment"
        name="comment"
        error="Comment is required"
        placeholder="Write something..."
      />

      <TextArea
        label="Address"
        name="address"
        horizontal
        rows={5}
        placeholder="Enter full address"
      />

      <TextArea
        label="Feedback"
        name="feedback"
        register={register}
        error={errors.feedback?.message}
      />

*/
