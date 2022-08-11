import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "../features/productSlice/productSlice"
import cartSliceReducer from "../features/cartSlice/cartSlice"
import globalSliceReducer from "../features/globalSlice/globalSlice"

const store = configureStore({
  reducer: {
    products: productSliceReducer,
    cart: cartSliceReducer,
    global: globalSliceReducer,
  },
})

export default store
