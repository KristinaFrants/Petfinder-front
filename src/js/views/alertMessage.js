import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

let FormStyles = {
	boxShadow: " 0px 10px 30px -5px #3e4244",
	marginRight: "2%",
	marginBottom: "4%",
	marginTop: "2%",
	marginLeft: "2%"
};

let ButtonStyle = {
	marginBottom: "4%",
	marginTop: "10%",
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
		<div className="alert__post row">
			<div className="container__postAlert col" style={FormStyles}>
				<Form className="formGroup__post">
					<i>
						<h3 className="ml-4 mt-4 mb-4" style={{ color: "grey" }}>
							Post New Add
						</h3>
					</i>
					<hr />
					<Form className="row mt-2">
						<Form.Group controlId="formBasicInfo " className="mr-3 ml-4 p-2 col">
							<Form.Control
								type="text"
								placeholder="Your name"
								defaultValue={name}
								onChange={e => setName(e.target.value)}
							/>
							<Form.Text className="text-muted float-left">First Name & Last Name </Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicInfo" className=" ml-2 mr-3 p-2 col">
							<Form.Control
								type="text"
								placeholder="Pet ID"
								defaultValue={petname}
								onChange={e => setPetName(e.target.value)}
							/>
							<Form.Text className="text-muted float-left">Enter Pet Name or ID</Form.Text>
						</Form.Group>
					</Form>

					<Form className="row mt-2">
						<Form.Group controlId="formBasicInfo" className="mr-3 ml-4 p-2 col">
							<Form.Control
								type="text"
								placeholder="Phone Number"
								defaultValue={phone}
								onChange={e => setPhone(e.target.value)}
							/>
							<Form.Text className="text-muted float-left">Enter your phone number</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicInfo" className=" ml-2 mr-3 p-2 col">
							<Form.Control
								type="email"
								placeholder="Email"
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
							/>

							<Form.Text className="text-muted float-left">Enter your email</Form.Text>
						</Form.Group>
					</Form>

					<Form.Group controlId="formBasicMessage">
						<Form.Control
							className="mt-4"
							as="textarea"
							rows="8"
							type="text"
							defaultValue={message}
							placeholder="Tell Us All The Details"
							onChange={e => setMessage(e.target.value)}
						/>
						<Form.Text className="text-muted float-left">Describe the Pet that you are Selling</Form.Text>
					</Form.Group>

					<Button
						style={ButtonStyle}
						id="btnAlert"
						variant="dark"
						size="lg"
						block
						type="submit"
						data-toggle="modal"
						data-target=".bd-example-modal-sm"
						onClick={() => {
							actions.createAlert(message, email, name, petname, phone),
								alert("Your Alert has been Sent"),
								onShow();
						}}>
						Post In Our Feed
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
					<small className="mb-4">
						To post an Add with a picture of your pet, please <Link to="./signup">Register</Link> to our
						website
					</small>
				</Form>

				{/* </div> */}
			</div>
			<img
				style={{
					paddingTop: "2%",
					paddingBottom: "4%",
					marginRight: "2%"
				}}
				className="imageAlert__component col-5  "
				src="https://image.freepik.com/free-photo/adorable-beagle-puppy-solo-portrait_53876-64818.jpg"
			/>
		</div>
	);
};
