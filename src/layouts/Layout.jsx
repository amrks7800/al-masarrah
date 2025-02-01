import { Outlet } from "react-router-dom"
import { Scroll } from "../components"
import { Nav, Footer } from "../containers"

const Layout = () => {
  return (
    <>
      <Scroll />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
