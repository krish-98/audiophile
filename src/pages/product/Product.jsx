import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  fetchProducts,
  fetchSingleProduct,
} from "../../features/productSlice/productSlice"

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

              <div className="flex flex-col gap-6 mt-4">
                <picture>
                  <source
                    media="(min-width:992px)"
                    srcSet={`/assets${product?.image?.tablet}`}
                  />
                  <source
                    media="(min-width:480px)"
                    srcSet={`/assets${product?.image?.mobile}`}
                  />
                  <img
                    className="rounded-lg tab:w-[80%]"
                    src={`/assets${product?.image?.desktop}`}
                    alt={product.shortName}
                  />
                </picture>
                <div className="flex flex-col gap-6">
                  {product?.new && (
                    <strong className="uppercase text-sm font-medium text-orange-accent tracking-[.8em]">
                      New Product
                    </strong>
                  )}
                  <h2 className="text-3xl font-semibold">{product?.name}</h2>
                  <p className="text-pitch-black text-opacity-50">
                    {product?.description}
                  </p>
                  <p className="font-semibold text-lg">$ {product?.price}</p>

                  <div className="text-sm">
                    <span className="bg-gray-accent px-6 py-4 cursor-pointer hover:text-orange-accent hover:bg-gray-300 duration-300">
                      -
                    </span>
                    <span className="bg-gray-accent py-4 px-2">1</span>
                    <span className="bg-gray-accent px-6 py-4 cursor-pointer hover:text-orange-accent hover:bg-gray-300 duration-300">
                      +
                    </span>

                    <button className="ml-4 uppercase bg-orange-accent text-white font-semibold px-6 py-4 hover:opacity-80 duration-300">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-14 my-14">
                <div>
                  <h3 className="uppercase text-xl font-bold">Features</h3>
                  <p className="text-pitch-black text-opacity-60 whitespace-pre-line mt-4">
                    {product?.features}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold uppercase">In the box</h3>
                  {product &&
                    product?.includedItems?.map((item, index) => (
                      <ul key={index} className="">
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

              {/* Product gallery */}
              <div>
                <div className="my-10">
                  <div className="flex flex-col gap-6">
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
                        className="rounded-lg tab:w-[80%]"
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
                        className="rounded-lg tab:w-[80%]"
                        src={`/assets${product?.gallery?.second?.desktop}`}
                        alt={product.shortName}
                      />
                    </picture>
                  </div>

                  <div className="mt-6">
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
                        className="rounded-lg tab:w-[80%]"
                        src={`/assets${product?.gallery?.third?.desktop}`}
                        alt={product.shortName}
                      />
                    </picture>
                  </div>
                </div>
              </div>

              {/* You may also like */}
              <div className="text-center">
                <h3 className="text-2xl font-bold uppercase">
                  you may also like
                </h3>

                <div>
                  {product?.others?.map((otherItem, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-8 my-8"
                    >
                      <picture>
                        <source
                          media="(min-width:992px)"
                          srcSet={`/assets${otherItem?.image?.tablet}`}
                        />
                        <source
                          media="(min-width:480px)"
                          srcSet={`/assets${otherItem?.image?.mobile}`}
                        />
                        <img
                          className="rounded-lg tab:w-[80%]"
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
          </div>
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  )
}

export default Product
