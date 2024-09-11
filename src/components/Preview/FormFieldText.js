import React from "react";

const FormFieldText = ({ value, onChange, error }) => (
  <>
    <input
      type="text"
      value={value || ""}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
    {error && <div className="text-red-500 mt-1">{error}</div>}
  </>
);

export default FormFieldText;
