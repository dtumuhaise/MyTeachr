
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TeacherRegistrationModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    instrumentTaught: "",
    feeInUgandaShillings: "",
    levelsTaught: "",
    location: "",
    bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the registration data to your server or perform any necessary actions.
    // Then, close the modal using onHide.
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Teacher Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Registration form */}
        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleInputChange}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
            />
          </div>
          </div>
          <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="instrumentTaught" className="form-label">
              Instrument Taught
            </label>
            <input
              type="text"
              className="form-control"
              id="instrumentTaught"
              name="instrumentTaught"
              value={formData.instrumentTaught || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="feeInUgandaShillings" className="form-label">
              Fee in Uganda Shillings
            </label>
            <input
              type="number"
              className="form-control"
              id="feeInUgandaShillings"
              name="feeInUgandaShillings"
              value={formData.feeInUgandaShillings || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="levelsTaught" className="form-label">
              Levels Taught
            </label>
            <input
              type="text"
              className="form-control"
              id="levelsTaught"
              name="levelsTaught"
              value={formData.levelsTaught || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              className="form-control"
              id="bio"
              name="bio"
              value={formData.bio || ""}
              onChange={handleInputChange}
            />
          </div>
          </div>
          </div>


          {/* Add more form fields as needed */}
          <Button type="submit" variant="primary">
            Register
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TeacherRegistrationModal;
