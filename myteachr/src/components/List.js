import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import "../css/List.css";
import TeacherRegistrationModal from "./TeacherRegistrationModal";
import LoginModal from "./LoginModal";
import "bootstrap/dist/css/bootstrap.min.css";





const List = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);


    const handleShowRegistrationModal = () => {
    setShowRegistrationModal(true);
    };

    const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
    };

    const handleShowLoginModal = () => {
    setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    };

    return (
    <>

<header>
    <div className="container container-flex">
      
        <div className="logo-container">
          <a href="/" title="Home" style={{ textDecoration: 'none' }}><img src={logo} alt="logo" className="logo" /></a>
        </div>   

        <nav>
            <div className="list">
                <NavLink to="/teachers" className="listItem"  activeClassName="active">Teachers</NavLink>                
                <NavLink to="/events" className="listItem"  activeClassName="active">Events</NavLink>
                <NavLink to="/store" className="listItem"  activeClassName="active">Store</NavLink>
                </div>
        </nav>

        <div className="buttons">
            <div className="d-flex">
              <button
                className="btn btnStyle"
                onClick={handleShowRegistrationModal}
                style={{ backgroundColor: "#6bb282", color: "white", marginRight: "10px" }}>Sign Up</button>

              <button
                className="btn btnStyle"
                 style={{ backgroundColor: "white", color: "green", marginRight: "10px", border: "1px solid black"}}
                onClick={handleShowLoginModal}>Login</button>
            </div>
         </div>
    </div>
      </header>

      <TeacherRegistrationModal
        show={showRegistrationModal}
        onHide={handleCloseRegistrationModal}
      />
      <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} />
    </>
  );
};

export default List;
