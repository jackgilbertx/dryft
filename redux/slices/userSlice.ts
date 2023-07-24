import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import mockUser from '../MockData/user.json'

type User = {
  name: string
  email: string
  id: string
}

type UserState = {
  user: User | null
  loading: boolean
  error: string | null
}

type Credentials = {
  email: string
  password: string
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
}

const loginMock = (credentials: Credentials) => {
  console.log(credentials)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        lastName: credentials.email,
        id: '123456',
      })
    }, 2000)
  })
}

const logoutMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 200)
  })
}

// TODO: add custom error handling
export const getUser = createAsyncThunk('user/getUser', async () => {
  //const res: UserState = await axios.get('');
  const res: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUser)
    }, 2000)
  })
  return res
})

// TODO: add custom error handling
export const login = createAsyncThunk(
  'user/login',
  async (credentials: Credentials, { rejectWithValue }) => {
    //const res: UserState = await axios.get('');
    try {
      const res = await loginMock(credentials)
      return res
    } catch (err) {
      console.error(err)
      return rejectWithValue(err.response.data)
    }
  }
)

// TODO: add custom error handling
export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    //const res: UserState = await axios.get('');
    try {
      await logoutMock()
    } catch (err) {
      console.error(err)
      return rejectWithValue(err.response.data)
    }
  }
)

// TODO: add custom error handling
export const sso = createAsyncThunk('user/sso', async () => {
  //const res: UserState = await axios.get('');
  const res: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUser)
    }, 2000)
  })
  return res
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getUser.pending, (state) => {
      //   state.loading = true
      // })
      // .addCase(getUser.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.user = action.payload
      // })
      // .addCase(getUser.rejected, (state) => {
      //   state.loading = false
      //   state.error = 'Error'
      // })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        state.error = 'Error'
      })

      .addCase(logout.fulfilled, (state) => {
        return initialState
      })
      .addCase(logout.rejected, (state) => {
        return initialState
      })
  },
})

export const userReducer = userSlice.reducer
