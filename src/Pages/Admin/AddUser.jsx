import React from 'react'
import { NewUserForm } from '../../Components/Admin'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, SideBar } from '../../Components/Admin'

function AddUser() {
    return (
        <div className='AdminChats'>
            <div className='dashboard'>
                <AdminHeader />
                <div className="dashboardWrapper">
                    <SideBar />
                    <div className='dashboardConainer'>
                        <NewUserForm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddUser