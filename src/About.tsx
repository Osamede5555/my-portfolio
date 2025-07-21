import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row bg-light shadow-sm rounded p-4 align-items-start">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/path-to-profile-image.jpg" // Replace with your image path
            alt="Cynthia Osamede"
            className="img-fluid rounded-circle shadow"
            style={{ width: "220px", height: "220px", objectFit: "cover", border: "5px solid #0d6efd" }}
          />
          <div className="mt-3">
            <a href="https://drive.google.com/file/d/1KbTAAAIm1PWAqSO1edk3m9E2nkWBzFkD/view?usp=sharing" className="btn btn-outline-primary btn-sm" download>
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-md-8">
          <h1 className="fw-bold text-primary">Cynthia Osamede</h1>
          <p className="text-muted">Frontend Engineer · Rivers, Nigeria</p>

          {/* Contact Info */}
          <div className="mb-3">
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a href="mailto:osamedecynthia0@gmail.com" className="text-decoration-none text-dark">
                osamedecynthia0@gmail.com
              </a>
            </p>
            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348109542715" className="text-decoration-none text-dark">
                +2348109542715
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="mb-4">
            <a href="https://github.com/your-github" className="me-3 fs-4 text-dark" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover-opacity" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" className="me-3 fs-4 text-primary" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:osamedecynthia0@gmail.com" className="fs-4 text-danger">
              <FaEnvelope />
            </a>
          </div>

          {/* Skills Section */}
          <h5 className="fw-semibold border-bottom pb-1 mb-2">Skills</h5>
          <div className="row row-cols-2 row-cols-md-3 g-2 mb-4">
            {["HTML", "CSS", "Bootstrap", "JavaScript ES6+", "React/Redux", "React Native (basic)", "Laravel (basic)"].map((skill) => (
              <div className="col" key={skill}>
                <span className="badge bg-primary-subtle text-dark rounded-pill px-3 py-2">{skill}</span>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <h5 className="fw-semibold border-bottom pb-1 mb-2">Tools</h5>
          <div className="row row-cols-2 row-cols-md-3 g-2 mb-4">
            {["Git/GitHub", "Netlify", "Trello/Jira", "Firebase", "eslint/webpack", "Open to learning new tech"].map((tool) => (
              <div className="col" key={tool}>
                <span className="badge bg-secondary-subtle text-dark rounded-pill px-3 py-2">{tool}</span>
              </div>
            ))}
          </div>

          {/* About Me */}
          <h5 className="fw-semibold border-bottom pb-1 mb-2">About Me</h5>
          <p className="text-muted">
            Hi, I'm Cynthia — an ever-learning creative Frontend Engineer and student currently in Rivers, Nigeria.
            I build pixel-perfect user interfaces and JavaScript applications that run on the web.
            <br />
            <br />
            I'm a creative developer with strong communication skills and a passion for building scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
