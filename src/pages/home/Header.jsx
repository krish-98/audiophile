import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import ProductCategory from "../../components/ProductCategory"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import CartModal from "../../components/CartModal"
import { useSelector, useDispatch } from "react-redux"
import { cartClicked } from "../../features/cartSlice/cartSlice"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { cartModal, cartTotalQuantity } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive && "rgb(216, 125, 74)",
    }
  }

  const handleCartClick = () => {
    dispatch(cartClicked())
  }

  return (
    <header>
      {/* Mobile Navbar */}
      <nav className="tab:hidden bg-pitch-black pt-7 px-5 relative ">
        <div className="flex justify-between items-center border-b border-b-zinc-600 pb-8">
          <div className="cursor-pointer">
            {!toggle ? (
              <GiHamburgerMenu
                className="text-white w-5 h-7"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <ImCross
                className="text-white w-5 h-7"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>

          <Link to="/">
            <p className="text-white text-[1.7rem] font-extrabold cursor-pointer xs:mr-auto xs:pl-8">
              audiophile
            </p>
          </Link>

          <div className="cursor-pointer relative">
            <AiOutlineShoppingCart
              onClick={() => handleCartClick()}
              className="text-white w-6 h-8"
            />
            <span className="absolute left-3 bottom-5 text-white bg-orange-accent py-1 px-2 rounded-full text-sm">
              {cartTotalQuantity}
            </span>
            {cartModal && <CartModal />}
          </div>
        </div>
        {toggle && (
          <div className="tab:hidden absolute top-20 left-0 right-0 z-20 bg-gray-700 bg-opacity-50 h-screen">
            <ProductCategory />
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden tab:block bg-pitch-black pt-6 px-5 text-white">
        <div className="w-full max-w-[1158px] mx-auto">
          <div className="flex justify-between items-center border-b border-b-zinc-600 pb-8">
            <NavLink to="/">
              <p className="text-[1.7rem] font-extrabold cursor-pointer">
                audiophile
              </p>
            </NavLink>

            <ul className="flex gap-12 font-medium tracking-widest">
              <li className="hover:text-orange-accent">
                <NavLink to="/" style={navLinkStyles}>
                  HOME
                </NavLink>
              </li>
              <li className="hover:text-orange-accent">
                <NavLink to="/headphones" style={navLinkStyles}>
                  HEADPHONES
                </NavLink>
              </li>
              <li className="hover:text-orange-accent">
                <NavLink to="/speakers" style={navLinkStyles}>
                  SPEAKERS
                </NavLink>
              </li>
              <li className="hover:text-orange-accent">
                <NavLink to="/earphones" style={navLinkStyles}>
                  EARPHONES
                </NavLink>
              </li>
            </ul>

            <div className="cursor-pointer relative">
              <AiOutlineShoppingCart
                onClick={() => handleCartClick()}
                className="text-white w-6 h-8"
              />
              <span className="absolute left-3 bottom-5 text-white bg-orange-accent py-1 px-2 rounded-full text-sm">
                {cartTotalQuantity}
              </span>
              {cartModal && <CartModal />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
