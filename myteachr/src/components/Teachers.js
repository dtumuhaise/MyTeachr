import React from 'react';
import Users from '../data/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Teachers.css';

function Teachers() {
  return (
    <div className="container">
      <h1>Teachers</h1>
      <ul className="list-group">
        {Users.map((user, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-3">
                <img src={user.profilePicUrl} alt={`${user.firstName} ${user.lastName}`} className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-9">
                <h2>{user.firstName} {user.lastName}</h2>
                <p><strong>Instrument Taught:</strong> {user.instrumentTaught}</p>
                <p><strong>Fee Per Hour(UGX):</strong> {user.feeInUgandaShillings}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Description:</strong> {user.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
