import React from "react"
import { Link } from "react-router-dom"
import { ProductCategory, BestGear } from "../../components"

const Earphones = () => {
  return (
    <div>
      <div className="bg-pitch-black">
        <h1 className="text-white font-bold text-3xl text-center py-10 tracking-wider xs:py-24 xs:text-4xl">
          EARPHONES
        </h1>
      </div>

      <div className="max-w-[1158px] mb-24 mx-auto">
        {/* YX1 WIRELESS EARPHONES */}
        <div className="mt-20 px-6 tab:flex">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-earphones/desktop/image-yx1-earphones.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-earphones/tablet/image-yx1-earphones.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%]"
              src="/assets/images/category-earphones/mobile/image-yx1-earphones.jpg"
              alt="YX1 WIRELESS EARPHONES"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <strong className="text-orange-accent tracking-[.5em] font-medium">
              NEW PRODUCT
            </strong>
            <h2 className="font-bold text-3xl">YX1 WIRELESS EARPHONES</h2>
            <p className="text-pitch-black opacity-75">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link
              to="yx1-earphones"
              className="bg-orange-accent text-white py-3 px-8 hover:bg-orange-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="my-16">
          <ProductCategory />
        </div>

        <div className="px-6">
          <BestGear />
        </div>
      </div>
    </div>
  )
}

export default Earphones
