import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, SideBar } from '../../Components/Admin'

function AdminChats() {
    return (
        <div className='AdminChats'>
            <div className='dashboard'>
                <AdminHeader />
                <div className="dashboardWrapper">

                    <SideBar />
                    <div className='dashboardConainer'>
                        Chats
                        <h1>Coming Soon</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminChats