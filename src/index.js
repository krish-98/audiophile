import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./app/store"
import "./index.css"
import App from "./App"
import { fetchProducts } from "./features/productSlice/productSlice"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
