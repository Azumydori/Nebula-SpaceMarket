import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/jumbotron.scss";
import "../../styles/home.scss";
import "../../styles/categories.scss";

import PaginationCards from "../component/cardpagination.js";

import nebulaNFT from "../../img/NFTS.png";

const Nft = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
			<div className="row d-flex">
				<div className="col-6">
					<div className="jumbotron d-flex flex-column justify-content-center feature-article">
						<h2 className="display-4">Explore the wonderful world of NFTs</h2>
						<p className="lead text-left">
							Want to get the latest digital assets? You have come to the right place
						</p>
						<button className="learn-more" href="#" role="button">
							Learn more
						</button>
					</div>
				</div>

				<div className="col-6 ">
					<img src={NebulaNFT} className="nft" />
				</div>
			</div>

			<div>
				<PaginationCards />
			</div>
		</div>
	);
};

export default Nft;
