import React from "react"
import { Link } from "react-router-dom"
import ProductCategory from "../../components/ProductCategory"
import Home_Speaker_1 from "../../assets/home/image-speaker-zx9.png"
import Home_Speaker_Mobile from "../../assets/home/image-speaker-zx7.jpg"
import Home_Speaker_Tab from "../../assets/home/image-speaker-zx7-tab.jpg"
import Home_Speaker_Desktop from "../../assets/home/image-speaker-zx7-desktop.jpg"
import Home_Earphone from "../../assets/home/image-earphones-yx1.jpg"
import Home_Best_Gear from "../../assets/home/image-best-gear.jpg"

const Home = () => {
  return (
    <main>
      <section className="bg-hero-mobile bg-contain bg-no-repeat bg-top bg-pitch-black">
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
        <div className="my-10 xs:my-20">
          <ProductCategory />
        </div>

        <div className="m-4">
          <div className="bg-orange-accent rounded-lg">
            <div className="flex flex-col items-center justify-center py-16 gap-16 tab:flex-row tab:justify-evenly ">
              <picture>
                <source media="(min-width:992px)" srcSet={Home_Speaker_1} />
                <source media="(min-width:480px)" srcSet={Home_Speaker_1} />
                <img
                  className="w-40 object-contain tab:w-full tab:mt-16"
                  src={Home_Speaker_1}
                  alt="Flowers"
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
                <Link to="/" className="pt-10">
                  <button className="bg-pitch-black text-white py-3 px-8 hover:bg-gray-600 duration-300">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 relative">
            <div>
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet={Home_Speaker_Desktop}
                />
                <source media="(min-width:480px)" srcSet={Home_Speaker_Tab} />
                <img
                  className="rounded-lg xs:w-full"
                  src={Home_Speaker_Mobile}
                  alt="Flowers"
                />
              </picture>

              <div className="absolute top-1/3 left-6 xs:left-16 ">
                <h2 className=" text-3xl font-bold ">ZX7 SPEAKER</h2>
                <Link to="/">
                  <button className="border border-pitch-black bg-gray-accent font-semibold py-3 px-8 mt-6 hover:text-white hover:bg-pitch-black duration-300">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <div>
            <div>
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet={Home_Speaker_Desktop}
                />
                <source media="(min-width:480px)" srcSet={Home_Speaker_Tab} />
                <img
                  className="rounded-lg xs:w-full"
                  src={Home_Speaker_Mobile}
                  alt="Flowers"
                />
              </picture>

              <div>
                <h2 className="text-3xl font-bold ">YX1 EARPHONES</h2>
                <Link to="/">
                  <button className="border border-pitch-black bg-gray-accent font-semibold py-3 px-8 mt-6 hover:text-white hover:bg-pitch-black duration-300">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  )
}

export default Home
