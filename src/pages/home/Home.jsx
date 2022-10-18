import React from "react"
import { Link } from "react-router-dom"
import BestGear from "../../components/BestGear"
import ProductCategory from "../../components/ProductCategory"
import "./Home.css"

const Home = () => {
  return (
    <main>
      <section
        id="hero"
        // style={{
        //   "background-image":
        //     "url('/assets/images/home/desktop/image-hero.jpg')",
        // }}
        className="bg-pitch-black bg-contain bg-no-repeat bg-center"
      >
        <div className="w-[85%] mx-auto max-w-[1150px] py-28 text-center tab:text-left">
          <div className="flex flex-col items-center justify-center gap-10 tab:items-start tab:w-[50%]">
            <strong className="text-gray-400 tracking-[.5rem]">
              NEW PRODUCT
            </strong>
            <h1 className="text-4xl xs:text-5xl font-bold text-white -mt-4 tab:text-6xl">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="text-gray-accent text-sm xs:w-[70%]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones/xx99-mark-two-headphones">
              <button className="bg-orange-accent text-white break-words px-8 py-3 hover:bg-orange-300">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1158px] mx-auto">
        <div className="m-8 my-10 xs:my-20">
          <ProductCategory />
        </div>

        <div className="m-8">
          <div className="bg-orange-accent rounded-lg">
            <div className="flex flex-col items-center justify-center py-16 gap-16 tab:flex-row tab:gap-0 tab:pb-0 tab:pt-28">
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet="/assets/images/home/desktop/image-speaker-zx9.png"
                />
                <source
                  media="(min-width:480px)"
                  srcSet="/assets/images/home/tablet/image-speaker-zx9.png"
                />
                <img
                  className="w-40 object-contain tab:w-[60%] tab:ml-20 "
                  src="/assets/images/home/mobile/image-speaker-zx9.png"
                  alt="ZX9 SPEAKER"
                />
              </picture>

              <div className="flex flex-col gap-6 p-4 text-center tab:text-left">
                <h2 className="text-white text-4xl font-bold xs:text-5xl">
                  ZX9 SPEAKER
                </h2>
                <p className="text-white opacity-90 font-extralight max-w-md">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link to="/speakers/zx9-speaker" className="pt-10">
                  <button className="bg-pitch-black text-white py-3 px-8 hover:bg-gray-600 duration-300">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <div>
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet="/assets/images/home/desktop/image-speaker-zx7.jpg"
                />
                <source
                  media="(min-width:480px)"
                  srcSet="/assets/images/home/tablet/image-speaker-zx7.jpg"
                />
                <img
                  className="rounded-lg xs:w-full"
                  src="/assets/images/home/mobile/image-speaker-zx7.jpg"
                  alt="ZX7 SPEAKER"
                />
              </picture>
              <div className="relative">
                <div className="absolute bottom-20 left-6 xs:left-16 ">
                  <h2 className=" text-3xl font-bold ">ZX7 SPEAKER</h2>
                  <Link to="/speakers/zx7-speaker">
                    <button className="border border-pitch-black bg-gray-accent font-semibold py-3 px-8 mt-6 hover:text-white hover:bg-pitch-black duration-300">
                      SEE PRODUCT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 xs:grid-cols-2">
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet="/assets/images/home/desktop/image-earphones-yx1.jpg"
                />
                <source
                  media="(min-width:480px)"
                  srcSet="/assets/images/home/tablet/image-earphones-yx1.jpg"
                />
                <img
                  className="rounded-lg "
                  src="/assets/images/home/mobile/image-earphones-yx1.jpg"
                  alt="YX1 EARPHONES"
                />
              </picture>

              <div className="bg-gray-accent py-12 px-8 rounded-lg xs:py-6 xs:px-6 tab:py-20 tab:px-10">
                <h2 className="text-3xl font-bold">YX1 EARPHONES</h2>
                <Link to="/earphones/yx1-earphones">
                  <button className="border border-pitch-black bg-gray-accent font-semibold py-3 px-8 mt-6 hover:text-white hover:bg-pitch-black duration-300">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Best Gear */}
          <BestGear />
        </div>
      </section>
    </main>
  )
}

export default Home
