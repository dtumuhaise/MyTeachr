import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [instrument, setInstrument] = useState("");
  const [location, setLocation] = useState("");
  

  const handleClick = () => {
    navigate(`/teachers?instrument=${instrument}&location=${location}`);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  

  return (
    <div>
      <div className="banner text-black text-center py-5">
        <h1 className="text-secondary font-family-poppins">Find your teacher</h1>
      </div>

      <div className="searchArea">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              onKeyDown={handleKeyDown}
              
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
              
            />
          </div>
          
          <div className="col-md-4">
            <button className="btn btn-primary btn-block" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
