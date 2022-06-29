// redux-toolkit method
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

/* const initialState = { counter: 0, showCounter: false };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //payload is a default name in redux toolkit
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});  */

/* const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});  */

/* const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
}); */

/* export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;  */

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
