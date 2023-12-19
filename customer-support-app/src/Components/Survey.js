import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Survey.css';

export default function Survey() {
	const [bugForm, setBugForm] = useState({
		id: uuidv4(),
		name: '',
		email: '',
		description: '',
		priority: 'medium',
	});
	const [BugList, setBugList] = useState([]);
	const [validated, setValidated] = useState(false);

	const clearsForm = () => {
		setBugForm({
			name: '',
			email: '',
			description: '',
			priority: 'medium',
		});
        setValidated(false); 
	};
	// Adding bug to the database
	const handleAddBug = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false ) {
			event.stopPropagation();
		}
		const newBug = {
			id: uuidv4(),
			name: bugForm.name,
			email: bugForm.email,
			description: bugForm.description,
			priority: bugForm.priority,
		};

		//Creates a list of forms that were created
		setBugList([...BugList, newBug]);
		setValidated(true);
		clearsForm();
	};

	

	return (
		<div>
			<h1>Feedback & Support</h1>
			<h6>
				Fill out the form below to report a bug, request support, submit a
				feature idea, and/or share your feedback.
			</h6>
			<Form
				noValidate
				validated={validated}
				className="add-new-bug-form"
				onSubmit={handleAddBug}
			>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="name">
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
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="email">
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
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="description">
						<Form.Label>Bug Description</Form.Label>
						<Form.Control
							type="text"
                            required
							as="textarea"
							placeholder="Provide a detailed description of the bug, including the browser and device you are using. If possible, include a link to where you found the issue and describe the steps that led to the bug."
							rows={3}
							value={bugForm.description}
							onChange={(event) =>
								setBugForm({ ...bugForm, description: event.target.value })
							}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="priority">
						<Form.Label>Bug Priority</Form.Label>
						<Form.Control
							as="select"
							value={bugForm.priority}
							onChange={(event) =>
								setBugForm({ ...bugForm, priority: event.target.value })
							}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
						<Form.Label>Attach Files (if any)</Form.Label>
						<Form.Control type="file" multiple />
					</Form.Group>

					<Button variant="primary" type="submit">
						Add New Bug
					</Button>
				</Row>
			</Form>
		</div>
	);
}
