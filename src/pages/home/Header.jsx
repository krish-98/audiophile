import React, { useState } from "react"
import { Link } from "react-router-dom"
import ProductCategory from "../../components/ProductCategory"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ImCross } from "react-icons/im"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className="tab:hidden bg-pitch-black pt-7 px-5 relative">
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

          <div className="cursor-pointer">
            <AiOutlineShoppingCart className="text-white w-6 h-8" />
          </div>
        </div>
        {toggle && (
          <div className="tab:hidden absolute top-20 left-0 right-0 z-20 bg-gray-700 bg-opacity-50 h-screen">
            <ProductCategory />
          </div>
        )}
      </nav>

      <nav className="hidden tab:block bg-pitch-black pt-6 px-5 text-white">
        <div className="w-full max-w-[1158px] mx-auto">
          <div className="flex justify-between items-center border-b border-b-zinc-600 pb-8">
            <Link to="/">
              <p className="text-[1.7rem] font-extrabold cursor-pointer">
                audiophile
              </p>
            </Link>

            <ul className="flex gap-12 font-medium tracking-widest">
              <li className="hover:text-orange-accent">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-orange-accent">
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li className="hover:text-orange-accent">
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li className="hover:text-orange-accent">
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>

            <div className="cursor-pointer">
              <AiOutlineShoppingCart className="text-white w-6 h-8" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
