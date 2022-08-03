import React from "react"
import { Link } from "react-router-dom"
import ProductCategory from "../../components/ProductCategory"
import BestGear from "../../components/BestGear"

const Headphones = () => {
  return (
    <div>
      <div className="bg-pitch-black">
        <h1 className="text-white font-bold text-3xl text-center py-10 tracking-wider xs:py-24 xs:text-4xl">
          HEADPHONES
        </h1>
      </div>

      <div className="max-w-[1158px] mb-24 mx-auto">
        {/* XX99 MARK II HEADPHONES */}
        <div className="mt-20 px-6 tab:flex">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-headphones/desktop/image-xx99-mark-two.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-headphones/tablet/image-xx99-mark-two.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%]"
              src="/assets/images/category-headphones/mobile/image-xx99-mark-two.jpg"
              alt="XX99 MARK II HEADPHONES"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <strong className="text-orange-accent tracking-[.5em] font-medium">
              NEW PRODUCT
            </strong>
            <h2 className="font-bold text-3xl">XX99 MARK II HEADPHONES</h2>
            <p className="text-pitch-black opacity-75">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link
              to="xx99-mark-two-headphones"
              className="bg-orange-accent text-white py-3 px-8 hover:bg-orange-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* XX99 MARK I HEADPHONES */}
        <div className="mt-20 px-6 tab:flex tab:flex-row-reverse tab:justify-between">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-headphones/desktop/image-xx99-mark-one.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-headphones/tablet/image-xx99-mark-one.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%] tab:ml-auto"
              src="/assets/images/category-headphones/mobile/image-xx99-mark-one.jpg"
              alt="XX99 MARK I HEADPHONES"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <h2 className="font-bold text-3xl">XX99 MARK I HEADPHONES</h2>
            <p className="text-pitch-black opacity-75">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link
              to="xx99-mark-one-headphones"
              className="bg-orange-accent text-white py-3 px-8 hover:bg-orange-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* XX59 HEADPHONES */}
        <div className="mt-20 px-6 tab:flex">
          <picture>
            <source
              media="(min-width:992px)"
              srcSet="/assets/images/category-headphones/desktop/image-xx59.jpg"
            />
            <source
              media="(min-width:480px)"
              srcSet="/assets/images/category-headphones/tablet/image-xx59.jpg"
            />
            <img
              className="rounded-lg tab:w-[80%]"
              src="/assets/images/category-headphones/mobile/image-xx59.jpg"
              alt="XX59 HEADPHONES"
            />
          </picture>

          <div className="flex flex-col gap-6 justify-center items-center text-center mt-12 tab:items-start tab:text-left tab:w-[80%]">
            <h2 className="font-bold text-3xl">XX59 HEADPHONES</h2>
            <p className="text-pitch-black opacity-75">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link
              to="xx59-headphones"
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

export default Headphones
