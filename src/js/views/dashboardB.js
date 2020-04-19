import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

let imageStyles = {
	border: "2px solid grey",
	borderRadius: "180px",
	width: "150px",
	height: "150px"
};

export const DashboardB = props => {
	const [form, setForm] = useState(false);
	const [petIndex, setPetIndex] = useState();
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [message, setMessage] = useState();
	const [loading, setLoading] = useState(false);
	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		console.log("imagestring", data);
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		console.log("image", file.secure_url);
		setImage(file.secure_url);
		setLoading(false);
	};
	let currentUser = store.users.filter(user => user.id === store.contacts.id);
	console.log("current pets", currentUser[0].pets);
	// let test = currentUser[0].pets.reverse();
	const reversePets = pets => {
		let arr = pets.slice().reverse();
		// for (let x in pets) {
		// 	arr.unshift(pets[x]);
		// }
		return arr;
	};
	console.log("pet index", petIndex);
	// const reversePets2 = pets => {
	// 	const arr = pets.reduce((acum, value) => {
	// 		return [value, ...acum];
	// 	}, []);
	// };
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="w-100 ml-5" style={{ margitLeft: "20%", marginTop: "3%" }}>
					{currentUser.length > 0 ? (
						<div>
							<Card
								className="float-left mr-3 p-3 col-3"
								style={{
									// height: "500px",
									width: "16rem",
									boxShadow: " 0px 10px 30px -5px #3e4244",

									fontFamily: "Playfair Display, serif"
								}}>
								<div>
									{loading ? (
										<h3>Loading...</h3>
									) : (
										<img
											// src={image}
											style={{
												width: "100%",
												height: "auto",
												position: "absolute",
												height: "auto",
												top: "0",

												left: "0"
											}}
										/>
									)}
									{/* <input
									id="chooseBtn"
									style={ButtonStyles}
									type="file"
									name="file"
									// placeholder="Upload an image"
									onChange={uploadImage}
								/> */}
								</div>
								<Card.Title
									style={{
										backgroundColor: "rgba(29, 29, 29, 0.12)",
										color: "black",
										height: "40px"
									}}>
									{currentUser[0].username}
								</Card.Title>
								<Card.Img
									variant="top"
									src="https://image.freepik.com/free-vector/fashion-woman-style-pop-art_159379-102.jpg"
								/>
								<Card.Body className="mt-3">
									<Link
										style={{
											textDecoration: "none",
											backgroundColor: "rgba(29, 29, 29, 0.12)",
											border: "none",
											color: "black",
											padding: "10px 7px",
											boxShadow: "4px 4px grey",
											borderRadius: "2px"
										}}
										to="/petProfile">
										Add New Pet{" "}
									</Link>

									{/* <Button href="/petProfile">Pet Profile</Button> */}
								</Card.Body>
							</Card>
							<Card
								className="ml-3 p-3 col-9 mb-3"
								style={{
									float: "left",
									width: "65%",
									fontFamily: "Playfair Display, serif",
									boxShadow: " 0px 10px 30px -5px #3e4244"
								}}>
								<div>
									<Card.Header>
										<h4>
											{currentUser[0].username}
											{"'"}s profile
										</h4>
									</Card.Header>
									<Card.Body style={{ color: "grey", fontSize: "20px" }}>
										<p style={{ color: "grey", fontSize: "20px" }}>
											First name: {currentUser[0].firstname}
										</p>
										<p>Last name: {currentUser[0].lastname}</p>
										<p>
											{currentUser[0].username}
											{"'"}s Address: {currentUser[0].address} ZIP: {currentUser[0].zipcode}
										</p>
										<p>email : {currentUser[0].email}</p>
									</Card.Body>
								</div>
							</Card>
						</div>
					) : null}
				</div>
				<hr className="w-75 mx-auto border" />

				<div style={{ marginLeft: "17%" }} className="row">
					<div className="col-2" />
					<div className="col-10 ">
						{currentUser.length > 0 ? (
							reversePets(currentUser[0].pets).map((pet, index) => {
								console.log("pet-map", pet);
								return (
									<div className=" mt-2 ml-4 d-flex" key={index}>
										<div
											className="mx-auto mr-4"
											style={{
												boxShadow:
													"0 2px 5px 0 rgba(0, 0, 0,0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
												marginBottom: "2%",
												fontFamily: "Playfair Display, serif"
											}}>
											<img
												className="card-img-top float-left m-3"
												style={imageStyles}
												src={pet.image}
											/>

											<div className="card-body">
												<h5 className="card-title">Animal : {pet.animal}</h5>
												<p className="card-text">{pet.age} years old</p>
												<p className="card-text">
													{" "}
													My pets breed is a {pet.breed} and their eye color is {pet.eyecolor}{" "}
													as well as their fur is a {pet.furcolor} color. Also gender is{" "}
													{pet.gender}
												</p>

												<p className="card-text">{pet.description}</p>

												<button
													type="button"
													id="btnLogin"
													style={{
														boxShadow: "4px 4px grey",
														marginRight: "1%"
													}}
													className="btn btn-danger"
													onClick={() => actions.deletePet(pet.id)}>
													Remove pet
												</button>
												{form === false ? (
													<div
														className="btn btn-dark"
														style={{ boxShadow: "4px 4px grey" }}
														id="btnLogin"
														onClick={() => {
															setForm(!form), setPetIndex(index);
														}}>
														Alert as lost
													</div>
												) : (
													index != petIndex && (
														<div
															className="btn btn-dark"
															style={{ boxShadow: "4px 4px grey" }}
															id="btnLogin"
															onClick={() => {
																setForm(!form), setPetIndex(index);
															}}>
															Alert as lost
														</div>
													)
												)}
												{/* //needs to send info to allerts array */}
											</div>
											{form === true && index === petIndex ? (
												<div className="card-footer">
													<div className="form-group">
														<label htmlFor="exampleFormControlTextarea1">
															Please enter your message
														</label>
														<textarea
															className="form-control"
															id="exampleFormControlTextarea1"
															rows="3"
															onChange={e => setMessage(e.target.value)}
														/>
													</div>
													<div
														className="btn btn-dark"
														style={{ boxShadow: "4px 4px grey" }}
														id="btnLogin"
														onClick={() =>
															actions.createAlert(
																message,
																currentUser[0].email,
																currentUser[0].firstname,
																pet.name,
																"434-243-3432",
																props.history
															)
														}>
														Send Alert
													</div>
													<div
														className="btn btn-dark"
														style={{ boxShadow: "4px 4px grey", marginLeft: "2%" }}
														id="btnLogin"
														onClick={() => setForm(!form)}>
														Close
													</div>
												</div>
											) : null}
										</div>
									</div>
								);
							})
						) : (
							<div>Loading</div>
						)}
					</div>
					<div className="col-2" />
				</div>
			</div>
		</div>
	);
};
DashboardB.propTypes = {
	history: PropTypes.object
};
