import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f", minHeight: "100vh", paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="container">
        <div className="text-center text-white mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-light">Let’s collaborate or just say hello.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 bg-white p-4 rounded shadow-sm">
            {/* Contact Form */}
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="text-center my-4">
              <span className="text-muted">or</span>
            </div>

            {/* Social Links */}
            <div className="d-grid gap-2">
              <a
                href="https://x.com/Osamede83474053"
                className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="me-2" /> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/osamede-cynthia-b6553026a/"
                className="btn btn-outline-primary d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/Osamede5555"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
