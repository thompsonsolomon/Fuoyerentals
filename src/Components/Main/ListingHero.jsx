import React from 'react'
import "../Styles/ListingHome.scss"
import { PropertiesData } from "../Utils/Properties"
import Properties from './Properties';
import { Link } from 'react-router-dom';
function Listing() {
    const HeroListingProperties = PropertiesData.filter(function (e) {
        return e.Latest === true;
    });
    return (

        <div className="container-fluid">
            <div className="container">

                <div className='listingWrapper'>
                    <div className='title'>
                        <h3>Latest</h3>
                        <p>Latest hostel for rent</p>
                    </div>
                    <div className="ProContainer">
                        {HeroListingProperties.map((data) => {
                            return (
                                <Properties
                                    data={data}
                                    key={data._id}
                                />
                            );
                        })}
                    </div>

                    <button className='btn button2'>
                        <Link to="/listings">
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Listing