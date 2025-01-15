import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import Properties from '../Main/Properties';
import { PropertiesData } from '../Utils/Properties';
function DashboardLising() {
    const properties = PropertiesData
  return (
    <div>
        
      <div>
      <DashboardBreadCrum Page="Property Listing" text="My Properies" />
      </div>

      <div>
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

export default DashboardLising