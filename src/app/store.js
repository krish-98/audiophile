import { configureStore } from "@reduxjs/toolkit"
import dataSliceReducer from "../features/dataSlice/dataSlice"

const store = configureStore({
  reducer: { data: dataSliceReducer },
})

export default store
