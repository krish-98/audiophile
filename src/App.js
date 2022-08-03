import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./pages/home/Header"
import Home from "./pages/home/Home"
import Headphones from "./pages/headphones/Headphones"
import Speakers from "./pages/speakers/Speakers"
import Earphones from "./pages/earphones/Earphones"
import Footer from "./pages/home/Footer"

import Product from "./pages/product/Product"

import { useDispatch } from "react-redux"
import { fetchProducts } from "./features/productSlice/productSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="headphones/:slug" element={<Product />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
