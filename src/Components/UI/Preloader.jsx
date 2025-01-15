import React from "react";
import "../styles/Preloader.css";
import { LocationOnSharp } from "@material-ui/icons";
function Preloader({ Loading }) {
  return (
    <div className={!Loading ? "preloader slide-r" : "preloader"}>
      <div className="preloader-wrapper">
        <div className="Loader">
          <div className="Loader-container">
            <div className="IconCon">
            <LocationOnSharp className="locationIcon" />
            </div>
            <span className="logo">FindMe</span>
            <div className="lineLoaderCon">
              <span className="line-preloader"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
