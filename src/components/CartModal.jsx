import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  cartClicked,
  cartTotal,
  decreaseQuanity,
  removeCartItems,
} from "../redux/features/cartSlice"

import EmptyCart from "../components/EmptyCart.svg"

const CartModal = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleDecreaseQuanity = (item) => {
    dispatch(decreaseQuanity(item))
  }
  const handleRemoveCartItems = (item) => {
    dispatch(removeCartItems(item))
  }

  useEffect(() => {
    dispatch(cartTotal())
  }, [handleDecreaseQuanity, handleAddToCart])

  const { cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.cart
  )

  return (
    <div className="absolute top-20 right-0 z-40">
      {cartItems && cartItems.length > 0 ? (
        <div className="bg-white py-2 px-10 rounded-xl">
          <div className="my-6 flex justify-between">
            <span className="text-lg font-semibold text-orange-accent">
              CART ({cartTotalQuantity})
            </span>
            <button
              onClick={() => handleRemoveCartItems(cartItems)}
              className="text-pitch-black text-opacity-70 underline hover:text-orange-accent duration-300"
            >
              Remove All
            </button>
          </div>

          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-6 my-4 mr-14"
              >
                <img
                  className="w-20 h-20 object-contain rounded-lg"
                  src={`/assets${item.cartImage}`}
                  alt={item.shortName}
                />

                <div className="flex flex-col">
                  <span className="font-semibold text-black">
                    {item.shortName}
                  </span>
                  <span className="font-semibold text-pitch-black text-opacity-70">
                    $ {item.price}
                  </span>
                </div>

                <div className="flex items-center">
                  <span
                    onClick={() => handleDecreaseQuanity(item)}
                    className="py-2 px-4 bg-gray-accent cursor-pointer hover:bg-gray-200 hover:text-orange-accent duration-300 tab:bg-black"
                  >
                    -
                  </span>
                  <span className="py-2 px-2 bg-gray-accent text-semibold tab:bg-black">
                    {item.cartQuantity}
                  </span>
                  <span
                    onClick={() => handleAddToCart(item)}
                    className="py-2 px-4 bg-gray-accent cursor-pointer hover:bg-gray-200 hover:text-orange-accent duration-300 tab:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
            ))}

          <div className="my-8 flex items-center justify-between">
            <p className="text-pitch-black text-opacity-60 font-medium text-lg">
              TOTAL
            </p>
            <p className="font-semibold text-lg text-black">
              $ {cartTotalAmount}
            </p>
          </div>

          <Link
            className="my-8 block text-center text-white font-semibold bg-orange-accent px-6 py-3 hover:bg-orange-300 duration-300"
            to="/checkout"
            onClick={() => dispatch(cartClicked())}
          >
            CHECKOUT
          </Link>
        </div>
      ) : (
        <div className="bg-white p-14 rounded-lg border border-orange-accent">
          <h2 className="text-xl text-center mb-2 font-semibold text-orange-accent h-36 w-56 uppercase">
            Your Cart is Empty
          </h2>
          <img className="h-36" src={EmptyCart} alt="An Empty Cart" />
        </div>
      )}
    </div>
  )
}

export default CartModal
