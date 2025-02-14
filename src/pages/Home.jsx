import React from "react";
import sk02 from "../assets/vectors/sk02.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        height: "100vh",
        color: "white",
      }}
    >
      {/* Left Section - Text Content */}
      <div
        className="home-text"
        style={{ flex: 1, textAlign: "left", padding: "20px" }}
      >
        <h1
          className="home-title"
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}
        >
          SK Electronics
        </h1>
        <p
          className="home-description"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.5",
            marginBottom: "30px",
          }}
        >
          Your trusted destination for expert laptop repairs, CCTV installation,
          biometric systems, mobile repairing, and IT maintenance. With a team
          of skilled professionals and cutting-edge technology, we ensure
          top-quality service for all your electronic and networking needs.
          Whether it's a quick fix or a comprehensive solution, we are committed
          to delivering reliability and excellence.
        </p>
        <button
          className="home-button"
          onClick={() => navigate("/services")}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "12px 24px",
            fontSize: "1.2rem",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
            borderRadius: "5px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          Explore More
        </button>
      </div>

      {/* Right Section - Image */}
      <div
        className="home-image"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}
      >
        <img
          src={sk02}
          alt="Electronics"
          className="home-img"
          style={{ maxWidth: "500px", height: "auto", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default Home;
