import { createSlice } from "@reduxjs/toolkit";

type TypeToast = "success" | "error" | "warning" | null;

type ToastState = {
  message: string;
  type: TypeToast;
};

const initialState: ToastState = {
    message: "",
    type: null,
}
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast:(state, action) => {
      state.message = action.payload;
      state.type = action.payload;
    },
    clearToast:(state) => {
        state.message = '',
        state.type = null
    }
  },
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
