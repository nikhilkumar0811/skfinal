import React from "react";
import sk02 from "../../assets/vectors/sk02.png";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Left Section - Text Content */}
      <div className="home-text">
        <h1 className="home-title">SK ElECTRONICS</h1>
        <p className="home-description">
          Your trusted destination for expert laptop repairs, CCTV installation,
          biometric systems, mobile repairing, and IT maintenance. With a team
          of skilled professionals and cutting-edge technology, we ensure
          top-quality service for all your electronic and networking needs.
          Whether it's a quick fix or a comprehensive solution, we are committed
          to delivering reliability and excellence.
        </p>
        <button className="home-button" onClick={() => navigate("/services")}>
          Explore More
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="home-image">
        <img src={sk02} alt="Electronics" className="home-img" />
      </div>
    </div>
  );
}

export default Home;
