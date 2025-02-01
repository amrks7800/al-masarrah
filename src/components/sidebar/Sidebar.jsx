import { Link, useLocation } from "react-router-dom"
import "./sidebar.css"

const Sidebar = ({ routes }) => {
  return (
    <ul className="sidebar disable-scrollbars">
      {routes.map(route => (
        <SidebarLi route={route} />
      ))}
    </ul>
  )
}
export default Sidebar

const SidebarLi = ({ route }) => {
  const { pathname } = useLocation()

  return (
    <li
      key={route.url}
      className={pathname.includes(route.url) ? "active" : null}
    >
      <Link to={route.url}>{route.title}</Link>
    </li>
  )
}
