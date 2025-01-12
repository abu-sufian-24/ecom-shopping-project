import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import Home from "./page/Home"
import ProductDetails from "./page/ProductDetails"
import ViewProduct from "./page/ViewProduct"
import BestCollection from "./page/BestCollection"
import Contact from "./page/Contact"
import AddToCart from "./page/AddToCart"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="view-product" element={<ViewProduct />} />
            <Route path="best-collection" element={<BestCollection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<AddToCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
