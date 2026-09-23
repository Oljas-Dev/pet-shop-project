import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentPageData = createAsyncThunk(
  "loader/fetchCurrentPageData",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(`http://localhost:3333/${payload}/all`);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const fetchCurrentProduct = createAsyncThunk(
  "loader/fetchCurrentProduct",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/products/${payload}`,
      );

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const pageReducer = createSlice({
  name: "pageLoader",
  initialState: {
    data: [],
    product: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentPageData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentPageData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchCurrentPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    builder
      .addCase(fetchCurrentProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchCurrentProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default pageReducer.reducer;
