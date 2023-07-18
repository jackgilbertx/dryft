import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mockUser from '../MockData/user.json';

type User = {
  name: string;
  email: string;
  phone: string;
};

type UserState = {
  user: User | {};
  loading: boolean;
  error: string | null
};

const initialState: UserState = {
  user: {},
  loading: false,
  error: null,
};

// TODO: add custom error handling
export const getUser = createAsyncThunk('user/getUser', async () => {
      //const res: UserState = await axios.get('');
      const res: Promise<User> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockUser);
        }, 2000);
      });
      return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const userReducer = userSlice.reducer;
