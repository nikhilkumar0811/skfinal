import React from "react";
import sk02 from "../../assets/vectors/sk02.png";
import laptop1 from "../../assets/vectors/laptop1.jpg";
import cctv from "../../assets/vectors/Cctv.jpg";
import biometric from "../../assets/vectors/biometric.jpg";
import mobilerepair from "../../assets/vectors/mobilerepair.jpg";
import electronics from "../../assets/vectors/electronic.png";
import laptoprepair from "../../assets/vectors/laptop-repair1.jpg";
import securitycamera from "../../assets/vectors/security-camera.jpg";
import Biometric from "../../assets/vectors/Biometric-Systems.jpg";
import moobilerepair from "../../assets/vectors/mobile-phone-repair.jpg";
import printer from "../../assets/vectors/printer.jpg";
import router from "../../assets/vectors/router.jpg";
import ups from "../../assets/vectors/ups.jpeg";
import hardisk from "../../assets/vectors/hardisk.png";
import mobile from "../../assets/vectors/mobile-phone-repair.jpg";
import laptop4 from "../../assets/vectors/laptop4.jpg";
import print from "../../assets/vectors/print.jpg";
import {
  FaBatteryFull,
  FaDesktop,
  FaHeadphones,
  FaKeyboard,
  FaCamera,
  FaWifi,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="home-container">
        {/* Left Section - Text Content */}
        <div className="home-text">
          <h1 className="home-title">SK ELECTRONICS</h1>
          <p className="home-description">
            Reliable IT solutions and electronic repairs, from laptops to CCTV
            installations. Expert service with cutting-edge technology for all
            your needs!
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

      {/* Our Products Section */}
      <div className="products-container">
        <h2 className="products-title">Our Products</h2>
        <div>
          <div>
            <p className="products-description">
              {" "}
              Explore our range of high-quality electronic products and services
              designed to meet your needs.
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="products-list">
            <div className="product-card">
              <img src={laptop1} alt="Laptop" />
              <h3>Laptops</h3>
              {/* <p>High-performance laptops for work and gaming.</p> */}
            </div>
            <div className="product-card">
              <img src={cctv} alt="CCTV" />
              <h3>CCTV Cameras</h3>
              {/* <p>Reliable security solutions with the latest technology.</p> */}
            </div>
            <div className="product-card">
              <img src={biometric} alt="Biometric" />
              <h3>Biometric Systems</h3>
              {/* <p>Advanced biometric access control systems.</p> */}
            </div>
            <div className="product-card">
              <img src={mobile} alt="Mobile Repair" />
              <h3>Mobile Repair</h3>
              {/* <p>Expert solutions for all smartphone issues.</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Section - Modify heading and add new section */}
      <div className="coffee-container">
        {/* <h2 className="coffee-title">Explore Our Wide Range of Electronics</h2> */}
        <div className="explore">
          <h2 class="explore-heading">
            Explore Our Wide Range of Electronics{" "}
          </h2>
          <div className="paragraph-last">
            <p>
              {" "}
              Our shop provides a wide range of electronic repair services,
              ensuring top-quality solutions for all your devices. From laptops
              to security systems, we deliver reliable fixes with expert
              precision.
            </p>
          </div>
        </div>
        <div className="coffee-content">
          {/* Left Side - Large Image */}
          <div className="coffee-image">
            <img
              src={print}
              alt="Electronics"
              className="large-electronics-img"
            />
          </div>

          {/* Right Side - Grid of Products */}
          <div className="coffee-products">
            <div className="product-row">
              <div className="coffee-product-card">
                <img src={laptoprepair} alt="Laptop" />
                <h4>Laptop</h4>
              </div>
              <div className="coffee-product-card">
                <img src={securitycamera} alt="CCTV Camera" />
                <h4>CCTV Camera</h4>
              </div>
              <div className="coffee-product-card">
                <img src={Biometric} alt="Biometric System" />
                <h4>Biometric System</h4>
              </div>
              <div className="coffee-product-card">
                <img src={moobilerepair} alt="Mobile Repair" />
                <h4>Mobile Repair</h4>
              </div>
            </div>

            <div className="product-row">
              <div className="coffee-product-card">
                <img src={printer} alt="Printer" />
                <h4>Printer</h4>
              </div>
              <div className="coffee-product-card">
                <img src={router} alt="Router" />
                <h4>Router</h4>
              </div>
              <div className="coffee-product-card">
                <img src={hardisk} alt="Hard Disk" />
                <h4>Hard Disk</h4>
              </div>
              <div className="coffee-product-card">
                <img src={ups} alt="UPS" />
                <h4>UPS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new section */}
      <div className="new-container">
        {/* Left Side - 3 Cards */}
        <div className="new-list">
          <div className="new-card">
            <FaBatteryFull className="card-icon-left" />
            <h3 className="new-title-left">Power Banks</h3>
            <p className="new-desc-left">
              Portable chargers for all your devices.
            </p>
          </div>
          <div className="new-card">
            <FaDesktop className="card-icon-left" />
            <h3 className="new-title-left">Monitors</h3>
            <p className="new-desc-left">
              Crystal-clear displays for work & gaming.
            </p>
          </div>
          <div className="new-card">
            <FaHeadphones className="card-icon-left" />
            <h3 className="new-title-left">Headphones</h3>
            <p className="new-desc-left">
              Immersive sound with noise cancellation.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="new-image">
          <img src={laptop4} alt="New Items" />
        </div>

        {/* Right Side - 3 Cards */}
        <div className="new-list">
          <div className="new-card">
            <FaKeyboard className="card-icon-right" />
            <h3 className="new-title-right">Keyboards</h3>
            <p className="new-desc-right">Mechanical and wireless options.</p>
          </div>
          <div className="new-card">
            <FaCamera className="card-icon-right" />
            <h3 className="new-title-right">Cameras</h3>
            <p className="new-desc-right">
              Capture memories in high definition.
            </p>
          </div>
          <div className="new-card">
            <FaWifi className="card-icon-right" />
            <h3 className="new-title-right">WiFi Routers</h3>
            <p className="new-desc-right">
              Fast and reliable internet connectivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
