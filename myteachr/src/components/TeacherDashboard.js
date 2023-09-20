import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


const TeacherDashboard = ({ user}) => {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Welcome, {user.firstName}!</h3>
              </div>
              <div className="card-body">
                <p>Dashboard for Teachers</p>
  
                <Link to="/edit-profile" className="btn btn-primary mr-2">
                  Edit Profile
                </Link>
                <Link to="/messages" className="btn btn-primary mr-2">
                  Messages
                </Link>
                <Link to="/bookings" className="btn btn-primary">
                  Bookings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeacherDashboard;
  
  
  