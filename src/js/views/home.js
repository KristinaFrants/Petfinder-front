import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbo } from "./jumbo";
import { LandingCards } from "./landingCards";
import { FigureComponent } from "./Figure";

// let HomeStyles = {
// 	marginBottom: "auto"
// };

export const Home = () => (
	<div className="text-center mb-5">
		<h1 />
		<Jumbo className="container mt-5" />
		<LandingCards className="container mb-5" />
		<FigureComponent />
	</div>
);
