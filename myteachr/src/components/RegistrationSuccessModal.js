import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationSuccessModal = ({ show, openLoginModal }) => {
    return (
        <Modal show={show} onHide={openLoginModal} centered>

      <Modal.Header closeButton>
        <Modal.Title>Registration Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your teacher registration was successful.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button 
            variant="secondary" onClick={openLoginModal}>
          Go to Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegistrationSuccessModal;
