import { Outlet } from "react-router"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout