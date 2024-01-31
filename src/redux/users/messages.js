import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MESSAGE_API_URL = 'http://127.0.0.1:8000/api/messages/';

// Async Thunk to fetch messages for a specific user
export const fetchMessages = createAsyncThunk('messages/fetchMessages', async (receiverUserId) => {
  try {
    const response = await axios.get(`${MESSAGE_API_URL}?receiver=${receiverUserId}`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch messages');
  }
});

// Async Thunk to send a new message
export const sendMessage = createAsyncThunk('messages/sendMessage', async (messageData) => {
  try {
    const response = await axios.post(MESSAGE_API_URL, messageData);
    return response.data;
  } catch (err) {
    throw new Error('Failed to send message');
  }
});

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchMessages.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        messages: action.payload,
      }))
      .addCase(fetchMessages.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(sendMessage.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(sendMessage.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      }))
      .addCase(sendMessage.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default messageSlice.reducer;
