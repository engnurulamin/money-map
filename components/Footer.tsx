import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          &copy; 2024 Money Map. All rights reserved. Developed by Nurul Amin.
        </p>
        <div className="footer-right">
          <p>Follow me on</p>
          <a
            href="https://www.facebook.com/nurulamin15"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/nurul_amin15"
            className="social-icon"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/nurulamin15"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com/engnurulamin"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
