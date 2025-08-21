import React, { useState, useEffect } from 'react';
import trulyinboxLogo from '../assets/icons/trulyinbox-logo.png'
const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className={`header ${fixed ? "fixed" : ""}`}>
        <div className="container">
          <div className="logo-container">
            <img
              width="60"
              height="50"
              src={trulyinboxLogo}
              className="custom-logo"
              alt="TrulyInbox Logo"
              decoding="async"
            />
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Knowledge Base</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Login</a>
            <div className={`btn ${menuOpen ? "mobile-open" : ""}`}>
              <a href="#" className="nav-link try-free">Try for Free!</a>
              <a href="#" className="nav-link demo-btn">Demo</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="header-hero">
        <div className='container'>
          <img
            src="https://www.trulyinbox.com/wp-content/uploads/2025/01/home-herobanner-label.svg"
            alt="Connect Unlimited Email Accounts for warm-up"
            className="hero-label"
          />
          <h1 className="hero-title">
            Maximize Email Deliverability <br /> with Automated Warm-up
          </h1>
          <p className="hero-description">
            Strengthen your sender reputation with realistic, positive interactions to boost <br />
            deliverability and inbox placement.
          </p>
          <div className='get-start-btn'>
            <button className='getBtn'>
              Get started for free
              <img
                decoding="async"
                src="https://www.trulyinbox.com/wp-content/uploads/2025/01/right-arrow-new.svg"
                alt="Right Arrow"
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
