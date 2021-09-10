import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useProfileStyle = makeStyles({
	avatar: {
		width: "10rem",
		height: "10rem"
	},
	picchange: {
		fontWeight: "bold"
	},
	divider: {
		backgroundColor: "black"
	},
	button: {
		fontWeight: "bold"
	},
	linelength: {
		width: "20rem"
	},
	paper: {
		borderColor: "#59189a"
	},
	deleteButton: {
		color: "red",
		fontWeight: "bold"
	},
	border: {
		borderColor: "black"
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

const typoTheme = createTheme();

typoTheme.typography.h3 = {
	fontSize: "1.2rem",
	"@media (min-width:600px)": {
		fontSize: "1.5rem"
	},
	[typoTheme.breakpoints.up("md")]: {
		fontSize: "2.4rem"
	}
};

const UserProfile = () => {
	const [textUnlock, setTextUnlock] = useState(true);
	const handleDisableText = () => {
		setTextUnlock(!textUnlock);
	};
	const [activeButton, setActiveButton] = useState(true);
	const buttonWorking = () => {
		setActiveButton(!activeButton);
	};
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);
	const classes = useProfileStyle();

	return (
		<Container component="main">
			<Grid xs={12}>
				<Box p={2}>
					<Typography component="h1" variant="h5">
						{" "}
						@Username´s Profile{" "}
					</Typography>
				</Box>
			</Grid>
			<form onSubmit={handleSubmit(onSubmit)} action="" method="post">
				<Grid container>
					<Grid item container xs={12} direction="column" justifyContent="center" alignItems="center">
						<Box p={4}>
							<Avatar
								className={classes.avatar}
								src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
							/>
						</Box>
					</Grid>
					<Grid item xs={12} container justifyContent="center" alignItems="center" direction="row">
						<ThemeProvider theme={costumTheme}>
							<Box py={2}>
								<ThemeProvider theme={typoTheme}>
									<Typography>
										<Button className={classes.picchange} color="primary">
											Change Profile Picture
										</Button>
									</Typography>
								</ThemeProvider>
							</Box>
						</ThemeProvider>
					</Grid>
					<Grid container>
						<Grid>
							<Box p={1}>
								<Typography component="h2" variant="h5">
									Personal Details
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Divider className={classes.divider} style={{ width: "100%" }} />

					<Grid container>
						<Grid
							item
							xs={6}
							container
							direction="column"
							justifyContent="flex-start"
							alignItems="flex-start">
							<Box p={1} mt={3}>
								<Typography component="h3" variant="h5">
									First Name
								</Typography>
							</Box>
							<Box p={1}>
								<Typography component="h3" variant="h5">
									Last Name
								</Typography>
							</Box>
						</Grid>
						<Grid xs={6} direction="column" justifyContent="flex-end" alignItems="flex-end">
							<Box p={1} mt={3}>
								<input
									disabled={textUnlock}
									className={classes.linelength}
									type="text"
									placeholder="First Name"
									{...register("first_name", {})}
								/>
							</Box>
							<Box p={1}>
								<input
									disabled={textUnlock}
									className={classes.linelength}
									type="text"
									placeholder="Last Name"
									{...register("last_name", {})}
								/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={3}>
					<ThemeProvider theme={typoTheme}>
						<Box p={1} mr={1} mt={4}>
							<Typography component="h2" variant="h5">
								Change Billing Adress
							</Typography>
						</Box>
					</ThemeProvider>
				</Grid>

				<Divider className={classes.divider} />
				<Grid container>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<Typography component="h3" variant="h5">
								Country
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h3" variant="h5">
								State
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h3" variant="h5">
								City
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h3" variant="h5">
								Full Adress
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<input
								disabled={textUnlock}
								className={classes.linelength}
								color="primary"
								type="text"
								placeholder="Country"
								{...register("country", {})}
							/>
						</Box>
						<Box p={1}>
							<input
								disabled={textUnlock}
								className={classes.linelength}
								type="text"
								placeholder="State"
								{...register("state", {})}
							/>
						</Box>
						<Box p={1}>
							<input
								disabled={textUnlock}
								className={classes.linelength}
								type="text"
								placeholder="City"
								{...register("city", {})}
							/>
						</Box>
						<Box p={1}>
							<input
								disabled={textUnlock}
								className={classes.linelength}
								type="text"
								placeholder="Full Adress"
								{...register("address", {})}
							/>
						</Box>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={4} direction="column" justifyContent="center" alignItems="center">
						<Box mt={2}>
							<Paper className={classes.borderColor} elevation={0} variant="outlined">
								<Box p={2} mx={2}>
									<Typography className={classes.picchange}> Current Adress</Typography>
								</Box>
								<Box mx={4}>
									<Typography>Old Random St. 123, 28080. Madrid, Spain</Typography>
								</Box>
							</Paper>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Box p={1} mr={4} mt={4}>
						<Typography component="h2" variant="h5">
							Change Account Information
						</Typography>
					</Box>
				</Grid>

				<Divider className={classes.divider} />

				<Grid container>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<Typography component="h3" variant="h5">
								Username
							</Typography>
						</Box>
						<Box p={1}>
							<Typography p={2} component="h3" variant="h5">
								Email
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<input
								disabled={textUnlock}
								className={classes.linelength}
								type="text"
								placeholder="Username"
								{...register("username", {})}
							/>
						</Box>
						<Box p={1}>
							<input
								type="text"
								placeholder="Email"
								disabled={textUnlock}
								className={classes.linelength}
								{...register("email", {})}
							/>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={1} justifyContent="flex-start" alignItems="flex-start">
					<Box p={1} mt={2}>
						<Typography component="h2" variant="h5">
							Other
						</Typography>
					</Box>
				</Grid>
				<Divider className={classes.divider} />
				<Grid container>
					<Grid item xs={6} justifyContent="center" alignItems="center">
						<Box p={2}>
							<Button className={classes.deleteButton}>
								<HighlightOffIcon />
								DELETE ACCOUNT
							</Button>
						</Box>
					</Grid>
					<Grid item xs={6} justifyContent="center" alignItems="center">
						<Box p={2}>
							<Button>Restore Default</Button>
						</Box>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6} justifyContent="center" alignItems="center" direction="column" spacing="2">
						<Box p={2}>
							<ThemeProvider theme={costumTheme}>
								<Button
									borderRadius="50%"
									type="submit"
									className={classes.button}
									variant="contained"
									color="secondary">
									Save Changes
								</Button>
							</ThemeProvider>
						</Box>
					</Grid>
					<Grid item xs={6} justifyContent="center" alignItems="center" direction="column" spacing="2">
						<Box p={2}>
							<ThemeProvider theme={costumTheme}>
								<Button
									className={classes.button}
									onClick={handleDisableText}
									onMouseEnter={buttonWorking}
									borderRadius="50%"
									variant="contained"
									color={activeButton ? "secondary" : "primary"}>
									Change Info
								</Button>
							</ThemeProvider>
						</Box>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};
export default UserProfile;
