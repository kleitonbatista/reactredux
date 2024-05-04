import { combineReducers } from "redux";
import { usuarioSlice } from "./user/slice";


export default combineReducers({
    usuario: usuarioSlice.reducer
})