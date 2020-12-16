import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { Spring, config } from "react-spring/renderprops";

let JumboStyles = {
	borderStyle: "15px solid white",
	width: "90%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "10%",
	borderRadius: "5px",
	boxShadow: " 0px 15px 30px -5px #3e4244",
	justifyContent: "center",
	marginTop: "4%"
};

let imageCar = {
	align: "center",
	height: "auto",
	display: "flex"
};

export const Jumbo = () => (
	<div>
		<Carousel style={JumboStyles} className="ourfont">
			<Carousel.Item>
				<img
					style={imageCar}
					className="d-block w-100"
					src="https://www.smartertravel.com/uploads/2017/09/Cover_Pet-Friendly-Pets-2-1-1400x500.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h5 style={{ color: "black" }}>Find a best friend</h5>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={imageCar}
					className="d-block w-100"
					src="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/12/getting-to-know-your-cat.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h5 style={{ color: "black" }}>Adopt or Buy a Furry Buddy!</h5>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);
