import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ALL_URL = "https://newsapi.org/v2/top-headlines?country=id&apiKey=f5bf21211b53443993ac8a6834c3ba12" //ganti API Key dengan API Key akunmu


const initialState = {
    allState: [],
}

export const fetchAll = createAsyncThunk("all/fetchAll", async () => {
    const response = await axios.get(ALL_URL);
    return response.data.articles;
    
})

const allSlice = createSlice({
    name: "all",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            state.allState.push(...action.payload);
        })
    }
})

export default allSlice.reducer;

