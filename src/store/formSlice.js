import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formConfig: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormConfig(state, action) {
      state.formConfig = action.payload;
    },
    saveForm(state) {
      localStorage.setItem("savedFormConfig", JSON.stringify(state.formConfig));
    },
    loadForm(state) {
      const savedForm = localStorage.getItem("savedFormConfig");
      if (savedForm) {
        state.formConfig = JSON.parse(savedForm);
      } else {
        state.formConfig = [];
      }
    },
  },
});

export const { setFormConfig, saveForm, loadForm } = formSlice.actions;
export default formSlice.reducer;
