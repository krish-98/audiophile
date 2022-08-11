import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  checkout: false,
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    onCheckout: (state, action) => {
      state.checkout = action.payload
    },
  },
})

export const { onCheckout } = globalSlice.actions
export default globalSlice.reducer
