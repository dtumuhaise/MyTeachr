import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner text-black text-center py-5">
      <h1 className="text-secondary font-family-poppins">Find your teacher</h1>
      </div>
    
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Instrument"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-block">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
