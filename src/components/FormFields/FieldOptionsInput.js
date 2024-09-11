import React from "react";

const FieldOptionsInput = ({ id, options, onChange }) => (
  <div className="mb-2">
    <label htmlFor={`options-${id}`} className="block font-medium mb-1">
      Add options separated by commas
    </label>
    <input
      type="text"
      id={`options-${id}`}
      onChange={onChange}
      value={options.join(", ")}
      className="w-full p-2 border rounded"
    />
  </div>
);

export default FieldOptionsInput;
