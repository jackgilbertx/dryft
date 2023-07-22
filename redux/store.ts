import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { reminderReducer } from './slices/reminderSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
    reminders: reminderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(
  selector: (state: RootState) => T
): T => useSelector(selector);

