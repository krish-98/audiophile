import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "../features/productSlice/productSlice"

const store = configureStore({
  reducer: { products: productSliceReducer },
})

export default store
