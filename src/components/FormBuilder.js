import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FromFields } from "./FormFields";
import { setFormConfig, saveForm, loadForm } from "../store/formSlice";

const FormBuilder = () => {
  const dispatch = useDispatch();
  const formConfig = useSelector((state) => state.form.formConfig);
  const [fields, setFields] = useState(formConfig);

  useEffect(() => {
    setFields(formConfig);
  }, [formConfig]);

  const handleRemoveField = (id) => {
    setFields(fields.filter((ele) => ele.id !== id));
  };

  const handleOptionsChange = (id, value) => {
    const options = value.split(",").map((opt) => opt.trim());
    updateField(id, "options", options);
  };

  const addField = () => {
    setFields([
      ...fields,
      { label: "", type: "text", options: [], id: Date.now() },
    ]);
  };

  const updateField = (id, key, value) => {
    const newFields = fields.map((ele) => {
      if (id === ele.id) {
        return { ...ele, [key]: value };
      }
      return ele;
    });
    setFields(newFields);
  };

  const handleSave = () => {
    dispatch(setFormConfig(fields));
    dispatch(saveForm());
  };

  const handleLoad = () => {
    dispatch(loadForm());
  };

  useEffect(() => {
    dispatch(setFormConfig(fields));
  }, [fields, dispatch]);

  return (
    <div className="p-4 w-full lg:w-1/2">
      <h2 className="text-xl font-bold mb-4">Form Builder</h2>
      {fields.map((field) => (
        <div key={field.id} className="border rounded-lg p-4 mb-4 relative">
          <button
            onClick={() => handleRemoveField(field.id)}
            className="w-7 absolute top-2 right-2"
          >
            <img src="/delete.png" />
          </button>
          <FromFields
            field={field}
            removeField={handleRemoveField}
            updateField={updateField}
            handleOptionsChange={handleOptionsChange}
          />
        </div>
      ))}
      <button
        onClick={addField}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Field
      </button>
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 ml-2"
      >
        Save Form
      </button>
      <button
        onClick={handleLoad}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4 ml-2"
      >
        Load Form
      </button>
    </div>
  );
};

export default FormBuilder;
