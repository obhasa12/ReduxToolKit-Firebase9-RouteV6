import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged, signOut} from "firebase/auth";
import { auth, db } from "../firebase/fireBaseCof";
import { getDoc } from "firebase/firestore";

// export const getUserData = createAsyncThunk("userData/getUserData",async () => {
//     return onAuthStateChanged(auth, (user) => {
//         return getDoc(db, "users", user.uid).then((userData) => console.log(userData))
//     })
// })

const initialState = {
    authErrorSignUp: null,
    authErrorSignIn: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        errorSignUp:(state, action) => {
            state.authErrorSignUp = action.payload
        },
        errorSignIn:(state, action) => {
            state.authErrorSignIn = action.payload
        },
        signOutAction: () => {
            signOut(auth)
                .then(() => console.log("Log Out succes"))
                .catch((err) => err.message)
        }
    }
})

export const { signOutAction, errorSignUp, errorSignIn } = authSlice.actions
export default authSlice.reducer 