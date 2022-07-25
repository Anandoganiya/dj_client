import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../services/userServices";

const initialState = {
  currentUser: null,
  isLoading: false,
  bookingRquest: [],
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
  "updateCurrentUser",
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

export const getPendingBookingRequest = createAsyncThunk(
  "getPendingRequest",
  async (accessToken, thunkAPI) => {
    try {
      return await userServices.getPendingRequest(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const getAcceptedBookingRequest = createAsyncThunk(
  "getAcceptedRequest",
  async (accessToken, thunkAPI) => {
    try {
      return await userServices.getAcceptedRequest(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const createDjWeek = createAsyncThunk(
  "createDjWeek",
  async (djUser, thunkAPI) => {
    try {
      return await userServices.createDj(djUser.djProfile, djUser.accessToken);
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
      })
      //pending request
      .addCase(getPendingBookingRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingBookingRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookingRquest = action.payload;
        state.isSuccesss = true;
      })
      .addCase(getPendingBookingRequest.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      //accepted request
      .addCase(getAcceptedBookingRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAcceptedBookingRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookingRquest = action.payload;
        state.isSuccesss = true;
      })
      .addCase(getAcceptedBookingRequest.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      //create dj
      .addCase(createDjWeek.fulfilled, (state, action) => {
        state.isSuccesss = true;
        console.log(action.payload);
      });
  },
});

export default userSlice.reducer;
