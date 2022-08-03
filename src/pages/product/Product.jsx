import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  fetchProducts,
  fetchSingleProduct,
} from "../../features/productSlice/productSlice"

import ProductCategory from "../../components/ProductCategory"
import BestGear from "../../components/BestGear"

const Product = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { singleProduct: product } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchSingleProduct(slug))
  }, [dispatch, slug])

  return (
    <>
      {product ? (
        <div>
          <div className="max-w-[1200px] mx-auto p-6">
            <div>
              <button
                className="text-pitch-black text-opacity-70 hover:underline"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>

              <div className="flex flex-col gap-6 mt-4 xs:flex-row">
                <div className="xs:w-full">
                  <picture>
                    <source
                      media="(min-width:992px)"
                      srcSet={`/assets${product?.image?.mobile}`}
                    />
                    <source
                      media="(min-width:480px)"
                      srcSet={`/assets${product?.image?.tablet}`}
                    />
                    <img
                      className="rounded-lg "
                      src={`/assets${product?.image?.desktop}`}
                      alt={product.shortName}
                    />
                  </picture>
                </div>

                <div className="flex flex-col gap-6 xs:self-center xs:w-full">
                  {product?.new && (
                    <strong className="uppercase text-sm font-medium text-orange-accent tracking-[.8em]">
                      New Product
                    </strong>
                  )}
                  <h2 className="text-3xl font-semibold">{product?.name}</h2>
                  <p className="text-pitch-black text-opacity-50 w-[80%]">
                    {product?.description}
                  </p>
                  <p className="font-semibold text-lg">$ {product?.price}</p>

                  <div className="text-sm flex items-center">
                    <div>
                      <span className="bg-gray-accent px-6 py-4 cursor-pointer hover:text-orange-accent hover:bg-gray-300 duration-300">
                        -
                      </span>
                      <span className="bg-gray-accent py-4 px-2">1</span>
                      <span className="bg-gray-accent px-6 py-4 cursor-pointer hover:text-orange-accent hover:bg-gray-300 duration-300">
                        +
                      </span>
                    </div>

                    <button className="ml-4 uppercase bg-orange-accent text-white font-semibold px-6 py-4 hover:opacity-80 duration-300">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-14 my-14 tab:flex-row tab:justify-between ">
                <div className="tab:w-[50%]">
                  <h3 className="uppercase text-3xl font-bold">Features</h3>
                  <p className="text-pitch-black text-opacity-60 whitespace-pre-line mt-4">
                    {product?.features}
                  </p>
                </div>

                <div className="xs:flex gap-[25%] tab:block tab:w-[40%]">
                  <h3 className="text-3xl font-bold uppercase tab:mb-6">
                    In the box
                  </h3>
                  <div className="">
                    {product &&
                      product?.includedItems?.map((item, index) => (
                        <ul key={index}>
                          <li>
                            <div className="my-1">
                              <span className="text-orange-accent font-bold">
                                {item.quantity}x
                              </span>
                              <span className="ml-6 text-pitch-black text-opacity-80">
                                {item.item}
                              </span>
                            </div>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
              </div>

              {/* Product gallery */}
              <div>
                <div className="my-10 xs:flex xs:gap-6 xs:items-center">
                  <div className="">
                    <picture>
                      <source
                        media="(min-width:992px)"
                        srcSet={`/assets${product?.gallery?.first?.tablet}`}
                      />
                      <source
                        media="(min-width:480px)"
                        srcSet={`/assets${product?.gallery?.first?.mobile}`}
                      />
                      <img
                        className="rounded-lg "
                        src={`/assets${product?.gallery?.first?.desktop}`}
                        alt={product.shortName}
                      />
                    </picture>

                    <picture>
                      <source
                        media="(min-width:992px)"
                        srcSet={`/assets${product?.gallery?.second?.tablet}`}
                      />
                      <source
                        media="(min-width:480px)"
                        srcSet={`/assets${product?.gallery?.second?.mobile}`}
                      />
                      <img
                        className="rounded-lg  mt-6"
                        src={`/assets${product?.gallery?.second?.desktop}`}
                        alt={product.shortName}
                      />
                    </picture>
                  </div>

                  <div className="mt-6 xs:mt-0">
                    <picture>
                      <source
                        media="(min-width:992px)"
                        srcSet={`/assets${product?.gallery?.third?.tablet}`}
                      />
                      <source
                        media="(min-width:480px)"
                        srcSet={`/assets${product?.gallery?.third?.mobile}`}
                      />
                      <img
                        className="rounded-lg"
                        src={`/assets${product?.gallery?.third?.desktop}`}
                        alt={product.shortName}
                      />
                    </picture>
                  </div>
                </div>
              </div>

              {/* You may also like */}
              <div className="text-center tab:my-20">
                <h3 className="text-3xl font-bold uppercase tab:my-4">
                  you may also like
                </h3>

                <div className="md:flex md:gap-6 md:justify-center ">
                  {product?.others?.map((otherItem, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-8 my-8 "
                    >
                      <picture>
                        <source
                          media="(min-width:786px)"
                          srcSet={`/assets${otherItem?.image?.tablet}`}
                        />
                        <source
                          media="(min-width:480px)"
                          srcSet={`/assets${otherItem?.image?.mobile}`}
                        />
                        <img
                          className="rounded-lg tab:w-[80%] tab:mx-auto"
                          src={`/assets${otherItem?.image?.desktop}`}
                          alt={product.shortName}
                        />
                      </picture>

                      <h3 className="text-2xl font-bold">{otherItem.name}</h3>
                      <Link
                        to={`/${otherItem.slug}`}
                        className="uppercase bg-orange-accent px-8 py-4 text-white font-bold hover:opacity-80"
                      >
                        see product
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product category */}
            <ProductCategory />

            {/* Best Gear */}
            <BestGear />
          </div>
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  )
}

export default Product
