import React from 'react'

import "../../Components/Styles/Admin.scss"
import { AdminHeader, DashboardLising, SideBar } from '../../Components/Admin'

function AdminListing() {
    return (
        <div>
            
            <div className='dashboard'>
                <AdminHeader />
                <div className="dashboardWrapper">

                    <SideBar />
                    <div className='dashboardConainer'>
                        <DashboardLising />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminListing