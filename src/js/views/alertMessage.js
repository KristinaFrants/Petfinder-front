import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let FormStyles = {
	borderStyle: "solid",
	borderWidth: "4px",
	marginRight: "2%",
	marginBottom: "2%",
	marginLeft: "2%"
};

let InputStyles = {
	// padding: "10px",
	width: "30%",
	margin: "auto"
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

	return (
		<div style={FormStyles} className="backgroundpic ourfont2">
			<div className="text-center mt-2 mb-2">
				<Form>
					<h1>Emergency Alert!</h1>
					<Form.Row>
						<Form.Group style={InputStyles} controlId="formBasicInfo">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Your name"
								defaultValue={name}
								onChange={e => setName(e.target.value)}
							/>
							<Form.Text className="text-muted">Your First Name & Last Name area prefered </Form.Text>
						</Form.Group>
						<Form.Group style={InputStyles} controlId="formBasicInfo">
							<Form.Label>Pet Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="pet name"
								defaultValue={petname}
								onChange={e => setPetName(e.target.value)}
							/>
							<Form.Text className="text-muted">
								If you do not know the name, no worries, leave it blank!
							</Form.Text>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group style={InputStyles} controlId="formBasicInfo">
							<Form.Label>Phone Number:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Phone Number"
								defaultValue={phone}
								onChange={e => setPhone(e.target.value)}
							/>
							<Form.Text className="text-muted">
								Only to be share to notify a possible user of a lead.
							</Form.Text>
						</Form.Group>
						<Form.Group style={InputStyles} controlId="formBasicInfo">
							<Form.Label>E-mail</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter Email"
								defaultValue={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Form.Text className="text-muted">Well never share your info with anyone else.</Form.Text>
						</Form.Group>
					</Form.Row>
					<Form.Group style={InputStyles} controlId="formBasicMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							type="text"
							defaultValue={message}
							placeholder="Tell Us All The Details! Who, what, when, where?"
							onChange={e => setMessage(e.target.value)}
						/>
					</Form.Group>

					<Button
						variant="danger"
						type="submit"
						onClick={() => actions.createAlert(message, email, zipcode, firstname, lastname, phone)}>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};
