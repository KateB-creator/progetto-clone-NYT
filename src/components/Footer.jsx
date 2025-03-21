import React from 'react';
import './footer.css';  // Crea il file CSS per il footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 NYT Clone di Balia Katiuscia. All rights reserved.</p>
        <ul>
          <li><a href="https://kateb-creator.github.io/il-mio-sito-web/">About Me</a></li>
          <li><a href="https://kateb-creator.github.io/il-mio-sito-web/#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

