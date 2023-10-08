import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginSlice = createSlice({
    name: 'login',

    initialState: {
        loading: '',
        user: null
    },

    extraReducers: {
        // state loading
    }
});

export default loginSlice.reducer;