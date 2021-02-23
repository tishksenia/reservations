import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TimeRangeType = 'day' | 'week' | 'month';

interface TimeState {
  timeRangeType: TimeRangeType;
}

const initialState: TimeState = {
  timeRangeType: 'day',
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTimeRangeType: (state, action: PayloadAction<TimeRangeType>) => {
      state.timeRangeType = action.payload;
    },
  },
});

export const { setTimeRangeType } = timeSlice.actions;

export const selectTimeRangeType = (state: RootState): TimeRangeType =>
  state.time.timeRangeType;

export default timeSlice.reducer;
