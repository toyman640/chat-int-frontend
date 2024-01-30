import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users';
import logInReducer from './users/login';
import messageReducer from './users/messages';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: logInReducer,
    messages: messageReducer,
  },
});

export default store;
