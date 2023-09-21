import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    navigate(`/teachers?search=${searchQuery}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div 
      style={{ marginTop: "150px", backgroundColor: "#f5f5f5" }}
      className="container">
      <div className="row mt-5">

        <div 
          style={{ marginTop: "50px" }}
          className="">
          <h3
            style={{ marginBottom: "20px", display: "flex", justifyContent: "center", fontFamily: "Poppins", color: "#6C757D" }}
            className="display-4">Welcome to MyTeachr</h3>
          <p 
            style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}
            className="lead">
            Connect with experienced music teachers in your area and start your
            musical journey today.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="input-group mb-3">
             <div 
              style={{ display: "flex", justifyContent: "center"}}
              class="col-md-6">             
            <input
              type="text"
              className="form-control"
              placeholder="Search for teachers by instrument or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="input-group-append">
              <button
                style={{ marginLeft: "10px" }}
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
