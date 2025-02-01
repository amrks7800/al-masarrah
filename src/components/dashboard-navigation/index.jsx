import { Link, useLocation } from "react-router-dom"
import "./index.css"
import { dashboardNavLinks } from "../../constants"

const DashboardNavigation = () => {
  return (
    <nav className="dashboard-navigation">
      {dashboardNavLinks.map(link => (
        <DashboardNavLink link={link} key={link.href} />
      ))}
    </nav>
  )
}
export default DashboardNavigation

const DashboardNavLink = ({ link }) => {
  const { pathname } = useLocation()
  return (
    <Link
      to={link.href}
      className={`dashboard-nav-link ${
        pathname === link.href ? "active" : ""
      } flow`}
    >
      <span>{link.text}</span>
      <img src={link.icon} alt="" />
    </Link>
  )
}
