import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "./postService"

const initialState = {
    memory: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}
/* create a post*/
export const createPost = createAsyncThunk('/post/create', async (postData) => {

    try {
        return await postService.createPost(postData)
    } catch (error) {
        console.log(error)
    }
})
/* get a post*/
export const getPost = createAsyncThunk('/post/get', async () => {

    try {
        return await postService.getPost()
    } catch (error) {
        console.log(error)
    }
})
export const deletePost = createAsyncThunk('/post/delete/id', async (id) => {

    try {
        return await postService.deletePost(id)
    } catch (error) {
        console.log(error)
    }
})
export const updatePost = createAsyncThunk('/post/update/:id', async (id, postData) => {

    try {
        return await postService.updatePost(id, postData)
    } catch (error) {
        console.log(error)
    }
})

/***create post slice */
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resets: (state) => {
            state.memory = []
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => { state.isLoading = true })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isError = false
                state.isSuccess = true
                state.memory.push(action.payload)
                state.message = ''
                state.isLoading = false
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPost.pending, (state) => { state.isLoading = true })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isError = false
                state.isSuccess = true
                state.memory = action.payload
                state.message = ''
                state.isLoading = false
            })
            .addCase(getPost.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isError = false
                state.isSuccess = true
                state.memory.filter((post) => post._id !== action.payload)
                state.message = ''
                state.isLoading = false
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isError = false
                state.isSuccess = true
                state.memory.push(action.payload)
                state.message = ''
                state.isLoading = false
            })
    }

})

export const { resets } = postSlice.actions
export default postSlice.reducer