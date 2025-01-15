import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, DashboardPropertyConainer, SideBar } from '../../Components/Admin'

function AdminProperies() {
    return (
        <div>
            <div>
                <div className='dashboard'>
                    <AdminHeader />
                    <div className="dashboardWrapper">
                        <SideBar />
                        <div className='dashboardConainer'>
                            <DashboardPropertyConainer />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminProperies