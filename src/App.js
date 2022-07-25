import { Route, Routes } from "react-router-dom"
import Header from "./pages/home/Header"
import Home from "./pages/home/Home"
import Headphones from "./pages/headphones/Headphones"
import Speakers from "./pages/speakers/Speakers"
import Footer from "./pages/home/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
