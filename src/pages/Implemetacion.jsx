import React from 'react'
import {Link} from 'react-router-dom'

function Implementacion() {
  return (
    <>
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to Our Learning Community</h2>
            <p>
              At our online learning platform, we believe in the transformative power of education.
              Our mission is to make learning accessible, engaging, and impactful for everyone.
            </p>
            <p>
              Join a community of passionate learners and expert instructors who are dedicated to
              helping you succeed on your educational journey.
            </p>
          </div>
          <div className="about-image">
            {/* Puedes agregar una imagen representativa aquí */}
            <img
              src="https://example.com/about-image.jpg"
              alt="Learning Community"
            />
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <img
              src="https://example.com/feature-1-icon.png"
              alt="Feature 1"
            />
            <h3>Interactive Courses</h3>
            <p>
              Immerse yourself in interactive courses designed to enhance your skills through
              hands-on learning experiences.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://example.com/feature-2-icon.png"
              alt="Feature 2"
            />
            <h3>Expert Instructors</h3>
            <p>
              Learn from industry experts who are passionate about sharing their knowledge and
              helping you succeed.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://example.com/feature-3-icon.png"
              alt="Feature 3"
            />
            <h3>Flexible Learning Paths</h3>
            <p>
              Customize your learning experience with flexible paths tailored to your goals and
              schedule.
            </p>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default Implementacion
