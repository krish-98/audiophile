import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmounts: 0,
  cartModal: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartClicked: (state) => {
      state.cartModal = !state.cartModal
    },

    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
  },
})

export const { addToCart, cartClicked } = cartSlice.actions
export default cartSlice.reducer
