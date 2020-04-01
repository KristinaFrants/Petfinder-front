import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSpring, animated, useTransition, interpolate } from "react-spring";

let CardStyle = {
	width: "50%",
	height: "50%",
	borderStyle: "15px solid white",
	boxShadow: " 0px 10px 30px -5px #3e4244"
};

export const Feed = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<div>
			{store.alerts.map((alert, index) => {
				return (
					<div key={index} className="d-inline-block w-25">
						<Card
							className="feedbox"
							style={{
								width: "16rem",
								borderStyle: "15px solid white",
								boxShadow: " 0px 10px 30px -5px #3e4244"
							}}>
							<Card.Img
								variant="top"
								src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/missing-pet-lost-dog-cat-family-flyer-template-890095ffed1df13fbe001410e6ef2f2c_screen.jpg?ts=1561718514"
							/>
							<Card.Body>
								<Card.Title>LOST DOG :(</Card.Title>
								<Card.Text>
									{alert.message}
									{/* write conditional to render {alert.petname} if there is a pet name */}
								</Card.Text>
								<Card.Text>
									Here is my contact info:
									<ul>Name: {alert.name}</ul>
									<ul>E-mail: {alert.email}</ul>
									<ul>Phone: {alert.phone}</ul>
								</Card.Text>
								<Button onClick={handleShow} variant="primary">
									Alert Me of a Lead
								</Button>
							</Card.Body>
							<Modal show={show} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Alert a Lead</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
											<Form.Text className="text-muted">
												Well never share your email with anyone else.
											</Form.Text>
										</Form.Group>
										<Form.Group controlId="formBasicInfo">
											<Form.Label>Pet Info</Form.Label>
											<Form.Control type="info" placeholder="Enter info" />
											<Form.Text className="text-muted" />
										</Form.Group>

										<Form.Group controlId="formBasicNumber">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control type="phone" placeholder="Enter phone number" />
											<Form.Text className="text-muted" />
										</Form.Group>
										<Form.Group controlId="formBasicMessage">
											<Form.Label>Enter your message</Form.Label>
											<Form.Control type="message" placeholder="Enter message" />
											<Form.Text className="text-muted" />
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
									<Button variant="primary" onClick={handleClose}>
										Send Alert
									</Button>
								</Modal.Footer>
							</Modal>
							<Card.Footer>{alert.date}</Card.Footer>
						</Card>
						{/* </div> */}
					</div>
				);
			})}
		</div>
	);
};
// <div className="row text-center cardrow">{mapAllAlerts}</div>
