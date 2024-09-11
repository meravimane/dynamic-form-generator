import React from "react";

const formTypes = ["text", "textarea", "radio", "checkbox", "dropdown"];

const FieldTypeSelector = ({ id, formType, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={`type-${id}`} className="block font-medium mb-1">
        Field Type
      </label>
      <select
        name="type"
        id={`type-${id}`}
        onChange={onChange}
        value={formType}
        className="w-full p-2 border rounded mb-2"
      >
        {formTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FieldTypeSelector;
