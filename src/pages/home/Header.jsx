import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="tab:hidden bg-pitch-black pt-7 px-5">
        <div className="flex justify-between items-center border-b border-b-gray-400 pb-8">
          <div className="cursor-pointer">
            <GiHamburgerMenu className="text-white w-6 h-8" />
          </div>

          <p className="text-white text-[1.7rem] font-extrabold cursor-pointer xs:mr-auto xs:pl-8">
            audiophile
          </p>

          <div className="cursor-pointer">
            <AiOutlineShoppingCart className="text-white w-6 h-8" />
          </div>
        </div>
      </nav>

      <nav className="hidden tab:block bg-pitch-black pt-6 px-5 text-white">
        <div className="w-full max-w-[1158px] mx-auto">
          <div className="flex justify-between items-center border-b border-b-gray-400 pb-8">
            <p className="text-[1.7rem] font-extrabold cursor-pointer">
              audiophile
            </p>

            <ul className="flex gap-12 font-medium tracking-widest">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/">EARPHONES</Link>
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
