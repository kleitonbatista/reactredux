import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {
        id: 1,
        name : "Kleiton Batista",
        email : "kleiton@gmail.com",
        address : null
    }
}

export const usuarioSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers : {
        criarUsuario : (state, action) =>{
            // console.log("aki no criar usuario", state.user.name)
            console.log("action", action.payload)

            return { ...state, user:{
                name: action.payload.name,
                email: action.payload.email,
                address: action.payload.email 
            }}
        }
    }
})

export const {criarUsuario} = usuarioSlice.actions
export default usuarioSlice.reducer