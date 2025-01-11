import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import Home from "./page/Home"
import ProductDetails from "./page/ProductDetails"
import ViewProduct from "./page/ViewProduct"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="view-product" element={<ViewProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
