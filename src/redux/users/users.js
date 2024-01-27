import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_API_URL = 'http://127.0.0.1:8000/api/users/';

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(BACKEND_API_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchUsers.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        users: action.payload,
      }))
      .addCase(fetchUsers.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.err.message,
      }));
  },
});

export default usersSlice.reducer;
