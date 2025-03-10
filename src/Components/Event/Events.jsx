import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios"; // Import axios for API requests
import "./Event.css";

const event = [
  {
    category: "Flagship Events",
    overview: "Our HR Conclaves are large-scale gatherings featuring keynote speeches, panel discussions, and networking opportunities.",
    highlights: [
      "CHRO Confex & Awards: Recognizing excellence and innovation in HR practices.",
      "Future of Work Summit: Exploring trends like hybrid work, AI in HR, and DEIB."
    ],
    image: "https://th.bing.com/th/id/OIP.pXPxVa1g_HWFt1FKYJfLdAHaE8?rs=1&pid=ImgDetMain",
    upcoming: {
      title: "CHRO Confex 2025",
      date: "February 12, 2025",
      location: "Mumbai",
      topics: ["DEIB", "AI in Recruitment", "HR Innovations"],
      cta: "Register for the Event",
      link: "/skill_workshop"
    }
  },
  {
    category: "Skill-Building Workshops",
    overview: "Hands-on, interactive sessions led by industry experts to enhance your HR skills and knowledge.",
    highlights: [
      "HR Analytics and Data-Driven Decision-Making",
      "Diversity, Equity, Inclusion & Belonging (DEIB) Practices",
      "Talent Acquisition Strategies"
    ],
    image: "https://th.bing.com/th/id/OIP.mmD6vbqxt1zfDfY6urRwmQHaEK?w=748&h=421&rs=1&pid=ImgDetMain",
    upcoming: {
      title: "HR Analytics Bootcamp",
      date: "March 10, 2025",
      location: "Online",
      cta: "Register for the Event",
      link: "/flagship"
    }
  }
];

function Events() {
  const [mongoEvents, setMongoEvents] = useState([]); // State to store events from MongoDB

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://beinghr-backend.onrender.com/eventdetails");
        console.log("Fetched Events Data:", response.data.data); // Debugging
        setMongoEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    fetchEvents();
  }, []);
  

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>Events - BeingHR Community</h1>
        <p>
          BeingHR hosts a variety of impactful and engaging events designed to
          bring HR professionals together, foster collaboration, and address the
          evolving challenges in human resources.
        </p>
      </header>

      <div className="events-list">
        {/* Render Hardcoded Events */}
        {event.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.category} className="event-image" />
            <div className="event-content">
              <h2 className="event-category">{event.category}</h2>
              <p className="event-overview">{event.overview}</p>
              <ul className="event-highlights">
                {event.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="event-upcoming">
                <h3>{event.upcoming.title}</h3>
                <p><strong>Date:</strong> {event.upcoming.date}</p>
                <p><strong>Location:</strong> {event.upcoming.location}</p>
                {event.upcoming.topics && (
                  <p><strong>Topics:</strong> {event.upcoming.topics.join(", ")}</p>
                )}
                <Link
                  to={event.upcoming ? `/register/${event._id}` : "#"}
                  className="cta-button"
                >
                  {event.upcoming?.cta || "Register"}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Render MongoDB Events */}
{mongoEvents.map((event, index) => (
  <div className="event-card" key={`mongo-${index}`}>
    <img src={event.image || "https://via.placeholder.com/400"} alt={event.title} className="event-image" />
    <div className="event-content">
      <h2 className="event-category">{event.title}</h2>
      <p className="event-overview">{event.description}</p>
      <div className="event-upcoming">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Time:</strong> {event.time}</p>

        {/* Fix: Check if `event.upcoming` exists before accessing `cta` */}
        <Link to={`/register/${event._id}`} className="cta-button">
          {event?.upcoming?.cta || "Register"}
        </Link>
      </div>
    </div>
  </div>
))}


      </div>
    </div>
  );
}

export default Events;
