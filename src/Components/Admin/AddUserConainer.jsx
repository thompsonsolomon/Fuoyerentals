import React from 'react'
import DashboardBreadCrum from './DashboardBreadCrum'
import UserList from './UserList'
function AddUserConainer({ users }) {
  return (
    <div>
      <div>
        <DashboardBreadCrum Page="Users" text="Add/Edit Users" />
      </div>
      <div>

        
        <UserList users={users} Type="Users" />

      </div>
    </div>
  )
}

export default AddUserConainer