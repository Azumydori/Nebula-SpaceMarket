import "../../styles/categories.scss";
import Categories from "../component/categories.js";
import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";

import MediaCard from "../component/card.js";

const ControlPage = () => {
	const { store, actions } = useContext(Context);
	const [productTab, setProductTab] = useState(
		<img src="https://c.tenor.com/DBqjevyA2o4AAAAd/bongo-cat-codes.gif" />
	);

	useEffect(() => {
		console.log("Estoy aqui");
		if (store.product.lenght != 0) {
			setProductTab(
				store.product.map((element, index) => {
					//let object = actions.getProduct(element);

					return (
						<Grid item key={index} xs={6} sm={4} md={2} alignContent="center">
							<MediaCard
								id_product={element.id}
								title_card={element.product_name}
								description_card={element.text}
								ammount={element.price}
								vendor_name={element.vendor_name}
								image_card={element.media}
							/>
						</Grid>
					);
				})
			);
		} else {
			return { productTab };
		}
	}, []);

	return (
		<div className="text-center mt-5">
			<Categories />
			<Grid container gridTemplateColumns="repeat(12, 1fr)" marginLeft="10px" marginRight="10px" align="center">
				{productTab}
			</Grid>
		</div>
	);
};

export default ControlPage;
