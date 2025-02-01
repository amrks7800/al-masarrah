import "./nav.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "../../components/button/Button"
import User from "/icons/users.svg"

const Nav = () => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <nav>
      <div className="container">
        <Link className="logo" to="/">
          <img src="/assets/logo.svg" alt="جمعية المسرة للتنمية الأسرية" />
        </Link>
        <div className={menu ? "links active" : "links"}>
          <NavLink onClick={() => setMenu(false)} to="/">
            الرئيسية
          </NavLink>
          <NavLink onClick={() => setMenu(false)} to="/govern">
            الحوكمة
          </NavLink>
          <NavLink onClick={() => setMenu(false)} to="/team">
            مجلس الادارة
          </NavLink>
          <NavLink onClick={() => setMenu(false)} to="/general-assembly">
            الجمعية العمومية
          </NavLink>
          <NavLink onClick={() => setMenu(false)} to="/satisfaction">
            نسبة الرضا
          </NavLink>
          <NavLink onClick={() => setMenu(false)} to="/contact">
            تواصل معنا
          </NavLink>
        </div>

        <Button onClick={() => navigate("/dashboard")}>لوحة التحكم</Button>

        <div className="menu">
          <span
            className={menu ? "menu-icon close" : "menu-icon"}
            onClick={() => {
              setMenu(prev => !prev)
            }}
          >
            <svg role="presentation" viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Nav
