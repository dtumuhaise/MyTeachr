import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import "../css/List.css";
import TeacherRegistrationModal from "./TeacherRegistrationModal";


const List = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    const handleShowRegistrationModal = () => {
    setShowRegistrationModal(true);
    };

    const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
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
                <div className="icons">
          <span
            className="listItem"
            activeClassName="active"
            onClick={handleShowRegistrationModal}
          >
            <PersonIcon className="icon" />
          </span>
        </div>
            </div>
        </nav>
    </div>
</header> 
<TeacherRegistrationModal
    show={showRegistrationModal}
    onHide={handleCloseRegistrationModal}
    />       
    </>
    );
}

export default List;