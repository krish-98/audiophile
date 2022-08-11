import { Route, Routes } from "react-router-dom"
import Header from "./pages/home/Header"
import Home from "./pages/home/Home"
import Headphones from "./pages/headphones/Headphones"
import Speakers from "./pages/speakers/Speakers"
import Earphones from "./pages/earphones/Earphones"
import Footer from "./pages/home/Footer"

import Product from "./pages/product/Product"
import Checkout from "./pages/checkout/Checkout"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartTotal } from "./features/cartSlice/cartSlice"
import CheckoutModal from "./components/CheckoutModal"

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { checkout } = useSelector((state) => state.global)

  useEffect(() => {
    dispatch(cartTotal())
  }, [cart])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="headphones/:slug" element={<Product />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="speakers/:slug" element={<Product />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="earphones/:slug" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      {checkout && <CheckoutModal />}
      <Footer />
    </>
  )
}

export default App
