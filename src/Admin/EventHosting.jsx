import React, { useState } from 'react';
import axios from 'axios';
import './EventHosting.css';

function EventHosting() {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        time: '',
        image: null
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEvent({ ...event, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("title", event.title);
        formData.append("description", event.description);
        formData.append("date", event.date);
        formData.append("location", event.location);
        formData.append("time", event.time);
        
        if (event.image) {
            formData.append("image", event.image);
        }

        try {
            const res = await axios.post('https://beinghr-backend.onrender.com/api/events/add-event', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            alert(res.data.message);
            setEvent({ title: '', description: '', date: '', location: '', time: '', image: null });
        } catch (error) {
            console.error("Error:", error);
            setError(`Failed to add event. Please try again. ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="event-container">
            <h5 className="Host-event-heading">Add New Event</h5>
            {error && <p className="error-message">{error}</p>}
            <form className="event-form" onSubmit={handleSubmit}>
                <input type="text" name="title" className="event-input" placeholder="Title" value={event.title} onChange={handleChange} required />
                <textarea name="description" className="event-textarea" placeholder="Description" value={event.description} onChange={handleChange} required />
                <input type="date" name="date" className="event-input" value={event.date} onChange={handleChange} required />
                <input type="text" name="location" className="event-input" placeholder="Location" value={event.location} onChange={handleChange} required />
                <input type="time" name="time" className="event-input" value={event.time} onChange={handleChange} required />
                
                <input type="file" accept="image/*" className="event-input" onChange={handleImageChange} />

                <button type="submit" className="event-button" disabled={loading}>
                    {loading ? "Adding Event..." : "Add Event"}
                </button>
            </form>
        </div>
    );
}

export default EventHosting;
