import React, { useState} from 'react';
import Users from '../data/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Teachers.css';
import { Modal, Button } from 'react-bootstrap'; 



function Teachers({ instrument, location}) {
  const [filter, setFilter] = useState({ instrument: '', location: '' });
  const [selectedTeacher, setSelectedTeacher] = useState(null);



  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value.toLowerCase() });
  };

  const filteredUsers = Users.filter((user) => {
    const userInstrument = user.instrumentTaught.toLowerCase();
    const userLocation = user.location.toLowerCase();

    return (
      (filter.instrument === '' || userInstrument.includes(filter.instrument)) &&
      (filter.location === '' || userLocation.includes(filter.location))
    );
  });


  const openProfileModal = (teacher) => {
    setSelectedTeacher(teacher);
  };


  const closeProfileModal = () => {
    setSelectedTeacher(null);
  };

  const handleMessageTeacherClick = (teacher) => {
    console.log(`Message sent to ${teacher.firstName} ${teacher.lastName}`);
  };

  const handleSearch = () => {
    console.log(`Search clicked`);
  };

  

  return (
    <div className="container">
      {/* <div className="teachersHeader">
        <h1 className="text-secondary font-family-poppins">Teachers</h1>
      </div> */}

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
            <button className="btn btn-primary btn-block" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
        {filteredUsers.map((user, index) => (          
          <div key={index} className="col-md-4 mb-4">
            <div className="card" >
                
              <div className='profilePic'>
                <span
                      className="link items"
                      onClick={() => openProfileModal(user)}
                      style={{ cursor: 'pointer' }}>
                      <img src={user.profilePicUrl} alt={`${user.firstName} ${user.lastName}`} className="card-img-top img-fluid rounded-circle custom-img-size"/>
                    </span>
              </div>
              
              <div className="card-body">
                <h2 className="card-title">
                  {/* Open the profile modal on name click */}
                  <span
                    className="link"
                    onClick={() => openProfileModal(user)}
                    style={{ cursor: 'pointer' }}>
                    {user.firstName} {user.lastName}
                  </span>
                </h2>
                <p><strong>Instrument Taught:</strong> {user.instrumentTaught}</p>
                <p><strong>Fee Per Hour(UGX):</strong> {user.feeInUgandaShillings}</p>
                <p><strong>Location:</strong> {user.location}</p>
                </div>
              </div>
            </div>          
        ))}
      </div>

      

      <Modal show={selectedTeacher !== null} onHide={closeProfileModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Teacher Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTeacher && (
            <div>
              <img src={selectedTeacher.profilePicUrl} alt={`${selectedTeacher.firstName} ${selectedTeacher.lastName}`} className="img-fluid rounded-circle" />
              <h2>{selectedTeacher.firstName} {selectedTeacher.lastName}</h2>
              <p><strong>Instrument Taught:</strong> {selectedTeacher.instrumentTaught}</p>
              <p><strong>Fee Per Hour(UGX):</strong> {selectedTeacher.feeInUgandaShillings}</p>
              <p><strong>Location:</strong> {selectedTeacher.location}</p>
              <p><strong>Levels Taught:</strong> {selectedTeacher.levelsTaught}</p>
              <p><strong>Description:</strong> {selectedTeacher.description}</p>

              <button className="btn btn-primary" onClick={() => handleMessageTeacherClick(selectedTeacher)}>
                Message Teacher</button>

            
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeProfileModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  </div>
  );
}

export default Teachers;
