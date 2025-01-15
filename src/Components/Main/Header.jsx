import React from 'react'
import "../Styles/Header.scss"
import { NavLink, Link } from 'react-router-dom'
import { FavoriteBorderOutlined, HomeRounded, LanguageOutlined, PersonOutlined } from '@material-ui/icons'
import { Admin, WebsiteName } from '../Utils/api'
function Header() {
    console.log(Admin)
    return (
        <div className='container-fluid header_con'>
            <header className="container">
                <Link to="/home" className="logo-Container">
                    <HomeRounded className='icon' />
                    <span><WebsiteName /></span>
                </Link>
                <nav className='main_Nav'>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/listings">
                                Listing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/agents">
                                Agents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <Link to={Admin ? "/admin/dashboard" : "/auth"}>
                                <button>
                                    Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="headerIcons">
                    <nav>


                        <ul>
                            <li>
                                <NavLink to="/agents">
                                    <LanguageOutlined />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/listings">
                                    <FavoriteBorderOutlined />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={Admin ? "/admin/dashboard" : "/auth"}>
                                    <PersonOutlined />
                                </NavLink>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header