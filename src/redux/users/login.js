import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_URL = 'http://127.0.0.1:8000/login/';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  try {
    const response = await axios.post(LOGIN_URL, credentials, { mode: 'cors' });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
});

const logInSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        user: action.payload,
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: true,
        error: action.err.message,
      }));
  },
});

export default logInSlice.reducer;
