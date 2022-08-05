import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "../features/productSlice/productSlice"
import cartSliceReducer from "../features/cartSlice/cartSlice"

const store = configureStore({
  reducer: { products: productSliceReducer, cart: cartSliceReducer },
})

export default store
