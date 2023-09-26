import React from "react";
import '../css/Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{ opacity: 0.8 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <a href="https://tumuhaise.systeme.io/landing" style={{textDecoration: "none" }}>
              <h5 className="text-white">myTeachr</h5>
            </a>
          </div>
          <div className="col-12 col-md-4 text-center text-md-left">
            <p className="mb-0">&copy; All Rights Reserved</p>
          </div>

          <div className="col-12 col-md-4 text-center text-md-right">
            <a href="https://www.linkedin.com/in/davis-tumuhaise-9a875b242/" className="text-white mr-3">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              
            </a>
            <a href="https://github.com/dtumuhaise" className="text-white mr-3">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              
            </a>
            <a href="https://twitter.com/TumuhaiseDavis" className="text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
          
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
