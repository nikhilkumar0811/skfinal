// import React from "react";

// function Services() {
//   return (
//     <div className="container">
//       <h2 className="section-title">Our Services</h2>
//       <ul>
//         <li>
//           Laptop Repairs (DELL, HP, SONY, Acer, COMPAC, Lenovo, ASUS, etc.)
//         </li>
//         <li>
//           Network &amp; Surveillance Setup (D-Link, CISCO, Systimax Solutions,
//           AMP, etc.)
//         </li>
//         <li>
//           CCTV Installation &amp; Maintenance (HIKVISION, CP PLUS, LG, Samsung,
//           etc.)
//         </li>
//         <li>Mobile Repairing (Oppo, Vivo, Sony, etc.)</li>
//         <li>Computer Networking &amp; Data Backup</li>
//         <li>Biometric Systems</li>
//         <li>Card-Level Repairing</li>
//         <li>Annual Preventive Maintenance for IT Equipment</li>
//       </ul>
//       <p>
//         Our skilled technicians have years of experience and are ready to help
//         you keep your systems running smoothly.
//       </p>
//     </div>
//   );
// }

// // export default Services;

// import React from "react";
// import BiometricSystems from "../assets/vectors/Biometric-Systems.jpg";
// import cardlevelRepairing from "../assets/vectors/Card-Level Repairing.jpeg";
// import computerNetworking from "../assets/vectors/Computer Networking .png";
// import laptoprepair from "../assets/vectors/laptop-repair1.jpg";

// const services = [
//   {
//     img: [laptoprepair],
//     id: 1,
//     title: "Laptop Repairs",
//     description:
//       "We repair all major brands including DELL, HP, SONY, Acer, COMPAC, Lenovo, ASUS, etc.",
//   },
//   {
//     id: 2,
//     title: "Network & Surveillance Setup",
//     description:
//       "Expert setup for D-Link, CISCO, Systimax Solutions, AMP, and more.",
//   },
//   {
//     id: 3,
//     title: "CCTV Installation & Maintenance",
//     description:
//       "Installation & maintenance for HIKVISION, CP PLUS, LG, Samsung, etc.",
//   },
//   {
//     id: 4,
//     title: "Mobile Repairing",
//     description: "Repairs for Oppo, Vivo, Sony, and other leading brands.",
//   },
//   {
//     id: 5,
//     title: "Computer Networking & Data Backup",
//     description:
//       "Secure and efficient networking solutions with reliable data backup services.",
//   },
//   {
//     id: 6,
//     title: "Biometric Systems",
//     description:
//       "Installation and maintenance of modern biometric security solutions.",
//   },
//   {
//     id: 7,
//     title: "Card-Level Repairing",
//     description:
//       "Advanced component-level repairs for motherboards and circuits.",
//   },
//   {
//     id: 8,
//     title: "Annual Preventive Maintenance",
//     description:
//       "Scheduled maintenance to keep your IT equipment running smoothly.",
//   },
// ];

// function Services() {
//   return (
//     <div className="services-page">
//       <header className="header-section">
//         <div className="container text-center text-light">
//           <h1 className="fw-semibold">Our Services</h1>
//           <p className="w-75 mx-auto">
//             We provide expert IT solutions, repairs, and maintenance services to
//             keep your systems running at peak performance.
//           </p>
//         </div>
//       </header>

//       <div className="container py-5">
//         <div className="row g-4">
//           {services.map((service) => (
//             <div key={service.id} className="col-lg-6">
//               <div className="service-card text-white shadow p-4">
//                 <h2 className="service-title text-danger">{service.title}</h2>
//                 <p className="service-description">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-dark text-light py-5 text-center">
//         <p className="fw-semibold">
//           Our skilled technicians have years of experience and are ready to help
//           you keep your systems running smoothly.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Services;

// import React from "react";
// import { Card } from "react-bootstrap";
// import BiometricSystems from "../assets/vectors/Biometric-Systems.jpg";
// import cardlevelRepairing from "../assets/vectors/Card-Level-Repairing.jpeg";
// import computerNetworking from "../assets/vectors/Computer-Networking.png";
// import laptoprepair from "../assets/vectors/laptop-repair1.jpg";
// import mobilephonerepair from "../assets/vectors/mobile-phone-repair.jpg";
// import NetworkSurveillancesetup from "../assets/vectors/Network-Surveillance-Setup.jpg";
// import securitycamera from "../assets/vectors/security-camera.jpg";
// import preventivemaintenance from "../assets/vectors/preventive-maintenance.png";

// const services = [
//   {
//     img: laptoprepair,
//     id: 1,
//     title: "Laptop Repairs",
//     description:
//       "We repair all major brands including DELL, HP, SONY, Acer, COMPAC, Lenovo, ASUS, etc.",
//   },
//   {
//     img: NetworkSurveillancesetup,
//     id: 2,
//     title: "Network & Surveillance Setup",
//     description:
//       "Expert setup for D-Link, CISCO, Systimax Solutions, AMP, and more.",
//   },
//   {
//     img: securitycamera,
//     id: 3,
//     title: "CCTV Installation & Maintenance",
//     description:
//       "Installation & maintenance for HIKVISION, CP PLUS, LG, Samsung, etc.",
//   },
//   {
//     img: mobilephonerepair,

