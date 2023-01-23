import { createSlice, createAsyncThunk }  from "@reduxjs/toolkit";
import { signOut} from "firebase/auth";
import { auth } from "../firebase/fireBaseCof";
import { signInWithEmailAndPassword } from "firebase/auth"

export const getUserData = createAsyncThunk("userData/getUserData", async (credetial) => {
    return signInWithEmailAndPassword(auth, ...credetial).then((user) => {
        const data = user.user
        return data
    }
)})

const initialState = {
    authErrorSignUp: null,
    authErrorSignIn: null,
    userData: {
        data: [],
        loading: false
    }
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.userData.loading = true
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.userData.loading = false;
                // state.userData.data = action.payload;
            })
            .addCase(getUserData.rejected, (state) => {
                state.userData.loading = false;
            })
    }
})

export const { signOutAction, errorSignUp, errorSignIn } = authSlice.actions
export default authSlice.reducer 