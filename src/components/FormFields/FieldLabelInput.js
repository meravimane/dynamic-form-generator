import React from "react";

const FieldLabelInput = ({ id, label, onChange }) => (
  <div className="mb-4">
    <label htmlFor={`label-${id}`} className="block font-medium mb-1">
      Field Label
    </label>
    <input
      type="text"
      id={`label-${id}`}
      value={label}
      onChange={onChange}
      className="w-full p-2 border rounded mb-2"
    />
  </div>
);

export default FieldLabelInput;
