const Checkbox = ({ id, disabled = false, value, name, onChange }) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={value}
        onChange={onChange}
        className="hidden"
      />

      <span
        className={`
          h-4 w-4 
          border
          rounded-md 
          flex justify-center items-center
          transition-all duration-200

          ${
            value
              ? "bg-secondary ring-2 ring-secondary border-white"
              : "bg-transparent border-primary"
          }
        `}
      >
        {value && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
