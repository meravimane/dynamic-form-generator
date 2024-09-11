import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FormFieldText from "./Preview/FormFieldText";
import FormFieldTextarea from "./Preview/FormFieldTextarea";
import FormFieldDropdown from "./Preview/FormFieldDropdown";
import FormFieldCheckbox from "./Preview/FormFieldCheckbox";
import FormFieldRadioGroup from "./Preview/FormFieldRadioGroup";
import { validateFields } from "../utils.js/validations";

const FormPreview = () => {
  const formConfig = useSelector((state) => state.form.formConfig);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset form values when formConfig changes
    const initialValues = formConfig.reduce((acc, field) => {
      acc[field.label] = field.type === "checkbox" ? false : "";
      return acc;
    }, {});
    setFormValues(initialValues);
    setErrors({});
  }, [formConfig]);

  const handleChange = (e, label) => {
    const { type, checked, value } = e.target;
    setFormValues({
      ...formValues,
      [label]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields(formConfig, formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted with values:", formValues);
    }
  };

  return (
    <div className="p-4 w-full lg:w-1/2">
      <h2 className="text-xl font-bold mb-4">Form Preview</h2>
      <form onSubmit={handleSubmit}>
        {formConfig.map((field) => {
          const fieldValue = formValues[field.label] || "";
          const fieldError = errors[field.label] || "";
          const handleInputChange = (e) => handleChange(e, field.label);

          return (
            <div key={field.label} className="mb-4">
              <label className="block font-medium mb-2">
                {field.label}:
                {field.type === "text" && (
                  <FormFieldText
                    value={fieldValue}
                    onChange={handleInputChange}
                    error={fieldError}
                  />
                )}
                {field.type === "textarea" && (
                  <FormFieldTextarea
                    value={fieldValue}
                    onChange={handleInputChange}
                    error={fieldError}
                  />
                )}
                {field.type === "dropdown" && (
                  <FormFieldDropdown
                    value={fieldValue}
                    onChange={handleInputChange}
                    options={field.options}
                    error={fieldError}
                  />
                )}
                {field.type === "checkbox" && (
                  <FormFieldCheckbox
                    checked={fieldValue}
                    onChange={handleInputChange}
                    error={fieldError}
                  />
                )}
                {field.type === "radio" && (
                  <FormFieldRadioGroup
                    value={fieldValue}
                    onChange={handleInputChange}
                    options={field.options}
                    name={`radio-group-${field.label}`} // Unique group name for radio buttons
                    error={fieldError}
                  />
                )}
              </label>
            </div>
          );
        })}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!formConfig.length}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
