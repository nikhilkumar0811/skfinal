import React from "react";
// import ExampleVector from '../assets/vectors/example2.svg'

function Gallery() {
  return (
    <div className="container">
      <h2 className="section-title">Gallery</h2>
      <p>
        Check out some of our repair processes, completed projects, and
        behind-the-scenes shots of our workshop.
      </p>

      {/* Example placeholders for images */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "200px", height: "150px", background: "#ccc" }}>
          Image 1
        </div>
        <div style={{ width: "200px", height: "150px", background: "#ccc" }}>
          Image 2
        </div>
        <div style={{ width: "200px", height: "150px", background: "#ccc" }}>
          Image 3
        </div>
      </div>
    </div>
  );
}

export default Gallery;
