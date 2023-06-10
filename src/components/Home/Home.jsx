import React, { useState, useEffect } from "react";
import BannerImg from "../../assets/pic.png";
import useFetch from "../../hooks/useFetch";

import "./Home.scss";
function Home() {
  return (
    <>
      <div className="home-container">
        {/* // When nothing is Searched */}
        <div className="not-searched">
          <div className="left">
            <h1 className="main-text">
              SEARCH FOR YOUR FAVOURITE RECIPES HERE
            </h1>
            <div className="sec-text">Over 1 million recipes!</div>
          </div>
          <div className="right">
            <img className="banner-img" src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
