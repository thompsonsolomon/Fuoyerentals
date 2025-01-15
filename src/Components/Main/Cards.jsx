import React from "react";
import "../../Components/Styles/Agent.scss"
import { Link } from "react-router-dom";
import { Email, FavoriteBorderOutlined, Phone } from "@material-ui/icons";
import { WebsiteName } from "../Utils/api";

function Agents({ data }) {
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
    }

    return (
        <>
            <div key={data._id} className=" agentCardCon">
                <div className="agent-box ">
                    <div className="agent-image">
                        <img src={data.image} alt="" />
                    </div>

                    <div className="agent-details ">
                        <Link to="/admin/dashboard">
                            <h6>
                                {data.name}
                                {/* Ty R. Leeva */}
                                <span >
                                    <FavoriteBorderOutlined />
                                </span>
                            </h6>
                        </Link>
                        {
                            data.AccountType === "CustomerCare" ?
                                <h3>
                                    <WebsiteName /> Customer care service
                                </h3> :
                                <h3>Sellers Of Property...</h3>
                        }
                        <span>
                            <Email />

                            {
                                truncate(
                                    data.email,
                                    50)
                            }
                        </span>
                        <p>

                            {
                                truncate(
                                    data.bio,
                                    55)
                            }
                        </p>
                        <a href={`tel:${data.contact}`} className="btn">
                            <Phone />
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Agents;
