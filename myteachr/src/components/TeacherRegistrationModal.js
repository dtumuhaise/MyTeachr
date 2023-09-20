
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/TeacherRegistrationModal.css";


const TeacherRegistrationModal = ({ show, onHide }) => {

  const [submitted, setSubmitted] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

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
    setSubmitted(true);
    console.log(formData);    
    setRegistrationSuccess(true);
    

    // Handle form submission here
    // You can send the registration data to your server or perform any necessary actions.
    // Then, close the modal using onHide.
    onHide();
  };

  const isCustomInstrumentSelected = formData.instrumentTaught === "Others";
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Teacher Registration</h3></Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* Registration form */}
        <form onSubmit={handleSubmit}>
          <div className="row">

      {/* left side */}

     
          <div className="col-md-6">
          <div className={`mb-3 ${submitted && formData.firstName === "" ? "has-error" : ""}`}>
            <label htmlFor="firstName" className="form-label">
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${submitted && formData.firstName === "" ? "is-invalid" : ""}`}
              id="firstName"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">First name is required</div>            
          </div>


          <div className={`mb-3 ${submitted && formData.password === "" ? "has-error" : ""}`}>
            <label htmlFor="password" className="form-label">
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${submitted && formData.password === "" ? "is-invalid" : ""}`}
              id="password"
              name="password"
              value={formData.password || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Password is required</div>
          </div>


          <div className={`mb-3 ${submitted && formData.email === "" ? "has-error" : ""}`}>
            <label htmlFor="email" className="form-label">
              Email Address<span className="required">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${submitted && formData.email === "" ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Email is required</div>
          </div>

          <div className={`mb-3 ${submitted && formData.feeInUgandaShillings === "" ? "has-error" : ""}`}>
            <label htmlFor="feeInUgandaShillings" className="form-label">
              Fee in Uganda Shillings<span className="required">*</span>
            </label>
            <input
              type="number"
              className={`form-control ${submitted && formData.feeInUgandaShillings === "" ? "is-invalid" : ""}`}
              id="feeInUgandaShillings"
              name="feeInUgandaShillings"
              value={formData.feeInUgandaShillings || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Fee is required</div>
          </div>

          <div className={`mb-3 ${submitted && formData.location === "" ? "has-error" : ""}`}>
            <label htmlFor="location" className="form-label">
              Location<span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${submitted && formData.location === "" ? "is-invalid" : ""}`}
              id="location"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Location is required</div>
          </div>

          </div>

          {/* right side */}
          <div className="col-md-6">
          

          <div className={`mb-3 ${submitted && formData.lastName === "" ? "has-error" : ""}`}>
            <label htmlFor="lastName" className="form-label">
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${submitted && formData.lastName === "" ? "is-invalid" : ""}`}
              id="lastName"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Last name is required</div>

          </div>

          <div className={`mb-3 ${submitted && formData.confirmPassword === "" ? "has-error" : ""}`}>
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password<span className="required">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${submitted && formData.confirmPassword === "" ? "is-invalid" : ""}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Confirm password is required</div>
          </div>


          <div className={`mb-3 ${submitted && formData.instrumentTaught === "" ? "has-error" : ""}`}>
            <label htmlFor="instrumentTaught" className="form-label">
              Instrument Taught<span className="required">*</span>
            </label>
            <Form.Control
              as="select"
              id="instrumentTaught"
              name="instrumentTaught"
              value={formData.instrumentTaught || ""}
              onChange={handleInputChange}
              required>
              <option value="">select</option>
              <option value="Piano">Piano/Keyboard</option>
              <option value="Guitar">Guitar</option>
              <option value="Bass">Bass</option>
              <option value="Drums">Drums</option>
              <option value="Vocals">Vocals</option>
              <option value="Others">Others</option>

              </Form.Control>            
            <div className="invalid-feedback">Instrument taught is required</div>

          </div>

          {isCustomInstrumentSelected && (
                <div className={`mb-3 ${submitted && formData.customInstrument === "" ? "has-error" : ""}`}>
                  <label htmlFor="customInstrument" className="form-label">
                    Other Instrument<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${submitted && formData.customInstrument === "" ? "is-invalid" : ""}`}
                    id="customInstrument"
                    name="customInstrument"
                    value={formData.customInstrument || ""}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Custom instrument is required</div>
                </div>
              )}

          

          
          <div className={`mb-3 ${submitted && formData.levelsTaught === "" ? "has-error" : ""}`}>
            <label htmlFor="levelsTaught" className="form-label">
              Levels Taught<span className="required">*</span>
            </label>
            <Form.Control
              as="select"
              id="levelsTaught"
              name="levelsTaught"
              value={formData.levelsTaught || ""}
              onChange={handleInputChange}
              required>
              <option value="">select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="All">All</option>
              </Form.Control>            
            <div className="invalid-feedback">Levels taught is required</div>
          </div>

          </div>

          <div className={`mb-3 ${submitted && formData.bio === "" ? "has-error" : ""}`}>
            <label htmlFor="bio" className="form-label">
              Bio<span className="required">*</span>
            </label>
            <textarea
              className={`form-control ${submitted && formData.bio === "" ? "is-invalid" : ""}`}
              id="bio"
              name="bio"
              value={formData.bio || ""}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">Bio is required</div>
          </div>
          </div>


          <div className="mb-3 form-check btnAlign">
          <Button
            className="btn" 
            type="submit" 
            variant="primary"
           
            >
            Register
          </Button>
          </div>

          {registrationSuccess && (
            <div className="alert alert-success" role="alert">
              Teacher has successfully registered!
            </div>
          )}


        </form>

      </Modal.Body>
    </Modal>
  );
};

export default TeacherRegistrationModal;
