import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<div>
			<footer className="footer-distributed">
				<div className="footer-left ">
					<h3>
						Pet
						<span>Finders</span>
					</h3>
					<p className="footer-links">
						<Link to="/">Home</Link> · <a href="#">Blog</a> ·<a href="#">Lost</a> · <a href="#">Pet News</a>
					</p>
					<p className="footer-company-name">Buid by WebFluencer</p>
					<Link to="/">Contact Us</Link>
					<div className="footer-icons">
						<a href="#">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="#">
							<i className="fab fa-twitter" />
						</a>
						<a href="#">
							<i className="fab fa-instagram" />
						</a>
						<a href="#">
							<i className="fab fa-github" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
