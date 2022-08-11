import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { onCheckout } from "../features/globalSlice/globalSlice"
import { removeCartItems } from "../features/cartSlice/cartSlice"

const CheckoutModal = () => {
  const dispatch = useDispatch()
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)

  const handleBackToHome = () => {
    dispatch(onCheckout(false))
    dispatch(removeCartItems())
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-slate-200 z-[1000] px-8">
      <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-[1000] px-8">
        <div className="w-96 lg:w-auto bg-white p-8 rounded-lg">
          <div>
            <img
              src="/assets/images/shared/desktop/icon-check-mark.svg"
              alt="check-mark"
            />
            <h1 className="text-3xl font-semibold uppercase my-4">
              Thank you for your order
            </h1>
            <p className="text-pitch-black text-opacity-50 font-medium">
              You will receive an email confirmation shortly.
            </p>

            <div className="mt-4 bg-[#f1f1f1] rounded-t-lg p-6">
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center my-5"
                  >
                    <img
                      className="w-14 rounded-lg"
                      src={`/assets/${item.cartImage}`}
                      alt=""
                    />
                    <div className="mr-auto ml-8">
                      <p className="font-bold">{item.shortName}</p>
                      <p>$ {item.price}</p>
                    </div>
                    <p>x {item.cartQuantity}</p>
                  </div>
                ))}
              {/* {cartItems.length > 1 && (
              <button>and {cartItems.length - 1} other item(s)</button>
            )} */}
            </div>

            <div className="bg-pitch-black p-6 rounded-b-lg">
              <h2 className="text-gray-400 uppercase font-semibold">
                Grand total
              </h2>
              <p className="text-white font-semibold">$ {cartTotalAmount}</p>
            </div>
          </div>

          <Link
            to="/"
            onClick={handleBackToHome}
            className="block text-white font-semibold bg-orange-accent w-full py-4 my-6 text-center uppercase tracking-wider hover:opacity-80 duration-300"
          >
            back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutModal
