import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import { PropertiesData } from '../Utils/Properties';
import Properties from '../Main/Properties';
import { Link } from 'react-router-dom';
function DashboardPropertyConainer() {
    const ownerID = 1243
    const properties = PropertiesData.filter(function (e) {
        return e.ownerId === ownerID;
    });


    return (
        <div>
            <div>
                <DashboardBreadCrum Page="Dashboard" text="Dashboard" />
            </div>


            <div className="card-header">
                <h5>My Properies</h5>
                <Link to="/admin/add/property" className='btn'>Add Property</Link>
            </div>
            <div className="dashPropCon">

                <div className="ProContainer">
                    {properties.map((data) => {
                        return (
                            <Properties
                                data={data}
                                key={data._id}
                            />
                        );
                    })}
                </div>

            </div>

        </div>

    )
}

export default DashboardPropertyConainer