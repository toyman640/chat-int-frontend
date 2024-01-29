import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users';
import logInReducer from './users/login';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: logInReducer,
  },
});

export default store;
