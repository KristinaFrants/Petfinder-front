import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../store/appContext";

// import { url } from "inspector";

export function Navibar() {
	const { store, actions } = useContext(Context);
	return (
		<Navbar variant="success" className="mb-2 navdesign">
			<Navbar.Brand className="ourfont2">
				<Link style={{ color: "black", textDecoration: " overline dotted grey", marginLeft: "4%" }} to="/">
					{" "}
					Petfinders
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				{/* <Link className="navhovering ourfont" to="/">
					Home
				</Link> */}
				<Link className="navhovering ourfont" to="/feed">
					Feed
				</Link>
				{store.contacts != null || store.contacts != undefined ? (
					<Link className="navhovering ourfont" to="/dashboard-b">
						Dashboard
					</Link>
				) : null}
				<Link className="navhovering ourfont" to="/blog">
					Blog
				</Link>
				{store.contacts == null || store.contacts == undefined ? (
					<Button className="btn-danger bg-danger ourbtn ml-2" variant="outline-light">
						<Link style={{ color: "black", textDecoration: "none" }} to="/alertMsg">
							Quick Alert
						</Link>
						<i className="fas fa-exclamation-circle ml-2" />
					</Button>
				) : null}
			</Nav>
			{/* <Form inline className="p-2 mr-1">
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-light">
					<i className="fas fa-search" />
				</Button>
			</Form> */}

			<NavDropdown
				variant="dark"
				bg="dark"
				alignRight
				className="wrapper p-2 mr-5"
				title={<i style={{ color: "black" }} className="far fa-user" />}
				drop="down">
				<NavDropdown.Item>
					<Link style={{ textDecoration: "none", color: "black" }} to="/signup">
						Sign up
					</Link>
				</NavDropdown.Item>
				{store.contacts != null || store.contacts != undefined ? (
					<NavDropdown.Item onClick={() => actions.logout()}>
						<Link style={{ textDecoration: "none", color: "black" }} to="/">
							Logout
						</Link>
					</NavDropdown.Item>
				) : (
					<NavDropdown.Item>
						<Link style={{ textDecoration: "none", color: "black" }} to="/login">
							Login
						</Link>
					</NavDropdown.Item>
				)}
			</NavDropdown>
		</Navbar>
	);
}
