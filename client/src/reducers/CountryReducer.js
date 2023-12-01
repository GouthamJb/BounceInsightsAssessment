import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants/ApiConstants";

const initialState = {
  isRefreshing: null,
  countryData: null,
};

export const countryDetails = createAsyncThunk(
  "country",
  async (country, { rejectWithValue }) => {
    try {
      console.log(process.env.STAGE)
      const response = await fetch(`${BASE_URL}?name=${country}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    clearMessage: {
      reducer: (state) => {
        state.countryData = null;
        state.isRefreshing = null;
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(countryDetails.pending, (state) => {
      state.countryData = null;
      state.isRefreshing = true;
    });
    builder.addCase(countryDetails.fulfilled, (state, action) => {
      state.countryData = action?.payload;
      state.isRefreshing = false;
    });
  },
});

export const { clearMessage } = countrySlice.actions;

export default countrySlice.reducer;
