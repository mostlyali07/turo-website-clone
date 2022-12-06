import React from "react";
import "../App.css";
import BGD from "../lesssmall.webp"
const Dreams = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 Dreams text-center">
            <h2>Fuel your daydreams</h2>
            <div className="Purple"></div>
            <p>
              Stoke your wanderlust with some dreamy photo chronicles of road
              trip adventures.
            </p>
            <button>Explore Travelogues</button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
            <div className="col-md-12 BGD text-center">
                <div className="Special p-4">
                    <h6>Featured travelogue</h6>
                    <h3>An Olympic experience in Washington</h3>
                    <p>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                    <span>Read more</span>
                </div>
                <img src= {BGD} className="mt-5"/>
            </div>
        </div>
      </div>
    </>
  );
};
export default Dreams;
