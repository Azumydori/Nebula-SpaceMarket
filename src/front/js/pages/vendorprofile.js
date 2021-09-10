import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Container, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { createTheme } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MediaCard from "../component/card.js";
import PaginationCards from "../component/cardpagination.js";
import { useState } from "react";

const vendorProfileStyles = makeStyles({
	avatar: {
		width: "10rem",
		height: "10rem"
	},
	Button: {
		height: "2rem",
		width: "2rem",
		fontWeight: "bold"
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

const VendorProfile = () => {
	const vClasses = vendorProfileStyles();

	const [value, setValue] = useState(4);
	const { store, actions } = useContext(Context);
	const [vendorCard, setVendorCard] = useState([]);

	useEffect(() => {
		if (store.vendor.lenght != 0) {
			setVendorCard(
				store.vendor.map((object, index) => {
					//let object = actions.getProduct(element);
					return (
						<Grid item key={index} xs={6} sm={4} md={4} alignContent="center">
							<MediaCard
								id_product={object.id}
								title_card={object.product_name}
								description_card={object.text}
								ammount={object.price}
								vendor_name={object.vendor_name}
								image_card={object.media}
							/>
						</Grid>
					);
				})
			);
		} else {
		}
	}, []);
	return (
		<Container component="main">
			<Box mt={10}>
				<Grid container>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItem="flex-start">
						<Avatar
							className={vClasses.avatar}
							src="https://cdn.shopify.com/s/files/1/0751/4753/products/fact07-factory43-spacecat-detail.jpg?v=1538447348"
						/>
						<Box ml={3} py={2}>
							<Rating className="read-only" value={value} readOnly />
						</Box>
					</Grid>
					<Grid item xs={6} container direction="row" justifyContent="center" alignItem="center">
						<Typography component="h3" variant="h5">
							Vendor Name
						</Typography>
						<Box p={2}>
							<Typography>Look at my wares, hope you find something of your interest.</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6} container justifyContent="center" alignItems="center" direction="row">
						<ThemeProvider theme={costumTheme}>
							<Box p={2}>
								<Button color="secondary" variant="contained" disableElevation size="small">
									<StarBorderIcon />
									Follow
								</Button>
							</Box>
						</ThemeProvider>
					</Grid>
					<Grid item xs={6} container justifyContent="center" alignItems="center" direction="row">
						<Box p={2}>
							<ThemeProvider theme={costumTheme}>
								<Button color="secondary" variant="contained" disableElevation size="small">
									<ChatBubbleOutlineIcon />
									Chat with me!
								</Button>
							</ThemeProvider>
						</Box>
					</Grid>
					<Grid container spacing={4}>
						<Box p={2}>
							<Grid container>{vendorCard}</Grid>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default VendorProfile;
