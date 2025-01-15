import React from 'react'
import "../Styles/DashboardCard.scss"
import houseIcon from "../../assets/images/icons/1.svg";
import { Link } from 'react-router-dom';
import { HomeWorkOutlined, PeopleAltOutlined } from '@material-ui/icons';
function DashboardProperties() {
    return (
        <div className='DashboardProperties'>
            <div className="card-body">
                <div className="media">
                    <img src={houseIcon} className="img-fluid" alt="houseImage" />
                    <div className="media-body">
                        <h4 className="mb-0">0</h4>
                        <h6 className="light-font">Properties</h6>
                    </div>
                    <Link to="/admin/property/all" className="arrow-animated">
                        See all properties
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
                <ul className="light-box">
                    <li>
                        <HomeWorkOutlined />
                        <div>
                            <h5 className="mb-0">50</h5>
                            <span className="light-font">Properties</span>
                        </div>
                    </li>
                    <li>
                    <PeopleAltOutlined />
                    <div>
                            <h5>50</h5>
                            <span className="light-font">Tenants</span>
                        </div>
                    </li>
                    <li>
                        <HomeWorkOutlined />
                        <div>
                            <h5>100</h5>
                            <span className="light-font">Available</span>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default DashboardProperties