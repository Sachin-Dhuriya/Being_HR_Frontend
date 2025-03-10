import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for success or error messages
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponseMessage("");
  
    try {
      const response = await fetch("https://beinghr-backend.onrender.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setResponseMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit the form. Server might be down.");
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-wrapper">
        <div className="contact-us-content">
          <h1 className="contact-us-title">Contact Us - BeingHR Community</h1>
          <p className="contact-us-intro">
            We’re here to connect with you! Whether you have questions, feedback, or are interested in partnerships, events, or joining our community, reach out anytime.
          </p>

          {/* General Inquiries */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">General Inquiries</h2>
            <p className="section-text">If you have any questions or need assistance, we’d love to help:</p>
            <ul className="section-list">
              <li>Email: <a href="mailto:shyam@beinghr.online">shyam@beinghr.online</a></li>
              <li>Phone: <a href="tel:+918850487716">+91 88504 87716</a></li>
              <li>Office Address: 103, Shourie Complex, JP Rd, Andheri West, Mumbai 400058</li>
            </ul>
          </section>

          {/* Join the Community */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Join the Community</h2>
            <p className="section-text">
              Want to be part of India’s largest HR network? Gain access to exclusive events, learning resources, and networking opportunities.
            </p>
            <ul className="section-list">
              <li>Website: <a href="http://www.beinghr.online" target="_blank" rel="noopener noreferrer">www.beinghr.online</a></li>
              <li>Membership Inquiries: <a href="mailto:membership@beinghr.com">membership@beinghr.com</a></li>
            </ul>
            <button className="cta-button">Join Now</button>
          </section>

          {/* Event Information */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Event Information</h2>
            <p className="section-text">
              For details about attending or sponsoring our events, reach out:
            </p>
            <p className="section-text">Event Support: <a href="mailto:events@beinghr.com">events@beinghr.com</a></p>
          </section>

          {/* Partnership Opportunities */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Partnership Opportunities</h2>
            <p className="section-text">
              Collaborate with BeingHR to promote HR innovation and connect with professionals across India:
            </p>
            <p className="section-text">Partnership Inquiries: <a href="mailto:partners@beinghr.com">partners@beinghr.com</a></p>
          </section>

          {/* Follow Us */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Follow Us on Social Media</h2>
            <ul className="section-list">
              <li>LinkedIn: <a href="#">BeingHR LinkedIn</a></li>
              <li>Instagram: <a href="#">@BeingHR</a></li>
              <li>Twitter: <a href="#">@BeingHR</a></li>
            </ul>
          </section>

          {/* Contact Form */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Contact Form</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>

            {/* Display response message */}
            {responseMessage && <p className="success-message">{responseMessage}</p>}
            {error && <p className="error-message">{error}</p>}
          </section>

          {/* Visit Us */}
          <section className="contact-page-sections">
            <h2 className="page-section-title">Visit Us</h2>
            <p className="section-text">
              Stop by our office to connect with the BeingHR team:
            </p>
            <p className="section-text">Office Hours: Monday to Friday, 10:00 AM – 6:00 PM</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
