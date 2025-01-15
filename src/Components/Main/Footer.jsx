import React from "react";
import "../../Components/Styles/Footer.scss"
// import { BsEnvelopeFill, BsGeoAltFill, BsPhoneFill } from "react-icons/bs";
// import { SiHomeadvisor } from "react-icons/si";
import { Link } from "react-router-dom";
import { WebsiteName } from "../Utils/api";
import { Email, HomeRounded, LocationOnSharp, Phone } from "@material-ui/icons";
// import styled from "styled-components";

function Footer() {
    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="foot-row">
                    <div className="foot-col">
                        <div className="footer-links">
                            <Link to="/" className="footer_logo">
                                <HomeRounded className='icon' />
                                <span
                                ><WebsiteName /></span>
                            </Link>
                            <div className="footer-content">
                                <p className="my-4">
                                    Looking for a way to better manage your properties? Manage your
                                    properties and Rentals with our platform
                                </p>
                                <div className="footer-contact">
                                    <ul className="footer-content">
                                        <li>
                                            <LocationOnSharp />
                                            House 5, Off Stateline Road, Akure
                                        </li>
                                        <li>
                                            <Phone />
                                            (+234) 802 - 818 - 7950
                                        </li>
                                        <li>
                                            <Email /> 
                                            info@caretaker.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foot-col">
                        <div className="footer-links ">
                            <h5 className="footer-title">Quick Links</h5>
                            <ul className="footer-content">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/listings">Listing</Link>
                                </li>
                                <li>
                                    <Link to="/listings">Property</Link>
                                </li>
                                <li>
                                    <Link to="/agents">Agents</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot-col">
                        <div className="footer-links">
                            <h5 className="footer-title">Tags</h5>
                            <ul className="footer-content">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/listings">Listing</Link>
                                </li>
                                <li>
                                    <Link to="/listings">Property</Link>
                                </li>
                                <li>
                                    <Link to="/agents">Agents</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
