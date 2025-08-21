import React from "react";
import trulyinboxLogo from '../assets/icons/trulyinbox-logo.png'

const Footer = () => {
  return (
    <footer className="main-footer">
        {/* Logo + Social */}
        <div className="container">
          <div className="footer-top">
          <a href="#" className="footer-logo">
            <img
              src={trulyinboxLogo}
              alt="TrulyInbox"
               width="60"
              height="50"
            />
          </a>

          <ul className="footer-social">
            <li>
              <a
                href="https://www.linkedin.com/company/trulyinbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.trulyinbox.com/wp-content/uploads/2025/01/linkedin_icon.svg"
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/trulyinbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.trulyinbox.com/wp-content/uploads/2025/01/twitter_icon.svg"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/trulyinbox/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.trulyinbox.com/wp-content/uploads/2025/01/instagram_icon.svg"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>©2025 TrulyInbox. All rights reserved</p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
