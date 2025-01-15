import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import { useParams } from 'react-router-dom';
import "../Styles/PropertyDetails.scss"
import { Bathtub, KingBed, StarOutline } from '@material-ui/icons';
import { FormatCurrency } from '../Utils/Properties';
function PropertyDetailscard({ data }) {
    const params = useParams();
    const prop = data.filter(function (e) {
        return e._id === params.id;
    });


    return (
        <div>
            <div>
                <DashboardBreadCrum Page="Property Details" text="My properties" />
            </div>
            <div>
                {
                    prop.map((property) => (
                        <div key={property._id}>
                            <div>
                                <img src={property.image} alt="property" />
                            </div>
                            <div className="SingleProContainer">
                                <div className="single-title">
                                    <div className="sindleCon">
                                        <div className="left-single">
                                            <h2>{property.title}</h2>
                                            <span>
                                                <span className="label">For {property.status}</span>
                                            </span>
                                            <p>
                                                {property.address}
                                            </p>
                                            <ul>
                                                <li>
                                                    <KingBed />
                                                    <span>{property.room} Rooms</span>
                                                </li>
                                                <li>
                                                    <Bathtub />
                                                    <span>{property.bed} Bedrooms</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="right-single">
                                            <div className="rating">
                                                <StarOutline />
                                                <StarOutline />
                                                <StarOutline />
                                                <StarOutline />
                                                <StarOutline />
                                            </div>
                                            <h2 className="price">
                                                ₦{FormatCurrency(property.price)}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-body">
                                    <div
                                        // className="tab-pane fade show active about page-section"
                                        id="about"
                                    >
                                        <div className="head">
                                            <h4>Property Details</h4>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <ul className="property-list-details">
                                                <li>
                                                    <span>Property Type :</span> {property.type}
                                                </li>
                                                <li>
                                                    <span>Property ID :</span> {property._id}
                                                </li>
                                                <li>
                                                    <span>Property status :</span> For {property.status}
                                                </li>
                                                <li>
                                                    <span>Operating Since :</span> {new Date(property.createdAt).toDateString()}
                                                </li>
                                            </ul>
                                            <ul className="property-list-details">
                                                <li>
                                                    <span>Price :</span> 
                                                    ₦{FormatCurrency(property.price)}
                                                </li>
                                                <li>
                                                    <span>Property Size :</span> {property.size}
                                                </li>
                                                <li>
                                                    <span>City :</span> {property.city}
                                                </li>
                                            </ul>
                                            <ul className="property-list-details">
                                                <li>
                                                    <span>Rooms :</span> {property.rooms}
                                                </li>
                                                <li>
                                                    <span>Bedrooms :</span> {property.beds}
                                                </li>
                                                <li>
                                                    <span>Bathrooms :</span> {property.bathroom}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4 className="mt-4 mb-3">Property Brief</h4>
                                    <p>
                                        {property.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default PropertyDetailscard