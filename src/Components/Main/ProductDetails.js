import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "../Styles/PropertyDetails.scss";
import { ArrowBack, Bathtub, KingBed, StarOutline } from "@material-ui/icons";
import { FormatCurrency } from "../Utils/Properties";
import { PropertiesData } from "../Utils/Properties";
function PropertyDetailsHome() {
  // const Properties
  const params = useParams();
  const prop = PropertiesData.filter(function (e) {
    return e._id === params.id;
  });
  const HandelSendMessage = (contact, id) => {
    const url = `https://wa.me/${contact}?text=${
      "Hello Sir / Ma i am interested in your apartment with the is  " +
      encodeURIComponent(id) +
      " pls can you tell me more about it"
    }`;
    window.open(url, "_blank");
  };
  const history = useHistory()

  const HandleGoBack = () =>{
    history.push(-1)
  }
  return (
    <div>
      <div>
        {prop.map((property) => (
          <div key={property._id}>
            <div className="imageConAlll">
              <img
                className="singlPropImage"
                src={property.image}
                alt="property"
              />
              <div className="returnButton">
                <Link to="/listings">
                <button onClick={HandleGoBack}>
                    <ArrowBack />
                </button>
                </Link>
              </div>
            </div>
            <div className="SingleProContainer">
              <div className="single-title">
                <div className="sindleCon">
                  <div className="left-single">
                    <h2>{property.title}</h2>
                    <span>
                      <span className="label">For {property.status}</span>
                    </span>
                    <p>{property.address}</p>
                    <ul>
                      <li>
                        <KingBed />
                        <span>{property.rooms} Rooms</span>
                      </li>
                      <li>
                        <Bathtub />
                        <span>{property.beds} Bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div className="right-single">
                    <div className="rating">
                      <StarOutline />
                      <StarOutline />
                      <StarOutline />
                      <StarOutline />
                      <StarOutline />
                    </div>
                    <h2 className="price">₦{FormatCurrency(property.price)}</h2>
                  </div>
                </div>
              </div>
              <div className="single-body">
                <div
                  // className="tab-pane fade show active about page-section"
                  id="about"
                >
                  <div className="head">
                    <h4>Property Details</h4>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <ul className="property-list-details">
                      <li>
                        <span>Property Type :</span> {property.type}
                      </li>
                      <li>
                        <span>Property ID :</span> {property._id}
                      </li>
                      <li>
                        <span>Property status :</span> For {property.status}
                      </li>
                      <li>
                        <span>Operating Since :</span>{" "}
                        {new Date(property.createdAt).toDateString()}
                      </li>
                    </ul>
                    <ul className="property-list-details">
                      <li>
                        <span>Price :</span>₦{FormatCurrency(property.price)}
                      </li>
                      <li>
                        <span>Property Size :</span> {property.size}
                      </li>
                      <li>
                        <span>City :</span> {property.city}
                      </li>
                    </ul>
                    <ul className="property-list-details">
                      <li>
                        <span>Rooms :</span> {property.rooms}
                      </li>
                      <li>
                        <span>Bedrooms :</span> {property.beds}
                      </li>
                      <li>
                        <span>Bathrooms :</span> {property.bathroom}
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="mt-4 mb-3">Property Brief</h4>
                <p>{property.description}</p>
              </div>
            </div>
            <div className="buyNowButtonCon">
              <button
                className="btn"
                onClick={() =>
                  HandelSendMessage(property.ownerContact, property._id)
                }
              >
                {" "}
                BUY NOW{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyDetailsHome;
