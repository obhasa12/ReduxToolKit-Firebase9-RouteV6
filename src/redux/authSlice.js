import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBaseCof";

const initialState = {
    authStats: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOutAction: () => {
            signOut(auth)
                .then(() => console.log("Log Out succes"))
        },
        authState: (state, actions) => {
            state.authStats = actions.payload
        }
    }
})

export const { authState, signOutAction } = authSlice.actions
export default authSlice.reducer 