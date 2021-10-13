import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ControlledCarousel from "../component/carousel.js";
import ProductDescription from "../component/productdes.js";
import { useForm } from "react-hook-form";
import Reviews from "../component/reviews.js";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const useProductStyle = makeStyles({
	avatar: {
		width: "5rem",
		height: "5rem"
	},
	picchange: {
		fontWeight: "bold"
	},
	divider: {
		backgroundColor: "black"
	},
	linelength: {
		width: "20rem"
	},
	paper: {
		borderColor: "black",
		borderWidth: "1px",
		padding: "1rem",
		fontSize: "14px"
	},
	button: {
		height: "3rem",
		width: "9rem",
		textTransform: "none"
	},
	textWeight: {
		fontWeight: "bold"
	},
	carousel: {
		maxWidth: "800px",
		margin: "4rem auto"
	},
	ProductDe: {
		display: "flex"
	}
});

const costumTheme = createTheme({
	palette: {
		primary: {
			//This is Purple
			main: "#59189a",
			light: "#ad2cbd",
			contrastText: "#fff"
		},
		secondary: {
			// This is Yellow
			main: "#ff9100",
			contrastText: "#303030"
		}
	}
});

const ProductDetail = () => {
	const classes = useProductStyle();
	const [value, setValue] = React.useState(5);
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [productInfo, setProductInfo] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	useEffect(() => {
		actions.getProduct(params.id);
	}, []);

	useEffect(
		() => {
			if (store.product != undefined) {
				setProductInfo(store.product);
			}
		},
		[store.product]
	);

	return (
		<Container component="main">
			<Box mt={10}>
				<Grid container item xs={12} direction="row" justifyContent="center" alignContent="center">
					<Grid>
						<Box mt={5}>
							<Typography variant="h4">{productInfo.product_name}</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid container direction="row">
					<Grid item xs={6}>
						<div className={classes.carousel}>
							<ControlledCarousel img={productInfo.media} />
						</div>
					</Grid>
					<Grid
						className={classes.ProductDe}
						item
						xs={6}
						display="flex"
						direction="column"
						justifyContent="center"
						alignItems="center">
						<ProductDescription
							product_id={productInfo.id}
							text={productInfo.text}
							category={productInfo.category}
							price={productInfo.price}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid>
						<Reviews />
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default ProductDetail;
