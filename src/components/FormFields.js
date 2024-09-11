import React, { useState } from "react";
import FieldTypeSelector from "./FormFields/FieldTypeSelector";
import FieldLabelInput from "./FormFields/FieldLabelInput";
import FieldOptionsInput from "./FormFields/FieldOptionsInput";
import FieldRequiredCheckbox from "./FormFields/FieldRequiredCheckbox";
import TextFieldProperties from "./FormFields/TextFieldProperties";

export const FromFields = ({ field, updateField, handleOptionsChange }) => {
  const [formType, setFormType] = useState(field.type);

  const handleMinLengthChange = (value) =>
    updateField(field.id, "minLength", value);
  const handleMaxLengthChange = (value) =>
    updateField(field.id, "maxLength", value);
  const handlePatternChange = (value) =>
    updateField(field.id, "pattern", value);

  return (
    <div className="mb-4">
      <FieldTypeSelector
        id={field.id}
        formType={formType}
        onChange={(e) => {
          updateField(field.id, "type", e.target.value);
          setFormType(e.target.value);
        }}
      />
      <FieldLabelInput
        id={field.id}
        label={field.label}
        onChange={(e) => updateField(field.id, "label", e.target.value)}
      />
      {(formType === "radio" || formType === "dropdown") && (
        <FieldOptionsInput
          id={field.id}
          options={field.options}
          onChange={(e) => handleOptionsChange(field.id, e.target.value)}
        />
      )}
      <FieldRequiredCheckbox
        id={field.id}
        required={field.required}
        onChange={(e) => updateField(field.id, "required", e.target.checked)}
      />
      {formType === "text" && (
        <TextFieldProperties
          id={field.id}
          minLength={field.minLength}
          maxLength={field.maxLength}
          pattern={field.pattern}
          onMinLengthChange={handleMinLengthChange}
          onMaxLengthChange={handleMaxLengthChange}
          onPatternChange={handlePatternChange}
        />
      )}
    </div>
  );
};
