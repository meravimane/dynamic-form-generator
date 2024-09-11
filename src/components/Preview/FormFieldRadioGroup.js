import React from "react";

const FormFieldRadioGroup = ({ value, onChange, options, name, error }) => (
  <div>
    {options.map((option, i) => (
      <div key={i} className="flex items-center mb-1">
        <input
          type="radio"
          name={name}
          value={option}
          checked={value === option}
          onChange={onChange}
          className="mr-2"
        />
        <label>{option}</label>
      </div>
    ))}
    {error && <div className="text-red-500 mt-1">{error}</div>}
  </div>
);

export default FormFieldRadioGroup;
