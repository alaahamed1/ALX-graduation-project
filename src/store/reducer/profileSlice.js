import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    profile: null,
    loading: false,
    error: null,
    isLoggedIn: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.profile = action.payload;
            state.isLoggedIn = true;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.profile = null;
            state.isLoggedIn = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = profileSlice.actions;

export const login = (values) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, values);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export default profileSlice.reducer;