import React from "react";
import Figure from "react-bootstrap/Figure";

export const FigureComponent = () => {
	return (
		<Figure>
			<Figure.Image
				style={{ border: "15px solid white", borderRadius: "5px" }}
				width={1300}
				height={180}
				alt="171x180"
				src="https://image.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg"
			/>
			<Figure.Caption style={{ padding: "3%", textAlign: "left", color: "black" }}>
				<p className="mx-auto">
					Buying a puppy can be one of the most joyful experiences of your life. That’s why we’re here. If you
					would prefer to take in a pet from the local shelter, we will be happy to refer you. No matter where
					you acquire your pet, we will be proud to counsel and assist you.
				</p>
				<br />
				We know that searching for a puppy for sale can be stressful, that’s why everything we do is designed to
				ensure our puppies come from great breeders and are only placed with families committed to providing a
				forever home for their new companion. If you share our commitment, then you’re ready to add the joy of a
				puppy to your life.
			</Figure.Caption>
		</Figure>
	);
};
