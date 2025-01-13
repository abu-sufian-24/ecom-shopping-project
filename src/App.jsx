import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./page/Home"
import ProductDetails from "./page/ProductDetails"
import ViewProduct from "./page/ViewProduct"
import BestCollection from "./page/BestCollection"
import Contact from "./page/Contact"
import AddToCart from "./page/AddToCart"
import Checkout from "./page/Checkout"
import DashboardLayout from "./backend-side/layout/DashboartLayout"
import IndexCategory from "./page/backend/IndexCategory"
import Privet from "./page/backend/Privet"
import HomeLayout from "./page/backend/HomeLayout"
import IndexProduct from "./page/backend/IndexProduct"
import CreateProduct from "./page/backend/CreateProduct"
import CreateCategory from "./page/backend/CreateCategory"





function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route element={<Privet />}>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<HomeLayout />} />
              <Route path="category" element={<IndexCategory />} />
              <Route path="product" element={<IndexProduct />} />
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="view-product" element={<ViewProduct />} />
            <Route path="best-collection" element={<BestCollection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<AddToCart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
