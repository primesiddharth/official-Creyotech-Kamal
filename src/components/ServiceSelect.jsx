import { serviceOptions } from "../data/serviceOptions";

function ServiceSelect({
  value,
  onChange,
  name = "service",
  required = true,
  className = "",
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        w-full
        bg-transparent
        py-3
        outline-none
        text-slate-700
        dark:text-slate-200
        ${className}
      `}
    >
      <option value="" className="dark:bg-secondary">
        Select a Service
      </option>

      {serviceOptions.map((group) => (
        <optgroup
          key={group.label}
          label={group.label}
          className="font-semibold dark:bg-secondary"
        >
          {group.options.map((service) => (
            <option
              key={service}
              value={service}
              className="font-normal dark:bg-secondary"
            >
              {service}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

export default ServiceSelect;
