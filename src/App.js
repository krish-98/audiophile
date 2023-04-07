import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Header, Footer, CheckoutModal } from "./components"
import {
  Home,
  Headphones,
  Speakers,
  Earphones,
  Product,
  Checkout,
} from "./pages"

import { useDispatch, useSelector } from "react-redux"
import { cartTotal } from "./redux/features/cartSlice"

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
