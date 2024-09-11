import React from "react";

const FieldRequiredCheckbox = ({ id, required, onChange }) => (
  <div className="mb-2">
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={required}
        onChange={onChange}
        className="mr-2"
      />
      Required
    </label>
  </div>
);

export default FieldRequiredCheckbox;
