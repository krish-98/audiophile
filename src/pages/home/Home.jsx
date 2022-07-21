import React from "react"
import { Link } from "react-router-dom"

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
    </main>
  )
}

export default Home
