import React from "react"

const BestGear = () => {
  return (
    <div className="my-32 tab:flex tab:flex-row-reverse tab:justify-between">
      <picture>
        <source
          media="(min-width:992px)"
          srcSet="/assets/images/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width:480px)"
          srcSet="/assets/images/shared/tablet/image-best-gear.jpg"
        />
        <img
          className="rounded-lg "
          src="/assets/images/shared/mobile/image-best-gear.jpg"
          alt="YX1 EARPHONES"
        />
      </picture>

      <div className="flex flex-col mt-10 gap-8 text-center tab:w-[40%] tab:text-left tab:self-center">
        <h2 className="text-3xl font-bold">
          BRINGING YOU THE
          <span className="text-orange-accent"> BEST</span> AUDIO GEAR
        </h2>
        <p className="text-pitch-black opacity-50 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}

export default BestGear
