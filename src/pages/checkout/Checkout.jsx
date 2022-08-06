import React from "react"

const Checkout = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto">
        <h2>Go Back</h2>
        <form>
          <div>
            <h2>Checkout</h2>

            {/* Biling Details */}
            <div>
              <h3>Billing Details</h3>

              <label htmlFor="">
                <span>Name</span>
                <span>Field cannot be empty</span>
                <input type="text" required />
              </label>
              <label htmlFor="">
                <span>Email Address</span>
                <span>Field cannot be empty</span>
                <input type="email" required />
              </label>
              <label htmlFor="">
                <span>Phone Number</span>
                <span>Field cannot be empty</span>
                <input type="text" required />
              </label>
            </div>

            {/* SHipping info */}
            <div>
              <h3>Shipping info</h3>

              <label htmlFor="">
                <span>Your Address</span>
                <span>Field cannot be empty</span>
                <input type="text" required />
              </label>
              <label htmlFor="">
                <span>ZIP Code</span>
                <span>Field cannot be empty</span>
                <input type="email" required />
              </label>
              <label htmlFor="">
                <span>City</span>
                <span>Field cannot be empty</span>
                <input type="text" required />
              </label>
              <label htmlFor="">
                <span>Country</span>
                <span>Field cannot be empty</span>
                <input type="text" required />
              </label>
            </div>

            <div>
              <h3>Payment Details</h3>

              <p>Payment Method</p>

              <div>
                <label htmlFor="">
                  <input type="radio" name="" id="" /> e-Money
                </label>
                <label htmlFor="">
                  <input type="radio" name="" id="" /> Cash on Delivery
                </label>
              </div>

              <div>
                <label htmlFor="">
                  e-Money Number
                  <input type="text" />
                </label>
                <label htmlFor="">
                  e-Money PIN
                  <input type="text" />
                </label>
              </div>
            </div>
          </div>

          <div>
            <h2>Summary</h2>

            <div>
              <img src="" alt="" />
              <div>
                <h3>ZX9</h3>
                <p>$ 4,500</p>
              </div>
              <p>x13</p>
            </div>
            <div>
              <div>
                <span>total</span>
                <span>$ 58,000</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>$ 50</span>
              </div>
              <div>
                <span>Vat (Included)</span>
                <span>$ 11,700</span>
              </div>
              <div>
                <span>Grand Total</span>
                <span>$ 70,250</span>
              </div>

              <button>Continue & Pay</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
