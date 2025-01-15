import React from "react";
import "../Styles/ListingHome.scss"
import Properties from "./Properties";

function ListingContainer({ properties }) {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className='listingWrapper'>
          <div className='title'>
            <div className="heading">
              <h2>Properties Listing</h2>
              <span className="show-result">
                Showing <span>{properties.length}</span> Listings
              </span>
            </div>
          </div>
          <div className="ProContainer">
            {properties.map((data) => {
              return (
                <Properties
                  data={data}
                  key={data._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListingContainer;
