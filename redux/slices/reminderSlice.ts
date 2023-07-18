import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mockReminders from '../MockData/reminders.json';

type Reminder = {
  title: string;
  description: string;
};

type ReminderState = {
  reminders: Reminder[];
  loading: boolean;
  error: string | null;
};

const initialState: ReminderState = {
  reminders: [],
  loading: false,
  error: null,
};

// TODO: add custom error handling
export const getReminders = createAsyncThunk(
  'reminders/getReminders',
  async () => {
    //   const res: Reminder[] = await axios.get('../MockData/reminders.json');
    const res: Promise<Reminder[]> = new Promise((resolve, reject) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(mockReminders);
      }, 2000);
    });
    return res;
  }
);

const reminderSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReminders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReminders.fulfilled, (state, action) => {
        state.loading = false;
        state.reminders = action.payload;
      })
      .addCase(getReminders.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const reminderReducer = reminderSlice.reducer;
