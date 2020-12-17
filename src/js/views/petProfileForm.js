import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

let PawStyle = {
	fontSize: "70px"
};

let FormStyles = {
	// height: "80%",
	boxShadow: " 0px 10px 30px -5px grey",
	// width: "50%",
	// float: "left",
	marginRight: "2%",
	marginLeft: "6%",
	marginBottom: "2%",
	marginTop: "2%",
	fontFamily: "Playfair Display, serif"
};

let ImgStiles = {
	height: "675px",
	// float: "right",
	// backgroundRepeat: "no-repeat",
	marginRight: "2%",
	marginTop: "5%",
	marginBottom: "3%",
	boxShadow: " 0px 10px 30px -5px grey"
};

export const PetProfile = props => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [allinObject, setAllinObject] = useState({
		name: "",
		description: "",
		breed: "",
		age: "",
		eyecolor: "",
		furcolor: "",
		animal: "",
		gender: "",
		image: "",
		person_id: store.contacts.id
	});
	console.log("props", props.history);
	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		setImage(file.secure_url);
		setAllinObject({ ...allinObject, image: file.secure_url });

		setLoading(false);
	};
	console.log("image", image);
	return (
		<div className="row">
			<div className="col mr-4 form__petProfile" style={FormStyles}>
				<h2
					style={{
						marginLeft: "4%",
						marginTop: "6%",
						marginBottom: "6%"
					}}>
					CREATE PET ACCOUNT
				</h2>
				{/* <div className="text-center mt-5"> */}
				<div className="row">
					<div className="col">
						<form method="post" action="#" id="#">
							<div className="form-group files color">
								<label
									style={{
										padding: "5px ",
										background: "white",
										boxShadow: "4px 4px 4px 2px grey",
										width: "65%",
										height: "150px",
										marginLeft: "6%"
									}}>
									<input
										type="file"
										name="file"
										style={{ display: "none", overflow: "hidden" }}
										// placeholder="Upload an image"
										onChange={uploadImage}
									/>
									{loading ? (
										<h3>Loading...</h3>
									) : (
										<img
											src={image}
											style={{
												width: "100%",
												height: "100%"
											}}
										/>
									)}
								</label>{" "}
							</div>
						</form>
						<small className="text-muted ml-3 ">Add Pet Photo</small>
					</div>
					<Form className="col-7">
						<Form.Group className="addPet__description mr-4" controlId="exampleForm.ControlTextarea1">
							<Form.Control
								as="textarea"
								rows="6"
								onChange={e => setAllinObject({ ...allinObject, description: e.target.value })}
								value={allinObject.description}
							/>
							<small className="text-muted ml-1">Add Description</small>
						</Form.Group>
					</Form>

					{/* <i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" /> */}
				</div>
				{/* 
                =================== */}
				<div className="row">
					<Form className="col mr-1 ml-1">
						<Form.Group controlId="formGroupAnimal">
							<Form.Control
								type="age"
								placeholder="Age of animal?"
								onChange={e => setAllinObject({ ...allinObject, age: e.target.value })}
								value={allinObject.age}
							/>
							<small className="text-muted ml-1">Pet Age</small>
						</Form.Group>
					</Form>

					<Form className="col mr-1">
						<Form.Group controlId="formGroupNickname">
							<Form.Control
								type="nickname"
								placeholder="Pets Nickname"
								onChange={e => setAllinObject({ ...allinObject, name: e.target.value })}
								value={allinObject.name}
							/>
							<small className="text-muted ml-1">NickName</small>
						</Form.Group>
					</Form>
					<Form className="col mr-1">
						<Form.Group controlId="formGroupGender">
							<Form.Control
								type="gender"
								placeholder="Gender of your Pet"
								onChange={e => setAllinObject({ ...allinObject, gender: e.target.value })}
								value={allinObject.gender}
							/>
							<small className="text-muted ml-1">Gender</small>
						</Form.Group>
					</Form>
				</div>

				<Form className="row">
					<Form.Group className="col mr-3 ml-2" controlId="formGroupAnimal">
						<Form.Control
							type="animal"
							placeholder="Type of animal?"
							onChange={e => setAllinObject({ ...allinObject, animal: e.target.value })}
							value={allinObject.animal}
						/>
						<small className="text-muted ml-1">Animal</small>
					</Form.Group>
					<Form.Group className="col mr-2" controlId="formGroupBreed">
						<Form.Control
							type="breed"
							placeholder="Input Breed"
							onChange={e => setAllinObject({ ...allinObject, breed: e.target.value })}
							value={allinObject.breed}
						/>
						<small className="text-muted ml-1">Breed</small>
					</Form.Group>
				</Form>

				<Form className="row">
					<Form.Group className="col ml-3 mr-2" controlId="formGroupEyecolor">
						<Form.Control
							type="animal"
							placeholder="Pets eye color?"
							onChange={e => setAllinObject({ ...allinObject, eyecolor: e.target.value })}
							value={allinObject.eyecolor}
						/>
						<small className="text-muted ml-1">Eye Color</small>
					</Form.Group>
					<Form.Group className="col mr-2" controlId="formGroupFurcolor">
						<Form.Control
							type="breed"
							placeholder="Pets fur color?"
							onChange={e => setAllinObject({ ...allinObject, furcolor: e.target.value })}
							value={allinObject.furcolor}
						/>
						<small className="text-muted ml-1">Fur color</small>
					</Form.Group>
				</Form>
				<Button
					id="btnLogin"
					variant="dark"
					size="lg"
					block
					className="btn btn-dark"
					style={{
						marginBottom: "4%",
						marginTop: "6%",
						boxShadow: "4px 4px grey",
						fontFamily: "Playfair Display, serif"
					}}
					onClick={() => actions.petProfilePost(allinObject, props.history)}>
					{" "}
					Submit
				</Button>
				{/* </div> */}
			</div>

			<div className="col-5 image__petProfile">
				<img
					src="https://image.freepik.com/free-photo/front-view-cute-dog-with-head-raised_23-2148326219.jpg"
					style={ImgStiles}
				/>
			</div>
		</div>
	);
};
PetProfile.propTypes = {
	history: PropTypes.object
};
