import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // ✅ Make sure axios is imported
import "./Skill.css";

const Skill = () => {
  const { eventId } = useParams(); // Get event ID from URL
  const [eventData, setEventData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    attendingEvent: false,
    eventName: "", // To be set dynamically
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch event details based on eventId
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://beinghr-backend.onrender.com/eventdetails");
        console.log("Fetched Events Data:", response.data);

        const eventList = response.data.data; // Event array from backend
        if (!eventList || eventList.length === 0) {
          console.error("No events found!");
          return;
        }

        const eventDetails = eventList.find((event) => event._id === eventId);

        if (eventDetails) {
          setEventData(eventDetails);
          setFormData((prev) => ({ ...prev, eventName: eventDetails.title }));
        } else {
          console.error(`Event with ID ${eventId} not found!`);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [eventId]);

  // ✅ Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
  
    if (formData.name && formData.phone && formData.email && formData.age) {
      try {
        const response = await fetch("https://beinghr-backend.onrender.com/eventregistration", {  // ✅ Ensure the correct API route
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        // ✅ Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received an invalid response from server");
        }
  
        const data = await response.json();
        setLoading(false);
  
        if (data.success) {
          setMessage("🎉 Registration successful!");
          setIsFormSubmitted(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            age: "",
            attendingEvent: false,
            eventName: eventData?.title || "",
          });
        } else {
          setMessage(data.message || "Something went wrong!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setMessage(`❌ Error submitting the form. ${error.message}`);
        setLoading(false);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };
  

  // ✅ Handle case where eventData is null
  if (!eventData) return <p>Loading event details...</p>;

  return (
    <div className="event-detail-page">
      <header className="event-header">
        <h1>{eventData.title}</h1>
        <p>{eventData.description}</p>
      </header>

      <section className="event-details">
        <h2>Event Details</h2>
        <p>
          <strong>Date:</strong> {eventData.date}
        </p>
        <p>
          <strong>Location:</strong> {eventData.location}
        </p>
        <p>
          <strong>Time:</strong> {eventData.time}
        </p>
      </section>

      <section className="f-registration-form">
        <h2>Register for {eventData.title}</h2>

        {message && <p className="text-center text-red-500">{message}</p>}

        {isFormSubmitted ? (
          <div className="f-confirmation-message">
            <h3>Thank you for registering!</h3>
            <p>Your registration has been successfully submitted.</p>
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
              <label htmlFor="phone">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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

            <input type="hidden" name="eventName" value={eventData.title} />

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

export default Skill;
