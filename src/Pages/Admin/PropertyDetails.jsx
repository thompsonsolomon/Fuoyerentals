import React from 'react'
import "../../Components/Styles/Admin.scss"
import { AdminHeader, PropertyDetailscard, SideBar } from '../../Components/Admin'
import { PropertiesData } from '../../Components/Utils/Properties';
function PropertyDetails() {
    const ownerID = 1243
    
    const properties = PropertiesData.filter(function (e) {
        return e.ownerId === ownerID;
    });

    return (

        <div>
            <div>
                <div className='dashboard'>
                    <AdminHeader />
                    <div className="dashboardWrapper">
                        <SideBar />
                        <div className='dashboardConainer'>
                            <PropertyDetailscard data={properties} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PropertyDetails