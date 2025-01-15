import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AddUserConainer, AdminHeader, SideBar } from '../../Components/Admin'
import { Users } from '../../Components/Utils/Properties'

function AdminUsers() {
    return (
        <div>
            <div>
                <div className='dashboard'>
                    <AdminHeader />
                    <div className="dashboardWrapper">
                        <SideBar />
                        <div className='dashboardConainer'>
                            <AddUserConainer users={Users} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminUsers