import React from "react"
import { Link } from "react-router-dom"
import ProductCategory from "../../components/ProductCategory"
import BestGear from "../../components/BestGear"

const Speakers = () => {
  return (
    <div>
      <div className="bg-pitch-black">
        <h1 className="text-white font-bold text-3xl text-center py-10 tracking-wider xs:py-24 xs:text-4xl">
          SPEAKERS
        </h1>
      </div>

      <div className="max-w-[1158px] mb-24 mx-auto">
        {/* ZX9 SPEAKER */}
        <div className="mt-20 px-6 tab:flex">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-speakers/desktop/image-zx9.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-speakers/tablet/image-zx9.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%]"
              src="/assets/images/category-speakers/mobile/image-zx9.jpg"
              alt="ZX9 SPEAKER"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <strong className="text-orange-accent tracking-[.5em] font-medium">
              NEW PRODUCT
            </strong>
            <h2 className="font-bold text-3xl">ZX9 SPEAKER</h2>
            <p className="text-pitch-black opacity-75">
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link
              to="zx9-speaker"
              className="bg-orange-accent text-white py-3 px-8 hover:bg-orange-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* ZX7 SPEAKER */}
        <div className="mt-20 px-6 tab:flex tab:flex-row-reverse tab:justify-between">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-speakers/desktop/image-zx7.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-speakers/tablet/image-zx7.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%] tab:ml-auto"
              src="/assets/images/category-speakers/mobile/image-zx7.jpg"
              alt="ZX7 SPEAKER"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <h2 className="font-bold text-3xl">ZX7 SPEAKER</h2>
            <p className="text-pitch-black opacity-75">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <Link
              to="speakers/zx7-speaker"
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

export default Speakers
