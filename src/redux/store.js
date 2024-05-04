import { configureStore } from "@reduxjs/toolkit";
import usuario from "./root-reducer";

/**
 * 
 */
export const store = configureStore({
    reducer: usuario
})