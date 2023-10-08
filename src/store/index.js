import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './reducer/login.reducer'

export const store = configureStore({
    reducer: {
        login: loginSlice,
    }
})