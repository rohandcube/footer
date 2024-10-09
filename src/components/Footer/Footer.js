import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Our Story</p>
            <p>Our Team</p>
            <p>Our Philosophy</p>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <p>Massage Therapy</p>
            <p>Facial Treatments</p>
            <p>Body Treatments</p>
            <p>Spa Packages</p>
          </div>
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p>Contact Us</p>
            <p>Book an Appointment</p>
            <p>FAQs</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="footer-newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <p>Get the latest news and offers right to your inbox</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <p>Follow Us</p>
          <a href="https://instagram.com" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1721492761~exp=1721493361~hmac=c0d574f1b9bdb35afff517789208d452d2faf22e63419e2bb8da0ef06af596f3" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Spa Haven. All rights reserved.</p>
        </div>
        <div className="footer-logo">
          <a href="https://www.spahaven.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Unilever.svg" alt="Spa Haven Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
