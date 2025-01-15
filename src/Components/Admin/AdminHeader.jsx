import { HomeRounded } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Img from "../../assets/images/avatars/1.png" 
import { WebsiteName } from '../Utils/api'
function AdminHeader() {
    return (
        <div className='AdminHeader'>
            <div className="header">
                <Link to="/home" className="logo-Container">
                    <HomeRounded className='icon' />
                    <span><WebsiteName /></span>
                </Link>
            </div>
            <div className="header">
                <Link to="/home" className="logo-img_Container">
                <img src={Img} alt="ProfilePhoto" />
                </Link>
            </div>
        </div>
    )
}

export default AdminHeader