import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, SideBar, TenantContainer } from '../../Components/Admin'

function Tenant() {
    return (
        <div>
            <div>
                <div className='dashboard'>
                    <AdminHeader />
                    <div className="dashboardWrapper">
                        <SideBar />
                        <div className='dashboardConainer'>
                            <TenantContainer type="Tenants" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tenant