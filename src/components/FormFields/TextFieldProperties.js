import React from "react";

const TextFieldProperties = ({
  id,
  minLength,
  maxLength,
  pattern,
  onMinLengthChange,
  onMaxLengthChange,
  onPatternChange,
}) => (
  <div className="mb-2">
    <label htmlFor={`minLength-${id}`} className="block font-medium mb-1">
      Min Length
    </label>
    <input
      type="number"
      id={`minLength-${id}`}
      value={minLength || ""}
      onChange={(e) => onMinLengthChange(e.target.value)}
      className="w-full p-2 border rounded mb-2"
    />
    <label htmlFor={`maxLength-${id}`} className="block font-medium mb-1">
      Max Length
    </label>
    <input
      type="number"
      id={`maxLength-${id}`}
      value={maxLength || ""}
      onChange={(e) => onMaxLengthChange(e.target.value)}
      className="w-full p-2 border rounded mb-2"
    />
    <label htmlFor={`pattern-${id}`} className="block font-medium mb-1">
      Pattern (regex)
    </label>
    <input
      type="text"
      id={`pattern-${id}`}
      value={pattern || ""}
      onChange={(e) => onPatternChange(e.target.value)}
      className="w-full p-2 border rounded"
    />
  </div>
);

export default TextFieldProperties;
