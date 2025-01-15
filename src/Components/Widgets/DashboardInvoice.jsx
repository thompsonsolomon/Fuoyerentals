import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/DashboardCard.scss"
import { PhotoAlbumSharp } from '@material-ui/icons'

export default function DashboardInvoice() {
    return (
        <div className='DashboardProperties'>
            <div className="card-body calculations">

            <div className="card-header pb-0">
                <div>
                    <h5>Last Month</h5>
                </div>
            </div>
                <ul>
                    <li>
                        <h5 className="font-success">₦0</h5>
                        <h6 className="light-font mb-0">Paid invoices</h6>
                    </li>
                    <li>
                        <h5 className="font-danger">₦0</h5>
                        <h6 className="light-font mb-0">Open invoices</h6>
                    </li>
                </ul>
                <div className="labelCon">
                    <Link to="/" className="label label-light color-4">
                        <PhotoAlbumSharp />
                        Payments Receive
                    </Link>
                    <Link to="/" className="arrow-animated">
                        View all
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-right"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

        </div>
    )
}
