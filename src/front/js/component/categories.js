import React, { useContext } from "react";

import clothing from "../../img/clothing.png";
import laptop from "../../img/laptop.png";
import drill from "../../img/drill.png";
import sports from "../../img/sports.png";
import nft from "../../img/nft.png";
import phone from "../../img/phone.png";

import console from "../../img/console.png";
import movies from "../../img/movies.png";
import washingmachine from "../../img/washing-machine.png";
import tv from "../../img/tv.png";
import motorcycle from "../../img/motorcycle.png";
import diamond from "../../img/diamond.png";

const Categories = () => {
	return (
		<div className="categories-container">
			<div className="row d-flex container justify-content-center">
				<h2>The stuff we can help you sell</h2>
			</div>

			<div className="row d-flex text-center categories-line">
				<div className="col-sm d-flex flex-column">
					<img src={clothing} className="categories-icons" />
					<span>Clothing</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={laptop} className="categories-icons" />
					<span>Computers</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={drill} className="categories-icons" />
					<span>Home & Garden</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={sports} className="categories-icons" />
					<span>Sports</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={nft} className="categories-icons" />
					<span>NFTs</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={phone} className="categories-icons" />
					<span>Cellphones</span>
				</div>
			</div>

			<div className="row d-flex text-center categories-line">
				<div className="col-sm d-flex flex-column">
					<img src={console} className="categories-icons" />
					<span>Gaming</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={movies} className="categories-icons" />
					<span>Movies, Books & Music</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={washingmachine} className="categories-icons" />
					<span>Appliances</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={tv} className="categories-icons" />
					<span>TV, Audio & Cameras</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={motorcycle} className="categories-icons" />
					<span>Motorbikes</span>
				</div>
				<div className="col-sm d-flex flex-column">
					<img src={diamond} className="categories-icons" />
					<span>Other</span>
				</div>
			</div>
		</div>
	);
};

export default Categories;
