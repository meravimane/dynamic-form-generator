import { useState } from "react";
import "./App.css"; // Ensure Tailwind is imported
import FromBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";

function App() {
  const [formConfig, setFormConfig] = useState([]);

  return (
    <div className="App flex flex-col lg:flex-row p-8 gap-4">
      <FromBuilder setFormConfig={setFormConfig} />
      <FormPreview fields={formConfig} />
    </div>
  );
}

export default App;
