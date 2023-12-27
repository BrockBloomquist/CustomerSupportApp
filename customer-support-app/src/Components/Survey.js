import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../Css Properties/Survey.css";
import { useEffect } from "react";

const serv = "http://localhost:3005";

export default function Survey() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const id = uuidv4();
  const [bugForm, setBugForm] = useState({
    id: id,
    name: "",
    email: "",
    description: "",
    type: "Bug",
  });
  const [BugList, setBugList] = useState([]);
  const [validated, setValidated] = useState(false);

  const clearsForm = () => {
    setBugForm({
      name: "",
      email: "",
      description: "",
      type: "Bug",
    });
    setValidated(false);
  };
  useEffect(() => {});

  // Adding bug to the database
  async function handleAddBug(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const fullName = bugForm.name;
      const email = bugForm.email;
      const details = bugForm.description;
      const type = bugForm.type;
      const url = `${serv}/createTicket`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          fullName: fullName,
          email: email,
          details: details,
          ticketType: type,
        }),
      }).then((response) => {
        if (response.status === 201) {
          setFormSubmitted(true);
        }
      });
    }
    setValidated(true);
  }

  return (
    <div>
      <div>
        <h1>Feedback & Support</h1>
        <h6>
          Fill out the form below to report a bug, request support, submit a
          feature idea, and/or share your feedback.
        </h6>
      </div>
      {formSubmitted && (
        <Alert key="success" variant="success">
          Danger
        </Alert>
      )}
      <Form
        noValidate
        validated={validated}
        className={
          formSubmitted ? "add-new-bug-form" : "add-new-bug-form-completed"
        }
        onSubmit={handleAddBug}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name" required>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter Your Full Name"
              value={bugForm.name}
              onChange={(event) =>
                setBugForm({ ...bugForm, name: event.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Enter Your Email Address"
              value={bugForm.email}
              onChange={(event) =>
                setBugForm({ ...bugForm, email: event.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please Enter an Email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Ticket Details</Form.Label>
            <Form.Control
              type="text"
              required
              as="textarea"
              placeholder="Provide a detailed description of the bug or feature request."
              rows={3}
              value={bugForm.description}
              onChange={(event) =>
                setBugForm({ ...bugForm, description: event.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Description
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Type of Ticket</Form.Label>
            <Form.Control
              as="select"
              value={bugForm.type}
              onChange={(event) =>
                setBugForm({ ...bugForm, type: event.target.value })
              }
            >
              <option value="Bug">Bug</option>
              <option value="Feature Request">Feature Request</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Attach Files (if any)</Form.Label>
            <Form.Control type="file" multiple accept="image/png, image/jpg" />
          </Form.Group>
        </Row>
        <Row className="align-self-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}
