import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import { DashboardInvoice, DashboardProperties } from '../Widgets'

function DashboardConainer() {
  return (
    <div>
      <div>
      <DashboardBreadCrum Page="Dashboard" text="Dashboard" />
      </div>
      <div className="dashPropCon">
        <DashboardProperties />
        <DashboardInvoice />
      </div>

    </div>
  )
}

export default DashboardConainer