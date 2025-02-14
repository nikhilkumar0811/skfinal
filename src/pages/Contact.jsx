import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data or handle it as you wish
    console.log("Form submitted:", formData);
    alert("Message submitted! We will contact you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="container">
      <h2 className="section-title">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem" }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        <h3>Our Location</h3>
        <p>
          Phone: +123456789 <br />
          Email: support@skelectronics.com <br />
          Address: 123 Main Street, City, Country
        </p>
        {/* Google Map Embed Example */}
        <iframe
          title="SK Electronics Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
