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

let CardStyle = {
	width: "40%",
	height: "40%",
	borderStyle: "15px solid white",
	boxShadow: " 0px 10px 30px -5px #3e4244"
};

export const Feed = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	let myPet = "";

	return (
		<div className="container">
			<div>
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
										className="fbox d-inline-block ourfont2 col-3 m-3 container p-1"
										data-effect="zoom">
										<button className="fbox__save  js-save" type="button">
											<i className="fa  fa-bookmark" />
										</button>
										<figure className="fbox__image">
											{/* <img src={myPet[0].image} alt="Short description" /> */}
										</figure>

										<div className="fbox__header">
											<figure className="fbox__profile">
												{/* {alertUser.pet.image == "true" ? (
												<img src={alertUser.pet.image} alt="Short description" />
											) : (
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEW0s-O3xZDwQ2S2CSgL4qDU_Yla1TMAzaYghrXHcJMk0xKY6&usqp=CAU"
													alt="Short description"
												/>
                                            )} */}
												<img
													src={
														myPet[0] != undefined
															? myPet[0].image
															: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEW0s-O3xZDwQ2S2CSgL4qDU_Yla1TMAzaYghrXHcJMk0xKY6&usqp=CAU"
													}
													alt="Short description"
												/>
											</figure>
										</div>
										<div>
											<p className="fbox__body">{alert.message}</p>
											<div className="container fbox__bio">
												<p className="col-5">
													Here is my <br /> contact info:
												</p>
												<ul className="col-7">
													<li>Name: {alert.name}</li>
													<li>E-mail: {alert.email}</li>
													{/* <li>Phone: {alert.phone}</li> */}
												</ul>
											</div>
										</div>
										<div>
											<Button onClick={handleShow} variant="danger" className="alertbutton">
												Alert Me of a Lead
											</Button>

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
															<Form.Control
																type="phone"
																placeholder="Enter phone number"
															/>
															<Form.Text className="text-muted" />
														</Form.Group>

														<Form.Group controlId="formBasicMessage">
															<Form.Label>Enter your message</Form.Label>
															<Form.Control
																as="textarea"
																rows="2"
																type="message"
																placeholder="Enter message"
															/>
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
																handleClose;
															}
														}}>
														Send Alert!
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
										<div className="fbox__footer">
											<p className="fbox__date">Posted Date: {alert.date}</p>
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
									{/* /* // ---------------------------------------------------feedmap----------------------------------------- */}
									<div
										key={index}
										className="fbox d-inline-block ourfont2 col-3 m-3 container p-1"
										data-effect="zoom">
										<button className="fbox__save  js-save" type="button">
											<i className="fa  fa-bookmark" />
										</button>
										<figure className="fbox__image">
											{/* <img src={myPet[0].image} alt="Short description" /> */}
										</figure>

										<div className="fbox__header">
											<figure className="fbox__profile">
												{/* {alertUser.pet.image == "true" ? (
												<img src={alertUser.pet.image} alt="Short description" />
											) : (
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEW0s-O3xZDwQ2S2CSgL4qDU_Yla1TMAzaYghrXHcJMk0xKY6&usqp=CAU"
													alt="Short description"
												/>
                                            )} */}
												<img
													src={
														myPet[0] != undefined
															? myPet[0].image
															: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEW0s-O3xZDwQ2S2CSgL4qDU_Yla1TMAzaYghrXHcJMk0xKY6&usqp=CAU"
													}
													alt="Short description"
												/>
											</figure>
										</div>
										<div>
											<p className="fbox__body">{alert.message}</p>
											<div className="container fbox__bio">
												<p className="col-5">
													Here is my <br /> contact info:
												</p>
												<ul className="col-7">
													<li>Name: {alert.name}</li>
													<li>E-mail: {alert.email}</li>
													{/* <li>Phone: {alert.phone}</li> */}
												</ul>
											</div>
										</div>
										<div>
											<Button onClick={handleShow} variant="danger" className="alertbutton">
												Alert Me of a Lead
											</Button>

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
															<Form.Control
																type="phone"
																placeholder="Enter phone number"
															/>
															<Form.Text className="text-muted" />
														</Form.Group>

														<Form.Group controlId="formBasicMessage">
															<Form.Label>Enter your message</Form.Label>
															<Form.Control
																as="textarea"
																rows="2"
																type="message"
																placeholder="Enter message"
															/>
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
														Send Alert!
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
										<div className="fbox__footer">
											<p className="fbox__date">Posted Date: {alert.date}</p>
											<p className />
										</div>
									</div>
								</>
							);
					  })}
			</div>
		</div>
	);
};
// <div className="row text-center cardrow">{mapAllAlerts}</div>
/* // -------------------------------sort buttons---------------------------------- */
/* <div className="btn-group col-3 mx-auto">
    <button
        type="button"
        className="btn btn-info dropdown-toggle "
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Sort By:
    </button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
            Post Date
        </a>
        <a className="dropdown-item" href="#">
            Zip Code
        </a>
        <a className="dropdown-item" href="#">
            alphabet
        </a>
    </div>
</div> */