//     id: 4,
//     title: "Mobile Repairing",
//     description: "Repairs for Oppo, Vivo, Sony, and other leading brands.",
//   },
//   {
//     img: computerNetworking,

//     id: 5,
//     title: "Computer Networking & Data Backup",
//     description:
//       "Secure and efficient networking solutions with reliable data backup services.",
//   },

//   {
//     img: BiometricSystems,
//     id: 6,
//     title: "Biometric Systems",
//     description:
//       "Installation and maintenance of modern biometric security solutions.",
//   },
//   {
//     img: cardlevelRepairing,

//     id: 7,
//     title: "Card-Level Repairing",
//     description:
//       "Advanced component-level repairs for motherboards and circuits.",
//   },
//   {
//     img: preventivemaintenance,

//     id: 8,
//     title: "Annual Preventive Maintenance",
//     description:
//       "Scheduled maintenance to keep your IT equipment running smoothly.",
//   },
// ];

// function Services() {
//   return (
//     <div className="services-page">
//       <header className="height-75">
//         <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
//           <h1 className="text-center fw-semibold">Our Services</h1>
//           <p className="text-center w-75 mb-5">
//             We provide expert IT solutions, repairs, and maintenance services to
//             keep your systems running at peak performance.
//           </p>
//         </div>
//       </header>

//       <div className="container py-5">
//         <div className="row g-4">
//           {services.map((service) => (
//             <div key={service.id} className="col-lg-6">
//               <Card className="text-white shadow scale-hover-effect">
//                 <Card.Img src={service.img} />
//                 <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
//                   <Card.Title className="fs-1 text-danger">
//                     {service.title}
//                   </Card.Title>
//                   <Card.Text className="text-center">
//                     {service.description}
//                   </Card.Text>
//                 </Card.ImgOverlay>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Services;

import React from "react";
import { Card } from "react-bootstrap";
import BiometricSystems from "../assets/vectors/Biometric-Systems.jpg";
import cardlevelRepairing from "../assets/vectors/Card-Level-Repairing.jpeg";
import computerNetworking from "../assets/vectors/Computer-Networking.png";
import laptoprepair from "../assets/vectors/laptop-repair1.jpg";
import mobilephonerepair from "../assets/vectors/mobile-phone-repair.jpg";
import NetworkSurveillancesetup from "../assets/vectors/Network-Surveillance-Setup.jpg";
import securitycamera from "../assets/vectors/security-camera.jpg";
import preventivemaintenance from "../assets/vectors/preventive-maintenance.png";

const services = [
  {
    img: laptoprepair,
    id: 1,
    title: "Laptop Repairs",
    description:
      "We repair all major brands including DELL, HP, SONY, Acer, COMPAC, Lenovo, ASUS, etc.",
  },
  {
    img: NetworkSurveillancesetup,
    id: 2,
    title: "Network & Surveillance Setup",
    description:
      "Expert setup for D-Link, CISCO, Systimax Solutions, AMP, and more.",
  },
  {
    img: securitycamera,
    id: 3,
    title: "CCTV Installation & Maintenance",
    description:
      "Installation & maintenance for HIKVISION, CP PLUS, LG, Samsung, etc.",
  },
  {
    img: mobilephonerepair,
    id: 4,
    title: "Mobile Repairing",
    description: "Repairs for Oppo, Vivo, Sony, and other leading brands.",
  },
  {
    img: computerNetworking,
    id: 5,
    title: "Computer Networking & Data Backup",
    description:
      "Secure and efficient networking solutions with reliable data backup services.",
  },
  {
    img: BiometricSystems,
    id: 6,
    title: "Biometric Systems",
    description:
      "Installation and maintenance of modern biometric security solutions.",
  },
  {
    img: cardlevelRepairing,
    id: 7,
    title: "Card-Level Repairing",
    description:
      "Advanced component-level repairs for motherboards and circuits.",
  },
  {
    img: preventivemaintenance,
    id: 8,
    title: "Annual Preventive Maintenance",
    description:
      "Scheduled maintenance to keep your IT equipment running smoothly.",
  },
];

const styles = {
  page: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#050a23",
    minHeight: "75vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  header: {
    fontWeight: "600",
    marginBottom: "20px",
  },
  description: {
    maxWidth: "75%",
    marginBottom: "30px",
    fontSize: "1.1rem",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", // Increased min size for better visibility
    gap: "20px",
    padding: "50px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.05)", // Slightly enlarge on hover
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
  },
  cardImage: {
    width: "100%",
    height: "280px", // Increased height for better display
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(5, 10, 35, 0.85)", // Increased visibility of background
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    color: "#fff",
    transition: "0.3s ease-in-out",
    opacity: "0.9",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#ff4444",
  },
  text: {
    fontSize: "1rem",
    marginTop: "10px",
  },
};

function Services() {
  return (
    <div>
      <header style={styles.page}>
        <h1 style={styles.header}>Our Services</h1>
        <p style={styles.description}>
          We provide expert IT solutions, repairs, and maintenance services to
          keep your systems running at peak performance.
        </p>
      </header>

      <div style={styles.cardContainer}>
        {services.map((service) => (
          <Card
            key={service.id}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = styles.cardHover.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Card.Img src={service.img} style={styles.cardImage} />
            <Card.ImgOverlay style={styles.overlay}>
              <Card.Title style={styles.title}>{service.title}</Card.Title>
              <Card.Text style={styles.text}>{service.description}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
