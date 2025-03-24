import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from "/assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  }

  function handleDropdownToggle(event) {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="nyt-header">
      {/* Top Bar - visibile solo su desktop */}
      {!isMobile && (
        <div className="top-bar">
          <div className="calendar">
          <span>{currentDate}</span>
            <span>Today’s Paper</span>
          </div>
          <span className="world">U.S. | INTERNATIONAL | CANADA | ESPAÑOL | 中文</span>
          <button className="subscribe-btn">SUBSCRIBE FOR €0.50/WEEK</button>
          <span>
            Account{" "}
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f">
              <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
            </svg>
          </span>
        </div>
      )}

      {/* Logo + Menu Hamburger */}
      <div className="logo-section">
        <img src={Logo} alt="New York Times Logo" width="150" />
        {isMobile && (
          <button className="hamburger-menu" onClick={handleMenuToggle}>
            {menuOpen ? "✖" : "☰"}
          </button>
        )}
      </div>

      {/* Menu visibile solo su mobile quando è aperto */}
      {isMobile && menuOpen && (
        <div className="mobile-menu open">
          {/* Top-bar dentro il menu mobile */}
          <div className="top-bar mobile-only">
            <div className="calendar">
              <span>{currentDate}</span>
              <span>Today’s Paper</span>
            </div>
            <span>U.S. | INTERNATIONAL | CANADA | ESPAÑOL | 中文</span>
            <button className="subscribe-btn">SUBSCRIBE FOR €0.50/WEEK</button>
            <span>
              Account{" "}
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f">
                <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
              </svg>
            </span>
          </div>

          {/* Navbar dentro il menu mobile */}
        <div className="mobile-menu open">
          <nav className="custom-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/women-in-tech">Women in Tech</Link></li>
            </ul>
          </nav>

          <nav className="nav-bar">
              <div className="dropdown text-center mt-3">
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  type="button"
                  onClick={handleDropdownToggle}
                >
                  Sezioni NYT
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu show text-center">
                    <li><Link className="dropdown-item" to="/section/us">U.S.</Link></li>
                    <li><Link className="dropdown-item" to="/section/world">World</Link></li>
                    <li><Link className="dropdown-item" to="/section/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/section/arts">Arts</Link></li>
                    <li><Link className="dropdown-item" to="/section/lifestyle">Lifestyle</Link></li>
                    <li><Link className="dropdown-item" to="/section/opinion">Opinion</Link></li>
                    <li><Link className="dropdown-item" to="/section/audio">Audio</Link></li>
                    <li><Link className="dropdown-item" to="/section/games">Games</Link></li>
                    <li><Link className="dropdown-item" to="/section/cooking">Cooking</Link></li>
                    <li><Link className="dropdown-item" to="/section/wirecutter">Wirecutter</Link></li>
                    <li><Link className="dropdown-item" to="/section/theathletic">The Athletic</Link></li>
                  </ul>
                )}
              </div>
            </nav>
          </div>  
      </div>
    )}

      {/* Navbar visibile su desktop */}
      {!isMobile && (
        <>
          <nav className="nav-bar">
          <ul>
            <li><Link to="/section/us">U.S.</Link></li>
            <li><Link to="/section/world">World</Link></li>
            <li><Link to="/section/business">Business</Link></li>
            <li><Link to="/section/arts">Arts</Link></li>
            <li><Link to="/section/lifestyle">Lifestyle</Link></li>
            <li><Link to="/section/opinion">Opinion</Link></li>
            <li><Link to="/section/audio">Audio</Link></li>
            <li><Link to="/section/games">Games</Link></li>
            <li><Link to="/section/cooking">Cooking</Link></li>
            <li><Link to="/section/wirecutter">Wirecutter</Link></li>
            <li><Link to="/section/theathletic">The Athletic</Link></li> 
          </ul>
          </nav>

          <nav className="custom-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/women-in-tech">Women in Tech</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

// Funzione per ottenere la data formattata
function getFormattedDate() {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
}

export default Header;
