import React, { useState } from 'react';
import './Login.css';  // Import the custom CSS for styling

const Login = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      email: '',
      password: '',
    });

    // Simple validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // You can handle successful login here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <div>
            <p>Do not have an Account? <a href="/signup" className='login-link'>Signup</a></p>
        </div>

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
