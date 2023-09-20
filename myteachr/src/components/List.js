import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import "../css/List.css";
import TeacherRegistrationModal from "./TeacherRegistrationModal";
import LoginModal from "./LoginModal";


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
        <NavLink exact to="/" className="listItem" activeClassName="active"><a href="/"  title="Home"><img src={logo} alt="logo" className="logo" /> </a></NavLink>
        </div>    
        <nav>
            <div className="list">
               
                {/* <NavLink to="/about" className="listItem" activeClassName="active">About</NavLink> */}
                <NavLink to="/teachers" className="listItem"  activeClassName="active">Teachers</NavLink>
                <NavLink to="/store" className="listItem"  activeClassName="active">Store</NavLink>
                <NavLink to="/events" className="listItem"  activeClassName="active">Events</NavLink>
                </div>
        </nav>
          <div className="buttons">
            <button
              className="btn btn-primary mr-2"
              onClick={handleShowRegistrationModal}
            >
              Register
            </button>
            <button onClick={handleShowLoginModal}>Login</button>
            <LoginModal show={showLoginModal} onHide={handleCloseLoginModal} />
          </div>
        </div>

</header> 
<TeacherRegistrationModal
    show={showRegistrationModal}
    onHide={handleCloseRegistrationModal}
    /> 
<LoginModal
    show={showLoginModal}
    onHide={handleCloseLoginModal}
    />

    </>
    );
}

export default List;