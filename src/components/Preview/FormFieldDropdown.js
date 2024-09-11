import React from "react";

const FormFieldDropdown = ({ value, onChange, options, error }) => (
  <>
    <select
      value={value || ""}
      onChange={onChange}
      className="w-full p-2 border rounded"
    >
      <option value="">Select an option</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <div className="text-red-500 mt-1">{error}</div>}
  </>
);

export default FormFieldDropdown;
