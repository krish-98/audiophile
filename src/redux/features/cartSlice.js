import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
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

        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          {
            position: "top-left",
          }
        )
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        }
        state.cartItems.push(tempProduct)

        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    decreaseQuanity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info(`Decreased ${state.cartItems[itemIndex].name} quantity`, {
          position: "top-left",
        })

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartitems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )

        state.cartItems = nextCartitems

        toast.error(`${action.payload.name} removed from cart`, {
          position: "top-left",
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeCartItems: (state, action) => {
      state.cartItems = []

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    cartTotal: (state, action) => {
      const { amount, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const currentItem = cartItem.cartQuantity * cartItem.price
          cartTotal.amount = cartTotal.amount + currentItem

          cartTotal.quantity = cartTotal.quantity + cartItem.cartQuantity

          return cartTotal
        },
        {
          amount: 0,
          quantity: 0,
        }
      )

      state.cartTotalAmount = amount
      state.cartTotalQuantity = quantity
    },
  },
})

export const {
  addToCart,
  cartClicked,
  decreaseQuanity,
  removeCartItems,
  cartTotal,
} = cartSlice.actions
export default cartSlice.reducer
