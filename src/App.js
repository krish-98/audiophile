import { Route, Routes } from "react-router-dom"
import Footer from "./pages/home/Footer"
import Header from "./pages/home/Header"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
