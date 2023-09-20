import React, { useState } from "react";
import { Modal, Button, Form, FormGroup, FormControl } from "react-bootstrap";

const LoginModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form (e.g., send login request)
      console.log("Form submitted:", formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title><h3>Teacher's Login</h3></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <FormControl
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup>
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!formErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.password}
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup>
            <Form.Check
              type="checkbox"
              name="rememberMe"
              label="Remember Me"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
          </FormGroup>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
