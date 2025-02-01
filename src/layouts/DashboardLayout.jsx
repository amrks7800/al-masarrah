import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/dashboard-header"
import DashboardNavigation from "../components/dashboard-navigation"

const DashboardLayout = () => {
  return (
    <div
      className="dashboard-wrapper"
      style={{
        backgroundColor: "var(--clr-neutral-200)",
        minHeight: "100dvh",
      }}
    >
      <div className="container">
        <DashboardHeader />
        <DashboardNavigation />
        <Outlet />
      </div>
    </div>
  )
}
export default DashboardLayout
