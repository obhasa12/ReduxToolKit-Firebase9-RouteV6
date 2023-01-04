import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBaseCof";

const initialState = {
    authStats: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // signIn: (state, action) => {
        //     // signInWithEmailAndPassword(auth, ...action.payload)
        //     //     .then((data) => {
        //     //         console.log('login success')
        //     //         console.log(state.initialState)
        //     //     })
        //     //     .catch((err) => {
        //     //         console.error(err.message)
        //     //     })
        // },
        signOutAction: () => {
            signOut(auth)
                .then(() => console.log("Log Out succes"))
        }
    }
})

export const { signIn, signOutAction } = authSlice.actions
export default authSlice.reducer 