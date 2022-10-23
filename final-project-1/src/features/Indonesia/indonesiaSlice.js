import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const INDONESIA_URL = "https://newsapi.org/v2/everything?q=indonesia&apiKey=e3cc0b43bdf04e9dbd8a27da31fbefc2" //ganti API Key dengan API Key akunmu

const initialState = {
    indonesiaState: [],
}

export const fetchIndonesia = createAsyncThunk("indonesia/fetchIndonesia", async () => {
    const response = await axios.get(INDONESIA_URL);
    return response.data.articles;
    
})

const indonesiaSlice = createSlice({
    name: "indonesia",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchIndonesia.fulfilled, (state, action) => {
            state.indonesiaState.push(...action.payload);
        })
    }
})

export default indonesiaSlice.reducer;

