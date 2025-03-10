import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const expertiseAreas = [
  {
    title: "Networking Opportunities",
    image: "https://th.bing.com/th/id/OIP.3qaXOzEiqNAhIZWc3LpleAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7/300x200", // Replace with actual image URL
    alt: "Conference Event",
  },
  {
    title: "Professional Development",
    image: "https://th.bing.com/th?id=OIP.Hupg0HJHR_18oATetZwIDAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2/300x200", // Replace with actual image URL
    alt: "Bespoke Event",
  },
  {
    title: "Exclusive Events",
    image: "https://th.bing.com/th/id/OIP.ucziH6SkmTjshyKZt8j88wHaE7?w=1430&h=953&rs=1&pid=ImgDetMain/300x200", // Replace with actual image URL
    alt: "Digital Event",
  },
];
const testimonials = [
  {
    name: "Pawan Chandra",
    company: "Pidilite Industries",
    image: "https://via.placeholder.com/60", // Replace with actual image URL
    rating: 5,
    feedback: "Very well organised. Time management is brilliant. Time spent well.",
  },
  {
    name: "Ruhan Saldanha",
    company: "Kaizen",
    image: "https://via.placeholder.com/60",
    rating: 5,
    feedback:
      "We are delighted to have been a part of the 4th CFO-Confex & Awards 2024 – Mumbai Chapter. The event was a resounding success.",
  },
  {
    name: "Mellacheruvu Kalyan Ram",
    company: "Focus Softnet",
    image: "https://via.placeholder.com/60",
    rating: 5,
    feedback:
      "I would like to extend my appreciation to Mr. Naved of Gainskills Media for coordinating the recently concluded CX.",
  },
];
function Home() {
 const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

 
  return (
    <div className="app">


<div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering HR Professionals Across India – Learn, Network, Grow.
          </h1>
          <p className="hero-subtitle">
            Join the largest community of HR professionals driving innovation, collaboration, and excellence in the workplace.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-button primary">Join the Community</Link>
            <Link to="/event" className="hero-button secondary">Explore Our Events</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </div>


      <div className="container">
        <div className="images-section">
          <div className="image-row">
            <img src="https://gainskillsmedia.com/assets/images/about-img.webp" alt="Event 6" className="image" />
          </div>
        </div>
        <div className="text-section">
          <h1> Your Growth, Our Mission</h1>
          <p>
          A short paragraph introducing BeingHR:
BeingHR is India’s leading community for HR professionals, offering unmatched opportunities to connect,
 learn, and grow. With over 60,000 members from industries like IT, Media, Manufacturing, and Startups, we are redefining HR's role as a strategic partner in business success.

          </p>
         
          <p>
            Whether you're looking to expand your knowledge, learn new skills,
            connect with other professionals, or create new business opportunities,
            Gain Skills is the right partner for you.
          </p>
          <button className="know-more-button">Know More</button>
        </div>
      </div>
   
      <div className="expertise-section">
      <h2 className="expertise-title">We Are Experts In</h2>
      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="expertise-card">
            <img
              src={area.image}
              alt={area.alt}
              className="expertise-image"
            />
            <div className="expertise-content">
              <h3 className="expertise-card-title">{area.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

   
    <div className="home-events-list">
  <h1>Our Upcoming Events</h1>
  <h3>Engage with Experts, Expand Your Horizons</h3>
  <div className="upcoming-events">
    {/* Event 1: CHRO Conclave 2025 */}
    <div className="home-event-card">
      <img 
        src="https://th.bing.com/th/id/OIP.AL-gsIOXt6-QGWSyVkszRAHaEC?w=293&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" 
        alt="CHRO Conclave 2025" 
        className="event-image" 
      />
      <div className="home-event-details">
        <h2>CHRO Conclave 2025</h2>
        <p><strong>Date:</strong> February 12, 2025</p>
        <p><strong>Location:</strong> Mumbai</p>
        <p><strong>Topics:</strong> DEIB, AI in Recruitment, and HR Innovations</p>
      </div>
    </div>

    {/* Event 2: Mock Interview Series */}
    <div className="home-event-card">
      <img 
        src="https://th.bing.com/th/id/OIP.HMYD89b3jHnJ7EVBsf3u4AHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" 
        alt="Mock Interview Series" 
        className="event-image" 
      />
      <div className="home-event-details">
        <h2>Mock Interview Series</h2>
        <p><strong>Date:</strong> March 1, 2025</p>
        <p><strong>Location:</strong> Online</p>
        <p><strong>Audience:</strong> MBA students and early HR professionals</p>
      </div>
    </div>
  </div>
</div>


    {/* <div className="events-list">
      <h1>Our Upcoming Webinar</h1>
      <div className='event-names'>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
      </div>
    </div>

    <div className="company-list">
      <h1>Trusted By</h1>
      <div className='company-names'>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
        <Link><img src="#" alt="Event" /></Link>
       
      </div>
    </div> */}
 
    <div className="two">
      <h2 className="title">Voices from Our Community</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrev}>
          &#8592;
        </button>
        <div className="testimonial-card">
          <div className="profile-section">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].company}</p>
            </div>
          </div>
          <div className="rating">
            {"★".repeat(testimonials[currentIndex].rating)}
            {"☆".repeat(5 - testimonials[currentIndex].rating)}
          </div>
          <p className="feedback">{testimonials[currentIndex].feedback}</p>
        </div>
        <div className="testimonial-card">
          <div className="profile-section">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].company}</p>
            </div>
          </div>
          <div className="rating">
            {"★".repeat(testimonials[currentIndex].rating)}
            {"☆".repeat(5 - testimonials[currentIndex].rating)}
          </div>
          <p className="feedback">{testimonials[currentIndex].feedback}</p>
        </div>
        <div className="testimonial-card">
          <div className="profile-section">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].company}</p>
            </div>
          </div>
          <div className="rating">
            {"★".repeat(testimonials[currentIndex].rating)}
            {"☆".repeat(5 - testimonials[currentIndex].rating)}
          </div>
          <p className="feedback">{testimonials[currentIndex].feedback}</p>
        </div>
        <button className="next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>


    <div className="contact-section-home">
      <h2>Have Questions? Let’s Connect!</h2>
      <div className="home-contact-info">
        <p>Email: <a href="mailto:shyam@beinghr.online">shyam@beinghr.online</a></p>
        <p>Phone: <a href="tel:+918850487716">+91-88504 87716</a></p>
      </div>
      <div className="home-social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
     </div>
  );
}

export default Home;
