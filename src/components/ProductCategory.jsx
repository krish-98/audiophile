import React from "react"
import { data } from "../utils/data"
import { MdKeyboardArrowRight } from "react-icons/md"
// import image from "../assets/images/image-headphones.png"

const ProductCategory = () => {
  console.log(data)
  return (
    <div className="tab:hidden">
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.category} />
            <h1>{item.category}</h1>
            <div>
              <span>SHOP</span>
              <MdKeyboardArrowRight className="inline" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCategory
