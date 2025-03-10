import React, { useState } from 'react';
import './FlagshipEventPage.css';

const FlagshipEventsPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    attendingEvent: false,
    eventName: "Flagship Event",  // Default value for eventName
  });

  // State to manage form submission
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // Basic validation (just to check if fields are filled)
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.age
    ) {
      try {
        const response = await fetch("https://beinghr-backend.onrender.com/eventregistration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),  // Send form data as is
        });

        const data = await response.json();
        setLoading(false);

        if (data.success) {
          setMessage("🎉 Registration successful!");
          setIsFormSubmitted(true);
          // Reset form (optional)
          setFormData({
            name: '',
            phone: '',
            email: '',
            age: '',
            attendingEvent: false,
            eventName: "Flagship Event",  // Default value for eventName
          });
        } else {
          setMessage(data.message || "Something went wrong!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setMessage(`❌ Error submitting the form. Please try again. ${error}`);
        setLoading(false);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="f-flagship-events-page">
      {/* Header Section */}
      <header className="f-event-header">
        <h1>Flagship Events</h1>
        <p>Our HR Conclaves are large-scale gatherings featuring keynote speeches, panel discussions, and networking opportunities.</p>
      </header>

      {/* Event Overview */}
      <section className="f-event-overview">
        <h2>Event Overview</h2>
        <p>Join us at our flagship events where industry leaders gather to share insights on the latest trends and innovations in HR.</p>
        <ul>
          <li><strong>CHRO Confex & Awards:</strong> Recognizing excellence and innovation in HR practices.</li>
          <li><strong>Future of Work Summit:</strong> Exploring trends like hybrid work, AI in HR, and DEIB.</li>
        </ul>
      </section>

      {/* Featured Event: CHRO Confex 2025 */}
      <section className="f-chro-confex">
        <h2>CHRO Confex 2025</h2>
        <p><strong>Date:</strong> February 12, 2025</p>
        <p><strong>Location:</strong> Mumbai</p>
        <p><strong>Topics:</strong> DEIB, AI in Recruitment, HR Innovations</p>
      </section>

      {/* Featured Images */}
      <section className="f-event-images">
        <div className="f-image-container">
          <img src="#" alt="CHRO Confex" />
          <p>CHRO Confex & Awards</p>
        </div>
        <div className="f-image-container">
          <img src="#" alt="Future of Work Summit" />
          <p>Future of Work Summit</p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="f-registration-form">
        <h2>Register for the Event</h2>

        {message && <p className="text-center text-red-500">{message}</p>}

        {isFormSubmitted ? (
          <div className="f-confirmation-message">
            <h3>Thank you for registering!</h3>
            <p>Your registration has been successfully submitted. We will send you more details soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="f-form-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="f-form-field">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="phone"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="f-form-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="f-form-field">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Hidden eventName field */}
            <input type="hidden" name="eventName" value="Flagship Event" />

            <div className="f-form-field">
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};

export default FlagshipEventsPage;
