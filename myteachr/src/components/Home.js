import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import TeacherRegistrationModal from "./TeacherRegistrationModal";
import SearchIcon from "../Images/search.svg";

const Home = () => {
  const [showRegistration, setShowRegistration] = useState(false);
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

  const openRegistrationModal = () => {
    setShowRegistration(true);
  };

  return (
    <div
      style={{ marginTop: "60px", backgroundColor: "#f5f5f" }}
      className="container"
    >
      <div style={{ padding: "70px" }} className="row mt-5">
        <div style={{ marginTop: "50px" }} className="">
          <p
            style={{
              marginBottom: "40px",
              display: "flex",
              justifyContent: "center",
            }}
            className="lead"
          >
            Connect with experienced music teachers in your area and start your
            musical journey today.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative", 
            }}
            className="input-group mb-3"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative", 
              }}
              class="col-md-6"
            >
              <input
                style={{
                  fontFamily: "Poppins",
                  height: "60px",
                  width: "100%",
                  borderRadius: "10px",
                  paddingRight: "40px", 
                  backgroundImage: `url(${SearchIcon})`,
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                }}
                type="text"
                className="form-control"
                placeholder="Search for teachers by instrument or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: "50px" }} className="row mt-5">
        <div className="col-md-6 offset-md-3 text-center">
          <h4 style={{ fontFamily: "Poppins", color: "#6C757D" }}>
            Are you a music teacher?
          </h4>
          <p>Join MyTeachr and showcase your teaching skills!</p>
          <button
            style={{ fontFamily: "Poppins", height: "60px", marginTop: "20px" }}
            className="btn btn-success" onClick={openRegistrationModal}>
            Sign Up as a Teacher
          </button>
        </div>
      </div>

      {showRegistration && (
        <TeacherRegistrationModal
          show={showRegistration}
          onHide={() => setShowRegistration(false)}
        />
      )}
    </div>
  );
};

export default Home;
