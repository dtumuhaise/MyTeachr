import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import "../css/List.css";

const List = () => {
    return (
    <>
<header>
    <div className="container container-flex">
        <div className="logo-container">
        <a href="/" class="listItem" title="Home"><img src={logo} alt="logo" className="logo" /> </a>
        </div>    
        <nav>
            <div className="list">
                {/* <NavLink exact to="/" className="listItem" activeClassName="active">Home</NavLink>
                <NavLink to="/about" className="listItem" activeClassName="active">About</NavLink> */}
                <NavLink to="/teachers" className="listItem"  activeClassName="active">Teachers</NavLink>
                <NavLink to="/store" className="listItem"  activeClassName="active">Store</NavLink>
                <NavLink to="/events" className="listItem"  activeClassName="active">Events</NavLink>
            </div>
        </nav>
        <div className="icons">
            <PersonIcon className="icon"/>
        </div>
    </div>
</header>        
    </>
    );
}

export default List;