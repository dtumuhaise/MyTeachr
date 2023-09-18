import React, { useState} from 'react';
import Users from '../data/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Teachers.css';

function Teachers() {
  const [filter, setFilter] = useState({ instrument: '', location: '' });
  const [filteredUsers, setFilteredUsers] = useState(Users);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });

    // Apply filters to the Users array based on instrument and location
    const instrumentFilter = name === 'instrument' ? value.toLowerCase() : filter.instrument;
    const locationFilter = name === 'location' ? value.toLowerCase() : filter.location;

    const filtered = Users.filter((user) => {
      const userInstrument = user.instrumentTaught.toLowerCase();
      const userLocation = user.location.toLowerCase();

      return (
        (instrumentFilter === '' || userInstrument.includes(instrumentFilter)) &&
        (locationFilter === '' || userLocation.includes(locationFilter))
      );
    });
    setFilteredUsers(filtered);
  };
  
  return (
    <div className="container">
      <h1>Teachers</h1>

      <div className="searchArea">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Instrument"
              name="instrument"
              value={filter.instrument}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              name='location'
              value={filter.location}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            {/* <button className="btn btn-primary btn-block" onClick={handleSearch}>Search</button> */}
          </div>
        </div>
      </div>


      <ul className="list-group">
        {filteredUsers.map((user, index) => (
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
