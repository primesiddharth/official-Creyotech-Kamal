function FormField({
  label,
  name,
  type = "text",
  icon,
  value,
  onChange,
  error,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors">
          {icon}
        </span>
        <input
          {...props}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-2 pl-11 pr-4 text-sm shadow-sm outline-none transition-all placeholder:text-gray-400 dark:border-zinc-700 dark:bg-zinc-800/60
            ${
              error
                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 dark:border-rose-500/40"
                : "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:focus:border-indigo-500"
            }`}
        />
      </div>
      {error && <p className="text-xs font-medium text-rose-500">{error}</p>}
    </div>
  );
}

export default FormField;
