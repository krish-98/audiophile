import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    return fetch("/data/products.json").then((res) => res.json())
  }
)

const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    items: [],
    error: "",
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.isLoading = false
    },
    [fetchProducts.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default dataSlice.reducer
