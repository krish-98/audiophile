import { configureStore } from "@reduxjs/toolkit"
import productSliceReducer from "../../redux/features/productSlice"
import cartSliceReducer from "../../redux/features/cartSlice"
import globalSliceReducer from "../../redux/features/globalSlice"

const store = configureStore({
  reducer: {
    products: productSliceReducer,
    cart: cartSliceReducer,
    global: globalSliceReducer,
  },
})

export default store
