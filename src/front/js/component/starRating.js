import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../styles/starRating.scss";
import { Fragment } from "react";

const StarRating = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<button
						className="starButton"
						key={i}
						value={ratingValue}
						onClick={() => setRating(ratingValue)}
						onMouseEnter={() => setHover(ratingValue)}
						onMouseLeave={() => setHover(null)}>
						<FaStar
							className="star"
							color={ratingValue <= (hover || rating) ? "#ffd900" : "#c9c9c9"}
							size={15}
						/>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
