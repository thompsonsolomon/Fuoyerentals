import React from 'react'
import "../Styles/Props.scss"
import { NavLink } from 'react-router-dom'
import { FavoriteBorderOutlined, LanguageOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Properties({ data }) {
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
    }
    return (
        <div>
            <Link to={`/properties/${data._id}`} >

                <div className="property-box">
                    <div className="property-image">
                        <img src={data && data.image}
                            alt="propertyImage" />
                        <div className="type">
                            <span>
                                {
                                    truncate(data && data.type, 20)
                                }
                            </span>
                        </div>
                    </div>
                    <div className="property-detais">
                        <div className="card-text">
                            {

                                truncate(data && data.title, 20)

                            }
                        </div>
                        <div className="card-text">
                            {
                                truncate(data && data.address, 20)
                            }
                        </div>
                        <div className="card-text">
                            {
                                truncate(
                                    data && data.description,
                                    20)
                            }

                        </div>
                        <div className="status-price_container">
                            <div className="TextCon">
                                <div className="status">
                                    {data && data.status}
                                </div>
                                <div className="price">
                                    {data && data.price}
                                </div>
                            </div>
                            <div className="IconCOn">
                                <ul>
                                    <li>
                                        <NavLink to="/agents">
                                            <LanguageOutlined />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link to={`/properties/${data._id}`} >
                                            <FavoriteBorderOutlined />
                                        </Link>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Properties