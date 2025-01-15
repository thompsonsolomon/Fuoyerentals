import { DashboardOutlined, HomeWorkOutlined, HouseSharp, Message, PeopleAltOutlined, PersonAdd, Phone } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <div className='sidebarCon'>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/dashboard" >
                            <DashboardOutlined />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/chats" >
                            <Message />
                            <span>Chats</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/users" >
                            <PersonAdd />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/listing" >
                            <HomeWorkOutlined />
                            <span>Listing</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/admin/tenant" >
                            <PeopleAltOutlined />
                            <span>Tenant</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/properties" >
                            <HouseSharp />
                            <span>Properties</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/cusomercare" >
                            <Phone />
                            <span>Cusomer Care</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar