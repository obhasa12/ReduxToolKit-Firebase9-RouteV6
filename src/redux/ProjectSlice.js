import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import colRef from '../firebase/fireBaseCof'
import { addDoc, getDocs } from 'firebase/firestore'

export const getProjects = createAsyncThunk("projects/getProjects", async () => {
    return getDocs(colRef).then((snapshot) => snapshot.docs.map((project) => {
        return {...project.data(), id: project.id}
    }
    ))})

const initialState  = {
    // projects: [
    //     {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    //     {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    //     {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    // ]
    projects: [],
    loading: false
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState ,
    reducers:{
        createProject: (state, action) => {
            addDoc(colRef, action.payload)
                .then(() => {
                    console.log("Project has added")
                })
        }
    },
    // extraReducers: {
    //     [getProjects.pending]: (state) => {
    //         state.loading = true;
    //     },
    //     [getProjects.fulfilled]: (state, action) => {
    //         state.loading = false;
    //         state.projects = action.payload;
    //     },[getProjects.rejected]: (state) => {
    //         state.loading = false;
    //     }
    // }
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.loading = true
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(getProjects.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const { createProject } = projectSlice.actions
export default projectSlice.reducer