import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../services/userServices";

const initialState = {
  currentUser: null,
  isLoading: false,
  updateLoading: false,
  isSuccesss: false,
  isError: false,
  message: "",
};

export const getCurrentUser = createAsyncThunk(
  "currentUser",
  async (user, thunkAPI) => {
    try {
      return await userServices.getUser(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  "currentUser",
  async (userProfile, thunkAPI) => {
    try {
      return await userServices.upateProfile(
        userProfile.profile,
        userProfile.accessToken
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const userSlice = createSlice({
  name: "CurrentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.isSuccesss = true;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default userSlice.reducer;
