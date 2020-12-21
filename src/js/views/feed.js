import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardColumns from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSpring, animated, useTransition, interpolate } from "react-spring";
import { ListGroupItem } from "react-bootstrap";

export const Feed = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	let myPet = "";

	return (
		<div className="container ">
			<div className="row">
				{store.contacts != null
					? store.alerts &&
					  store.alerts.reverse().map((alert, index) => {
							let alertUser = store.users.filter(user => user.id === store.contacts.id);
							{
								alertUser != undefined || alertUser != []
									? (myPet = alertUser[0].pets.filter(pet => pet.name === alert.petname))
									: (myPet = "");
							}
							console.log("myPet", myPet);
							console.log("myPet[0]", myPet[0]);
							return (
								<>
									{/* /* // ---------------------------------------------------feedmap----------------------------------------- */}

									<div
										key={index}
										className="fbox d-inline-block ourfont2 col m-3 container p-1"
										data-effect="zoom">
										<button
											className="fbox__save  js-save"
											type="button"
											onClick={() => actions.deleteAlert(alert.id)}>
											<i className="far fa-trash-alt" />
										</button>

										<div className="fbox__header">
											<figure className="fbox__profile">
												<img
													src={
														myPet[0] != undefined || myPet[0] != null
															? myPet[0].image
															: "https://image.freepik.com/free-vector/minimal-cat-portrait_23-2147493975.jpg"
													}
													alt="Short description"
												/>
											</figure>
										</div>
										<div>
											<p className="fbox__body">{alert.message}</p>
											<div className="container fbox__bio">
												<p className="col">Owner info:</p>
												<ul className="col">
													<li>Name: {alert.name}</li>
													<li>E-mail: {alert.email}</li>
													{/* <li>Phone: {alert.phone}</li> */}
												</ul>
											</div>
										</div>
										<div>
											<Button
												onClick={handleShow}
												variant="danger"
												size="sm"
												className="alertbutton mt-4 ml-2">
												Contact Owner
											</Button>

											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Contact a Lead</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<Form>
														<Form.Group controlId="formBasicEmail">
															<Form.Control type="email" placeholder="Email" />
															<Form.Text className="text-muted">
																Please enter your email address
															</Form.Text>
														</Form.Group>
														<Form.Group controlId="formBasicInfo">
															<Form.Control type="info" placeholder="Pet info" />{" "}
															<Form.Text className="text-muted">
																Please enter pet info that you are interested in
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
														<Form.Group controlId="formBasicNumber">
															<Form.Control type="phone" placeholder="Phone number" />{" "}
															<Form.Text className="text-muted">
																Please enter your contact number
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
														<Form.Group controlId="formBasicMessage">
															<Form.Control
																as="textarea"
																rows="2"
																type="message"
																placeholder="Message"
															/>
															<Form.Text className="text-muted">
																Please enter your message to owner
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
													</Form>
												</Modal.Body>
												<Modal.Footer>
													<Button
														type="button"
														variant="secondary"
														onClick={() => {
															actions.sendSmsAlert(alert.id);
															{
																handleClose();
															}
														}}>
														Send
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
										<div className="fbox__footer mt-2">
											<small className="fbox__date mt-4">Date: {alert.date}</small>
											<p className />
										</div>
									</div>
								</>
							);
					  })
					: store.alerts &&
					  store.alerts.reverse().map((alert, index) => {
							return (
								<>
									{/* /* // ---------------------------------------------------feedmap for non-registered----------------------------------------- */}

									<div
										key={index}
										className="fbox d-inline-block ourfont2 col m-3 container p-1"
										data-effect="zoom">
										<button
											className="fbox__save  js-save"
											type="button"
											onClick={() => actions.deleteAlert(alert.id)}>
											<i className="far fa-trash-alt" />
										</button>
										<div className="fbox__header">
											<figure className="fbox__profile">
												<img
													src={
														myPet[0] != undefined
															? myPet[0].image
															: "https://image.freepik.com/free-vector/minimal-cat-portrait_23-2147493975.jpg"
													}
													alt="Short description"
												/>
											</figure>
										</div>
										<small className="ml-2">Login to see the picture</small>
										<div>
											<p className="fbox__body">{alert.message}</p>
											<div className="container fbox__bio">
												<p className="col">Owner info:</p>
												<ul className="col">
													<li>Name: {alert.name}</li>
													<li>E-mail: {alert.email}</li>
												</ul>
											</div>
										</div>
										<div>
											<Button
												onClick={handleShow}
												variant="danger"
												size="sm"
												className="alertbutton mt-4 ml-2">
												Contact Owner
											</Button>
											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Contact a Lead</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<Form>
														<Form.Group controlId="formBasicEmail">
															<Form.Control type="email" placeholder="Email" />
															<Form.Text className="text-muted">
																Please enter your email address
															</Form.Text>
														</Form.Group>
														<Form.Group controlId="formBasicInfo">
															<Form.Control type="info" placeholder="Pet info" />{" "}
															<Form.Text className="text-muted">
																Please enter pet info that you are interested in
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
														<Form.Group controlId="formBasicNumber">
															<Form.Control type="phone" placeholder="Phone number" />{" "}
															<Form.Text className="text-muted">
																Please enter your contact number
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
														<Form.Group controlId="formBasicMessage">
															<Form.Control
																as="textarea"
																rows="2"
																type="message"
																placeholder="Message"
															/>
															<Form.Text className="text-muted">
																Please enter your message to owner
															</Form.Text>
															<Form.Text className="text-muted" />
														</Form.Group>
													</Form>
												</Modal.Body>
												<Modal.Footer>
													<Button
														type="button"
														variant="secondary"
														onClick={() => {
															actions.sendSmsAlert(alert.id);
															{
																handleClose();
															}
														}}>
														Send
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
										<div className="fbox__footer mt-2">
											<small className="fbox__date mb-4">Date: {alert.date}</small>
										</div>
									</div>
								</>
							);
					  })}
			</div>
		</div>
	);
};
