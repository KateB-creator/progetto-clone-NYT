import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "/assets/logo.png"; 
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentDate, setCurrentDate] = useState(getFormattedDate());


  // Aggiorna lo stato quando cambia la dimensione dello schermo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Chiude il menu se si torna su desktop
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effetto per aggiornare la data ogni giorno
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 86400000); // Aggiorna ogni 24 ore

    return () => clearInterval(interval);
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
        
        {/* Menu Hamburger visibile solo su mobile */}
        {isMobile && (
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
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

          <nav className="custom-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/women-in-tech">Women in Tech</Link></li>
            </ul>
          </nav>

          <nav className="nav-bar">
          <ul>
          <li><a href="https://www.nytimes.com/section/us">U.S. <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></a></li>
          <li><a href="https://www.nytimes.com/section/world">World</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/business">Business</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/arts">Arts</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/spotlight/lifestyle">Lifestyle</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/opinion">Opinion</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/spotlight/podcasts">Audio</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/crosswords">Games</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://cooking.nytimes.com/">Cooking</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/wirecutter/">Wirecutter</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/athletic/uk/">The Athletic</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          </ul>
          </nav>
        </div>
      )}

      {/* Navbar visibile su desktop */}
      {!isMobile && (
        <>
          <nav className="nav-bar">
          <ul>
          <li><a href="https://www.nytimes.com/section/us">U.S. <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></a></li>
          <li><a href="https://www.nytimes.com/section/world">World</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/business">Business</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/arts">Arts</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/spotlight/lifestyle">Lifestyle</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/section/opinion">Opinion</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/spotlight/podcasts">Audio</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/crosswords">Games</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://cooking.nytimes.com/">Cooking</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/wirecutter/">Wirecutter</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
          <li><a href="https://www.nytimes.com/athletic/uk/">The Athletic</a> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>
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
