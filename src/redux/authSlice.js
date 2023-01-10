import { createSlice, current  } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db  } from "../firebase/fireBaseCof";
import { doc, setDoc } from "firebase/firestore";


const initialState = {
    authError: "error bos"
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStatus:(state, action) => {
            state.authError = action.payload
        },
        signOutAction: () => {
            signOut(auth)
                .then(() => console.log("Log Out succes"))
        },
        signUp: (state, action) => {
            const dummy = [2] 
            createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                .then((cred) => {
                    return setDoc(doc(db, "users", cred.user.uid),{
                        firtsName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        initials: action.payload.firstName[0] + action.payload.lastName[0]
                    })
                }).then(() => {
                    console.log("user created")
                })
                .catch((err) => {
                    console.log(err.message)
                    return state.authError = err.message
                })
        }
    }
})

export const { signUp, signOutAction, authStatus } = authSlice.actions
export default authSlice.reducer 