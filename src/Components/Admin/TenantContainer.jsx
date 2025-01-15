import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import UserList from './UserList'
import { Tenant } from '../Utils/Properties'

function TenantContainer() {
  return (
    <div>
      <div>
        <DashboardBreadCrum Page="Dashboard" text="Dashboard" />
      </div>
      <div className="dashPropCon">
        <UserList Type="Tenant" users={Tenant} />
      </div>
    </div >

  )
}

export default TenantContainer