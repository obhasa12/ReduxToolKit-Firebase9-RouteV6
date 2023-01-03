import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase/fireBaseCof";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const initialState = {
    authError: "miyi"
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
                const sign = async () => {
                    try{
                        const user = await signInWithEmailAndPassword(auth, ...action.payload)
                    }catch(err){
                        if(err.message){
                        }
                    }
                    console.log(state.authError)

                }
                sign()
            // signInWithEmailAndPassword(auth, ...action.payload)
            //     .then((data) => {
            //         console.log('login success')
            //         console.log(state.initialState)
            //     })
            //     .catch((err) => {
            //         console.error(err.message)
            //     })
        }
    }
})

export const { signIn } = authSlice.actions
export default authSlice.reducer 