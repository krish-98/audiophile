import { Route, Routes } from "react-router-dom"
import Header from "./pages/home/Header"
import Home from "./pages/home/Home"
import Headphones from "./pages/headphones/Headphones"
import Speakers from "./pages/speakers/Speakers"
import Earphones from "./pages/earphones/Earphones"
import Footer from "./pages/home/Footer"

import Product from "./pages/product/Product"

function App() {
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
