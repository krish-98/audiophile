import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  allProducts: [],
  error: null,
  singleProductLoading: false,
  singleProductError: null,
  singleProduct: {},
}

// Generates pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("/data/products.json")
    const result = await res.json()
    return result
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchSingleProduct: (state, action) => {
      const tempProduct = state.allProducts.find(
        (product) => product.slug === action.payload
      )

      state.singleProduct = tempProduct
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false

        state.allProducts = action.payload.products
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false
        state.error = `Error fetching products`
      })
  },
})

export const { fetchSingleProduct } = productSlice.actions

export default productSlice.reducer
