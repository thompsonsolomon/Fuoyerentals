import React from 'react'
import Agents from "./Cards";
import "../../Components/Styles/Agent.scss"

function ContactsContainer({ users }) {
    const newUsersArray = users.filter(function (e) {
        return e.AccountType === "CustomerCare";
    });

    return (

        <div className="container-fluid">
            <div className="container">
                <div className="AgentsWrapper">
                    <div className="container-fluid">
                        <div className='title'>
                            <h3>Contact</h3>
                            <p>Contact any of our customer cares</p>
                            <span className="show-result">
                                Showing <span>{newUsersArray.length}</span> Available contacts
                            </span>
                        </div>

                    </div>
                    <div className="container-fluid">
                        <div className="listings">
                            <div className="row">
                                {newUsersArray.map((data) => {
                                    return (
                                        <Agents
                                            data={data}
                                            key={data._id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsContainer