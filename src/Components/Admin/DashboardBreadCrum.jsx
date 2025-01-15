import React from 'react'
import "../Styles/BreadCrum.scss"
import { Home } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function DashboardBreadCrum({ Page, text }) {
    return (
        <div className='DashboaredBread'>
            <div className="page-header">
                <div className="row align-items-center">
                    <div className="rowItem">
                        <div className="page-header-left">
                            <h3>
                                {Page}
                                <small>Welcome to admin panel</small>
                            </h3>
                        </div>
                    </div>
                    <div className="rowItem">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item">
                                <Link to="/admin/dashboard">
                                    <Home />
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">{text}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBreadCrum