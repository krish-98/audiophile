import React from "react"
import { data } from "../utils/data"
import { Link } from "react-router-dom"
import { MdKeyboardArrowRight } from "react-icons/md"

const ProductCategory = () => {
  return (
    <div className="tab:hidden flex flex-col items-center justify-center gap-16 w-full rounded-b-xl pt-16 pb-10 absolute top-28 left-0 right-0 cursor-pointer bg-white xs:flex-row xs:gap-4 xs:px-6">
      {data &&
        data.map((item) => (
          <div key={item.id} className="w-[90%] bg-gray-accent rounded-lg ">
            <Link
              to={item.link}
              className="flex flex-col items-center justify-center gap-4 rounded-lg relative bottom-14 -mb-10"
            >
              <img
                className="w-36 h-36 object-contain"
                src={item.image}
                alt={item.category}
              />
              <h2 className="text-black font-bold">{item.category}</h2>
              <div className="flex items-center">
                <span className="text-gray-800 font-light text-sm  hover:text-orange-accent">
                  SHOP
                </span>
                <span>
                  <MdKeyboardArrowRight className="inline fill-orange-400 w-6 h-8" />
                </span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ProductCategory
