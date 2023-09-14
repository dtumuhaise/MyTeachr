import React from "react";
import "../css/Home.css";

const Home = () => {
    return (
        <div>
            <div className="banner">
                <h1>Find your teacher</h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Instrument" />
                <input type="text" placeholder="Location" />
                <button className="btn btn-primary">Search</button>
    
            </div>
        </div>
    );
};
export default Home;
