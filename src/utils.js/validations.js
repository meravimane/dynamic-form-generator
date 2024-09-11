export const validateFields = (formConfig, formValues) => {
  const newErrors = {};
  formConfig.forEach((field) => {
    const value = formValues[field.label] || "";
    if (field.required && !value) {
      newErrors[field.label] = "This field is required.";
    }
    if (field.minLength && value.length < field.minLength) {
      newErrors[field.label] = `Minimum length is ${field.minLength}.`;
    }
    if (field.maxLength && value.length > field.maxLength) {
      newErrors[field.label] = `Maximum length is ${field.maxLength}.`;
    }
    if (field.pattern && !new RegExp(field.pattern).test(value)) {
      newErrors[field.label] = "Invalid format.";
    }
    if (field.type === "dropdown" && !value) {
      newErrors[field.label] = "Please select an option.";
    }
    if (field.type === "radio" && !value) {
      newErrors[field.label] = "Please select an option.";
    }
  });
  return newErrors;
};
