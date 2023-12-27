import React from "react";
import Navbar from "./navbar";

function home() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/home/styles.css" />
      <Navbar />
      <img className="home-image" src="/css/home/images/home.svg" />

      <div className="home-content">
        <h1>Welcome to Organic!</h1>
        <p>
          Discover culinary creativity at Organic.in! Whether you're a
          seasoned chef or kitchen novice, our recipe generator inspires your
          next masterpiece. Join us for a celebration of flavor, creativity, and
          the joy of good food!
        </p>
        <a className="start-now-button" href="/features">START NOW</a>
      </div>
    </div>
  );
}

export default home;
