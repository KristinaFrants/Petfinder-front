import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let FormStyles = {
	// borderStyle: "15px solid white",
	boxShadow: " 0px 10px 30px -5px #3e4244",
	// borderWidth: "4px",
	marginRight: "2%",
	marginBottom: "4%",
	marginTop: "2%",
	marginLeft: "2%",
	width: "50%",
	float: "right"
};

let InputStyles = {
	padding: "10px",
	width: "30%",
	margin: "auto"
};

let ButtonStyle = {
	width: "40%",
	marginLeft: "1%",
	marginBottom: "5%",
	marginTop: "4%",
	padding: "10px",
	boxShadow: "4px 4px grey"
};

export const AlertMsg = () => {
	const { store, actions } = useContext(Context);
	const [message, setMessage] = useState("");
	// const [selectpet, setSelectPet] = useState("");
	// const [zipcode, setZipcode] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [petname, setPetName] = useState("");
	const [phone, setPhone] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<div>
				<img
					src="http://s1.1zoom.net/big0/382/425769-svetik.jpg"
					style={{
						float: "right",
						width: "40%",
						marginTop: "2%",
						marginRight: "2%"
					}}
				/>
			</div>
			<div style={FormStyles} className=" ourfont2">
				<div className="text-center mt-2 mb-2">
					<Form>
						<h1 style={{ marginTop: "4%", fontFamily: "Playfair Display, serif", marginRight: "35%" }}>
							Emergency Alert!
						</h1>
						<Form.Row>
							<Form.Group style={InputStyles} controlId="formBasicInfo">
								<Form.Label style={{ float: "left", fontFamily: "Playfair Display, serif" }}>
									Name
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Your name"
									defaultValue={name}
									onChange={e => setName(e.target.value)}
								/>
								<Form.Text className="text-muted float-left">First Name & Last Name </Form.Text>
							</Form.Group>
							<Form.Group style={InputStyles} controlId="formBasicInfo">
								<Form.Label style={{ float: "left", fontFamily: "Playfair Display, serif" }}>
									Pet ID
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Pet ID"
									defaultValue={petname}
									onChange={e => setPetName(e.target.value)}
								/>
								<Form.Text className="text-muted float-left">Info from the collar</Form.Text>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group style={InputStyles} controlId="formBasicInfo">
								<Form.Label style={{ float: "left", fontFamily: "Playfair Display, serif" }}>
									Phone Number:
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Phone Number"
									defaultValue={phone}
									onChange={e => setPhone(e.target.value)}
								/>
								<Form.Text className="text-muted float-left">Enter your phone number</Form.Text>
							</Form.Group>
							<Form.Group style={InputStyles} controlId="formBasicInfo">
								<Form.Label style={{ float: "left", fontFamily: "Playfair Display, serif" }}>
									E-mail
								</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter Email"
									defaultValue={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<Form.Text className="text-muted float-left">Enter your email</Form.Text>
							</Form.Group>
						</Form.Row>
						<Form.Group
							style={{ width: "60%", marginBottom: "2%", marginLeft: "20%", marginTop: "4%" }}
							controlId="formBasicMessage">
							{/* <Form.Label style={{ float: "left", fontFamily: "Playfair Display, serif" }}>
							Message
						</Form.Label> */}
							<Form.Control
								as="textarea"
								rows="3"
								type="text"
								defaultValue={message}
								placeholder="Tell Us All The Details!"
								onChange={e => setMessage(e.target.value)}
							/>
						</Form.Group>
						<Button
							style={ButtonStyle}
							id="btnAlert"
							variant="danger"
							type="submit"
							data-toggle="modal"
							data-target=".bd-example-modal-sm"
							onClick={() => {
								actions.createAlert(message, email, name, petname, phone),
									alert("Your Alert has been Sent"),
									onShow();
							}}>
							Post In Our Feed!
							<div
								className="modal fade bd-example-modal-sm"
								tabIndex={-1}
								role="dialog"
								aria-labelledby="mySmallModalLabel"
								aria-hidden="true">
								<div className="modal-dialog modal-sm">
									<div className="modal-content" />
								</div>
							</div>
						</Button>
					</Form>
				</div>
				{/* <Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Confirmation</Modal.Title>
						</Modal.Header>
						<Modal.Body>Alert Has been made!</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
                </Form> */}
			</div>
		</div>
	);
};
