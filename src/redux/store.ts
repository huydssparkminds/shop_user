import { configureStore } from "@reduxjs/toolkit";
 import userReducer from './userSlice/UserSlice'
 import toastReducer from './toastSlice/ToastSlice'
import productSlice from "./productSlice/ProductSlice";
const store = configureStore({
    reducer:{
        user: userReducer,
        toast: toastReducer,
        product: productSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;