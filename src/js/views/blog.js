import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { Spring, config } from "react-spring/renderprops";

let JumboStyles = {
	borderStyle: "15px solid white",
	// borderWidth: "5px",
	width: "90%",
	height: "70vh",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "5%",
	borderRadius: "5px",
	boxShadow: " 0px 10px 30px -5px #3e4244",
	fontStyle: "'Acme', sans-serif",
	justifyContent: "right",
	alignContent: "right"
};

let TextStyle = {
	float: "left",
	width: "120%",
	fontColor: "black",
	justifyContent: "left",
	alignContent: "left",
	padding: "10%",
	bottom: "10%"
};
let imageCar = {
	align: "center",
	height: "500px"
};

let Caption = {
	color: "black",
	fontSize: "15px"
};

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 80}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 25}px,${y / 6 - 80}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export const Blog = () => {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 240 } }));

	return (
		<>
			<div className="jumbotron jumbotron-fluid jbbkimg" style={JumboStyles}>
				<div className="container1 col-8" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
					<animated.div className="card1" />
					<animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
					<animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
					<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
				</div>
				{/* <div id="slider" style={TextStyle} className="container1 col-7 ">
					<h3 className="headerStyle">Welcome To PetFinders Blog!</h3>
					<p style={TextStyle}>
						{" "}
						Where we have articles on Lost & Found tips pet care-taking tips, veteniary advice, and About
						Us!!
					</p>
				</div> */}
			</div>
		</>
	);
};

Blog.propTypes = {
	xy: PropTypes.object
};
