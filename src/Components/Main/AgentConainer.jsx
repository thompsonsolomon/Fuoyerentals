import React from "react";
import Agents from "./Cards";
import "../../Components/Styles/Agent.scss"

function AgentsContainer({ users }) {
    const newUsersArray = users.filter(function (e) {
        return e.AccountType === "Agent";

    });
    return (

        <div className="container-fluid">
            <div className="container">
                <div className="AgentsWrapper">
                    <div className="container-fluid">
                        <div className="heading">
                            <h2>All Agents</h2>
                            <span className="show-result">
                                Showing <span>{newUsersArray.length}</span> Agents
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
export default AgentsContainer;
