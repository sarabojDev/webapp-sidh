import { Outlet } from "react-router-dom"
import AppHeader from "./components/headernav/AppHeader"


const Hrms = () => {
  return (
    <div>
      <AppHeader />
      <div className="px-3 lg:px-0 lg:w-11/12 mx-auto py-2">
        <Outlet />
      </div>
    </div>
  )
}

export default Hrms