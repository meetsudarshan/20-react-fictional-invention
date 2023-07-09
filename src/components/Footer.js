import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-stack-overflow"></i>
            Stack Overflow
          </a>
        
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Your Name</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
