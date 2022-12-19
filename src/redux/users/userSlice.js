import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "../../service/userService";


const initialState = {
    currentUser: {}
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state,action)=>{
            state.currentUser = action.payload
            console.log(action)
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    }
})


export default userSlice.reducer