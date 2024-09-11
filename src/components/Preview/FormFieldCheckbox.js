import React from "react";

const FormFieldCheckbox = ({ checked, onChange, error }) => (
  <>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    {error && <div className="text-red-500 mt-1">{error}</div>}
  </>
);

export default FormFieldCheckbox;
