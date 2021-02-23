import { configureStore } from '@reduxjs/toolkit';
import { timeSlice } from './slices/timeSlice';

const store = configureStore({
  reducer: {
    time: timeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
