import React, { useState } from "react";
// import font 

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [demoDropdownOpen, setDemoDropdownOpen] = useState(false);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle collapsed ${isOpen ? "active" : ""}`}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img 
              src="img/logo.png" 
              width="130" 
              alt="BMS, IoT, Automation Building Management System" 
              style={{marginTop: "-10px"}}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li><a href="#features" className="page-scroll">Features</a></li> */}
            <li><a href="#about" className="page-scroll">Overview</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#portfolio" className="page-scroll">Experience</a></li>
            <li><a href="#contact" className="page-scroll">Contact Us</a></li>
            
            {/* Dropdown Live Demo */}
          <li className="dropdown">
              <a 
                href="#" 
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Live Demo <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="fw-bold" href="https://demo1.solusiprogrammer.com/dashboard" target="_blank" rel="noopener noreferrer">
                    BMS V1
                  </a>
                </li>
                <li>
                  <a href="https://demo1.solusiprogrammer.com/v2/dashboard" target="_blank" rel="noopener noreferrer">
                    BMS V2
                  </a>
                </li>
                <li>
                  <a href="https://demo1.solusiprogrammer.com/v3/dashboard" target="_blank" rel="noopener noreferrer">
                    Smart Parking
                  </a>
                </li>
                <li>
                  <a href="https://demo1.solusiprogrammer.com/v4/dashboard" target="_blank" rel="noopener noreferrer">
                    Energy Monitoring
                    <i className="fa-solid fa-spinner" style={{ marginRight: "8px", color: "red", paddingLeft: "8px" }}></i>
                  </a>
                </li>
                <li>
                  <a href="https://solusiprogrammer.com" target="_blank" rel="noopener noreferrer">
                    Smart Farming
                    <i className="fa-solid fa-spinner" style={{ marginRight: "8px", color: "red", paddingLeft: "8px" }}></i>
                  </a>
                </li>
                <li>
                  <a href="https://solusiprogrammer.com" target="_blank" rel="noopener noreferrer">
                    Industry IoT
                    <i className="fa-solid fa-spinner" style={{ marginRight: "8px", color: "red", paddingLeft: "8px" }}></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* CSS untuk animasi */}
      <style jsx>{`
        .navbar-toggle {
          transition: all 0.3s ease;
        }
        .navbar-toggle.active .icon-bar:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-toggle.active .icon-bar:nth-child(2) {
          opacity: 0;
        }
        .navbar-toggle.active .icon-bar:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .icon-bar {
          transition: all 0.3s ease;
          display: block;
          width: 22px;
          height: 2px;
          background-color: #fff;
          margin: 4px 0;
        }
        .dropdown-menu {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};