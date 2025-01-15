import React from "react";
import "../../Components/Styles/offers.scss"
import { HomeOutlined, HomeRounded } from "@material-ui/icons";
import { WebsiteName } from "../Utils/api";
// import { BsHouse, BsHouseDoor } from "react-icons/bs";

function Offer() {
  // {prop}
  return (
    <div className="Offer_Container" >
      <div className="container-fluid">
        <div className="container">
          <div className="col">
            <div className="title-1">
              <span className="label label-gradient">New Offer</span>
              <h2>Our New Offer</h2>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-sm-6">
                <div className="offer-box">
                  <div className="offer-wrapper p-4">
                    <div className="media d-flex align-items-start">
                      <div className="media-icon d-flex justify-content-center align-items-center">
                        <HomeOutlined />
                      </div>
                      <div className="media-body">
                        <h6><WebsiteName /></h6>
                        <h3>Are you willing to rent an hostel ?</h3>
                        <p>
                          350 offers on site, trusted by a community of
                          thousands of users. 10 new offers every day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="offer-box">
                  <div className="offer-wrapper p-4">
                    <div className="media d-flex align-items-start">
                      <div className="media-icon d-flex justify-content-center align-items-center">
                        <HomeRounded />/
                      </div>
                      <div className="media-body">
                        <h6><WebsiteName /></h6>
                        <h3>Are you looking for a home ?</h3>
                        <p>
                          350 offers on site, trusted by a community of
                          thousands of users. 10 new offers every day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Offer;
