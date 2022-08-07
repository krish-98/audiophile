import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipcode: "",
  city: "",
  country: "",
}

const Checkout = () => {
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)

  // if(formData.name === "")

  const handleFormChange = (e) => {
    setFormData(e.target.value)
  }

  const handleFormSubmit = () => {}

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
                <span className="text-xs text-black font-bold">Name</span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />

              <label className="flex justify-between" htmlFor="email">
                <span className="text-xs text-black font-bold">
                  Email Address
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />

              <label className="flex justify-between" htmlFor="phone">
                <span className="text-xs text-black font-bold">
                  Phone Number
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </fieldset>

            {/* Shipping info */}
            <fieldset className="flex flex-col gap-3 my-8 lg:w-[80%] mx-auto">
              <h3 className="text-orange-accent uppercase text-sm font-bold mb-4">
                Shipping info
              </h3>

              <label className="flex justify-between" htmlFor="address">
                <span className="text-xs text-black font-bold">
                  Your Address
                </span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleFormChange}
                required
              />

              <label className="flex justify-between" htmlFor="zipcode">
                <span className="text-xs text-black font-bold">ZIP Code</span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                name="zipcode"
                id="zipcode"
                value={formData.zipcode}
                onChange={handleFormChange}
                required
              />

              <label className="flex justify-between" htmlFor="city">
                <span className="text-xs text-black font-bold">City</span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleFormChange}
                required
              />

              <label className="flex justify-between" htmlFor="country">
                <span className="text-xs text-black font-bold">Country</span>
                <span className="text-xs text-orange-accent font-semibold">
                  Field cannot be empty
                </span>
              </label>
              <input
                className="border border-orange-accent py-3 pl-3 rounded-lg"
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleFormChange}
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
                  <input type="radio" name="payment-method" id="e-money" />
                  <span className="ml-4 font-semibold">e-Money</span>
                </label>
                <label
                  className="border border-gray-300 p-4 cursor-pointer rounded-lg"
                  htmlFor="cod"
                >
                  <input type="radio" name="payment-method" id="cod" />
                  <span className="ml-4 font-semibold">Cash on Delivery</span>
                </label>
              </div>

              <div className="flex justify-between mt-8 mb-4 gap-6">
                <img
                  src="/assets/images/checkout/icon-cash-on-delivery.svg"
                  alt="cash on delivery icon"
                />
                <p className="text-pitch-black text-opacity-75 ">
                  The 'Cash on Delivery' option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
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
              className="my-8 w-full text-center text-white font-semibold bg-orange-accent px-6 py-3 hover:bg-orange-300 duration-300 uppercase"
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
