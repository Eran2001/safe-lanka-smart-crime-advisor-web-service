const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  id,
  className = "",
}) => {
  const inputId = id || `${name}-${value}`;

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="shrink-0 mt-0.5 border-white w-4 h-4 rounded-full accent-primary focus:ring-blue-700"
      />

      <label htmlFor={inputId} className="text-sm ms-2 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Radio;
