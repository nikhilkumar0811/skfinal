import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vectors/logo.png";

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
        backgroundColor: "black",
        color: "white",
        borderBottom: "0.5px solid white",
      }}
    >
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={logo}
            alt="SK Electronics Logo"
            className="navbar-logo-img"
            style={{ height: "200px" }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        className="navbar-links"
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "1.2rem",
          fontWeight: "500",
        }}
      >
        <Link
          className="navbar-link"
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          className="navbar-link"
          to="/services"
          style={{ color: "white", textDecoration: "none" }}
        >
          Services
        </Link>
        <Link
          className="navbar-link"
          to="/gallery"
          style={{ color: "white", textDecoration: "none" }}
        >
          Gallery
        </Link>
        <Link
          className="navbar-link"
          to="/reviews"
          style={{ color: "white", textDecoration: "none" }}
        >
          Reviews
        </Link>
        <Link
          className="navbar-link"
          to="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
