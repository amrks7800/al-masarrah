import { Link, useLocation } from "react-router-dom"
import "./index.css"
import logo from "/icons/logo.svg"
import { dashboardPages } from "../../constants"
import SearchInput from "../search-input"
import avatar from "/images/avatar.svg"

const DashboardHeader = () => {
  const { pathname } = useLocation()

  const currentPage = pathname.split("/").at(-1)

  return (
    <header className="dashboard-header">
      <div className="logo">
        <Link to={"/"} aria-label="back to home page">
          <img src={logo} alt="" />
        </Link>
        <h2>{dashboardPages[currentPage]}</h2>
      </div>

      <div className="group">
        <SearchInput />

        <img src={avatar} alt="" className="avatar" />
      </div>
    </header>
  )
}
export default DashboardHeader
