import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { onCheckout } from "../../redux/features/globalSlice"

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    paymentMethod: "",
  })
  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    if (e.target.value.length === 0) {
      setFormErrors({ ...formErrors, [e.target.name]: "Field cannot be empty" })
    } else if (e.target.value.length > 0) {
      setFormErrors({ ...formErrors, [e.target.name]: "" })
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (Object.values(formData).length) {
      dispatch(onCheckout(true))
    }
  }

  return (
    <div className="bg-gray-accent">
      <div className="max-w-[1158px] mx-auto p-6">
        <h2
          onClick={() => navigate(-1)}
          className="text-pitch-black text-opacity-80 hover:underline"
        >
          Go Back
        </h2>

        <form onSubmit={handleFormSubmit} className="my-4 lg:flex lg:gap-6">
          <div className="bg-white py-4 px-6 rounded-md lg:w-[70%]">
            <h2 className="text-2xl font-bold uppercase tracking-wide my-4">
              Checkout
            </h2>

            {/* Biling Details */}
            <fieldset className="flex flex-col gap-3 lg:w-[80%] mx-auto">
              <h3 className="text-orange-accent uppercase text-sm font-bold mb-4">
                Billing Details
              </h3>

              <label className="flex justify-between" htmlFor="name">
                <span className="text-xs  font-bold text-black">Name</span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.name}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="Zayn Malik"
                required
              />

              <label className="flex justify-between" htmlFor="email">
                <span className="text-xs  font-bold text-black">
                  Email Address
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.email}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="zayn@mail.com"
                required
              />

              <label className="flex justify-between" htmlFor="phone">
                <span className="text-xs  font-bold text-black">
                  Phone Number
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.phone}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="+44 9876-5431"
                required
              />
            </fieldset>

            {/* Shipping info */}
            <fieldset className="flex flex-col gap-3 my-8 lg:w-[80%] mx-auto">
              <h3 className="text-orange-accent uppercase text-sm font-bold mb-4">
                Shipping info
              </h3>

              <label className="flex justify-between" htmlFor="address">
                <span className="text-xs  font-bold text-black">
                  Your Address
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.address}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="1137 Williams Avenue"
                required
              />

              <label className="flex justify-between" htmlFor="zipcode">
                <span className="text-xs  font-bold text-black">ZIP Code</span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.zipcode}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                name="zipcode"
                id="zipcode"
                value={formData.zipcode}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="11001"
                required
              />

              <label className="flex justify-between" htmlFor="city">
                <span className="text-xs  font-bold text-black">City</span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.city}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="London"
                required
              />

              <label className="flex justify-between" htmlFor="country">
                <span className="text-xs  font-bold text-black">Country</span>
                <span className="text-xs text-orange-accent font-semibold">
                  {formErrors.country}
                </span>
              </label>
              <input
                className="border border-gray py-3 pl-3 rounded-lg focus:outline-orange-accent placeholder:text-sm"
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleFormChange}
                onBlur={handleBlur}
                placeholder="United Kingdom"
                required
              />
            </fieldset>

            {/* Payment Details */}
            <fieldset className="md:w-[80%] mx-auto">
              <h3 className="text-orange-accent uppercase text-sm font-bold mb-4">
                Payment Details
              </h3>

              <p className="text-xs text-black font-bold">Payment Method</p>

              <div className="flex flex-col my-4 gap-4">
                <label
                  className="border border-gray-300 p-4 cursor-pointer rounded-lg"
                  htmlFor="e-money"
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="e-money"
                    value="e-money"
                    onChange={handleFormChange}
                    required
                  />
                  <span className="ml-4 font-semibold">e-Money</span>
                </label>

                <label
                  className="border border-gray-300 p-4 cursor-pointer rounded-lg"
                  htmlFor="cod"
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    onChange={handleFormChange}
                    required
                  />
                  <span className="ml-4 font-semibold">Cash on Delivery</span>
                </label>
              </div>

              {formData.paymentMethod === "cod" && (
                <div className="flex justify-between mt-8 mb-4 gap-6">
                  <img
                    src="/assets/images/checkout/icon-cash-on-delivery.svg"
                    alt="cash on delivery icon"
                  />
                  <p className="text-pitch-black text-opacity-75 ">
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </fieldset>
          </div>

          <div className="my-6 bg-white py-4 px-6 rounded-md lg:w-[30%] lg:my-0 lg:self-start">
            <h2 className="text-xl my-4 font-bold tracking-wide uppercase">
              Summary
            </h2>
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between my-4 mt-6"
                >
                  <img
                    className="w-14 object-contain rounded-lg"
                    src={`/assets${item.cartImage}`}
                    alt={item.shortName}
                  />

                  <div className="flex flex-col mr-auto ml-6">
                    <span className="font-semibold text-black text-sm">
                      {item.shortName}
                    </span>
                    <span className="font-semibold text-pitch-black text-opacity-70">
                      $ {item.price}
                    </span>
                  </div>

                  <div className="">
                    <span className="py-2 px-2 text-semibold">
                      x{item.cartQuantity}
                    </span>
                  </div>
                </div>
              ))}

            <div className="mt-6 flex items-center justify-between">
              <p className="text-pitch-black text-opacity-60 font-medium text-base">
                TOTAL
              </p>
              <p className="font-semibold text-base text-black">
                $ {cartTotalAmount}
              </p>
            </div>

            <div className="my-4 flex items-center justify-between">
              <p className="text-pitch-black text-opacity-60 font-medium text-base">
                SHIPPING
              </p>
              <p className="font-semibold text-base text-black">$ 50</p>
            </div>

            <div className="my-4 flex items-center justify-between">
              <p className="text-pitch-black text-opacity-60 font-medium text-base">
                GRAND TOTAL
              </p>
              <p className="font-semibold text-base text-black">
                $ {cartTotalAmount + 50}
              </p>
            </div>

            <button
              type="submit"
              disabled={cartTotalAmount === 0 ? true : false}
              className={`my-8 w-full text-center text-white font-semibold bg-orange-accent px-6 py-3 hover:bg-orange-300 duration-300 uppercase ${
                cartTotalAmount === 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              continue & pay
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
