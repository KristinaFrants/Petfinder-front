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
		<Navbar bg="light" expand="lg">
			<Navbar.Brand className="">
				<Link style={{ color: "black" }} to="/">
					Petfinders
				</Link>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown
						variant="dark"
						bg="dark"
						alignRight
						className="wrapper p-2 ml-3"
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
				</Nav>
				<Nav>
					{store.contacts == null || store.contacts == undefined ? (
						<Button className="mr-3" variant="dark" id="btnAlert">
							<Link style={{ color: "white", textDecoration: "none" }} to="/alertMsg">
								Quick Add
							</Link>
							<i className="fas fa-exclamation-circle ml-2" />
						</Button>
					) : null}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
