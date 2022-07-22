import { createSlice } from "@reduxjs/toolkit"

const itemSlice = createSlice({
  name: "item",
  initialState: [1, 3, 4, 657, true],
  reducers: {},
})

export default itemSlice.reducer
