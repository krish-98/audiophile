import { configureStore } from "@reduxjs/toolkit"
import itemSliceReducer from "../features/itemSlice/itemSlice"

const store = configureStore({
  reducer: { item: itemSliceReducer },
})

export default store
