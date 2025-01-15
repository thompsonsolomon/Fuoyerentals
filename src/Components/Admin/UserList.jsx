import React from 'react'
import "../Styles/User.scss"
import { Truncate } from '../Utils/api'
import { Link } from 'react-router-dom'
function UserList({ users, Type }) {
    return (
        <div>
            <div className="card">
                <div className="card-header-con">
                    <div className="card-header">
                        <h5>All {Type}</h5>

                    </div>
                    <Link to="/admin/add/users">
                        Add User
                    </Link>
                </div>
                <div className="table-responsive p-0">
                    <table>
                        <thead>
                            <tr className='label'>
                                <th>User</th>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Contact</th>
                                {
                                    Type === "Tenant" ?
                                        <th>From</th> :
                                        <th>Accoun Type</th>
                                }
                                {
                                    Type === "Tenant" &&
                                    <th>To</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {

                                users && users.map((user) => {
                                    return (
                                        <tr key={user._id}>
                                            <td className="media">
                                                <img src={user.image} alt="userImg" />
                                                <div className="media-body">
                                                    <p>
                                                        {
                                                            Truncate(
                                                                user.name,
                                                                10)
                                                        }

                                                    </p>
                                                </div>
                                            </td>
                                            <td>{
                                                Truncate(
                                                    user._id
                                                    ,
                                                    10)
                                            }</td>
                                            <td>{
                                                Truncate(
                                                    user.email,
                                                    10)
                                            }</td>
                                            <td>{
                                                Truncate(
                                                    user.contact,
                                                    12)
                                            }</td>
                                            <td>
                                                {
                                                    Type === "Tenant"
                                                        ?
                                                        <span>{new Date(user.createdAt).toDateString()}</span>
                                                        :
                                                        <span className={`badge ${user.AccountType === "CustomerCare" ? "customerCare" : user.AccountType === "Agent" ? "agent" : "normal_User"
                                                            }`}>{user.AccountType ? user.AccountType : "User"}</span>
                                                }

                                            </td>
                                            {
                                                Type === "Tenant" &&

                                                <td>
                                                    <span>{new Date(user.createdAt).toDateString()}</span>

                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList