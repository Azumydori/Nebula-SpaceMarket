import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ControlledCarousel from "../component/carousel.js";
import ProductDescription from "../component/productdes.js";
import { fontSize, width } from "@material-ui/system";
import { useForm } from "react-hook-form";

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
	form: {
		width: "50%"
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

const Reviews = () => {
	const classes = useProductStyle();
	const [value, setValue] = React.useState(5);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	return (
		<Container>
			<Grid container item xs={12}>
				<Grid direction="row" justifyContent="flex-start" alignItems="center">
					<Box>
						<Typography variant="h4">Add Review</Typography>
					</Box>
				</Grid>
				<Grid container item xs={12}>
					<Divider className={classes.divider} style={{ width: "100%" }} />
				</Grid>
				<Grid>
					<Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
					<Typography> Rating</Typography>
				</Grid>
				<Grid container item xs={12}>
					<Box p={1}>
						<form className={classes.fontSize} onSubmit={handleSubmit(onSubmit)}>
							<textarea {...register("review", {})} />
							<Box m={1}>
								<ThemeProvider theme={costumTheme}>
									<Button
										className={classes.button}
										variant="contained"
										color="secondary"
										type="submit">
										{" "}
										Submit
									</Button>
								</ThemeProvider>
							</Box>
						</form>
					</Box>
				</Grid>
				<Grid container item xs={12}>
					<Grid direction="row" justifyContent="flex-start" alignItems="center">
						<Box mt={3}>
							<Typography variant="h4">Buyers Reviews</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Divider className={classes.divider} style={{ width: "100%" }} />
				</Grid>
				<Grid container>
					<Grid container item xs={12}>
						<Box py={1}>
							<Typography className={classes.textWeight}>Username</Typography>
							<Rating name="read-only" value={value} readOnly />
						</Box>
					</Grid>
					<Grid container>
						<Grid container item xs={2} direction="column">
							<Box p={2}>
								<Avatar
									className={classes.avatar}
									src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
								/>
							</Box>
						</Grid>
						<Grid container item xs={10}>
							<Box>
								<Typography>
									This product was pretty okay. I could buy it again if it wasn´t so expensive
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid container>
					<Grid container item xs={12}>
						<Box py={1}>
							<Typography className={classes.textWeight}>Username</Typography>
							<Rating name="read-only" value={value} readOnly />
						</Box>
					</Grid>
					<Grid container>
						<Grid container item xs={2} direction="column">
							<Box p={2}>
								<Avatar
									className={classes.avatar}
									src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
								/>
							</Box>
						</Grid>
						<Grid container item xs={10}>
							<Box>
								<Typography>Pretty good.....</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Reviews;
