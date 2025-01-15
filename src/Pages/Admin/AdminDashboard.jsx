import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, DashboardConainer, SideBar } from '../../Components/Admin'
function AdminDashboard() {
  return (
    <div className='dashboard'>
      <AdminHeader />
      <div className="dashboardWrapper">

        <SideBar />
        <div className='dashboardConainer'>
          <DashboardConainer />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard