import React from 'react';
import './About.css';

const About = () => {
  return (

    <div className="about-container">
      llll
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-description">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
          <p>
            Welcome to our company! We are passionate about delivering exceptional products and services to our customers. Our team is dedicated to innovation and excellence, ensuring that we meet and exceed your expectations.
          </p>
        </div>
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 1" className="team-img" />
            <div className="member-info">
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Team Member 2" className="team-img" />
            <div className="member-info">
              <h3>John Smith</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
