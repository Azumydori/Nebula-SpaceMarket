import React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

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
		fontWeight: "bold",
		color: "black"
	},
	linelength: {
		width: "20rem"
	},
	paper: {
		borderColor: "#59189a"
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

const UserProfile = () => {
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

			<Grid container>
				<Grid item xs={6} container direction="row">
					<Box>
						<Avatar
							className={classes.avatar}
							src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
						/>
					</Box>
				</Grid>
				<Grid item xs={6} container direction="column" justifyContent="flex-end" alignItems="flex-end">
					<Box p={1}>
						<Typography component="h2" variant="h5">
							First Name
						</Typography>
					</Box>
					<Box p={1}>
						<Typography component="h2" variant="h5">
							Last Name
						</Typography>
					</Box>
					<Box p={1}>
						<Typography component="h2" variant="h5">
							Email
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Grid item xs={2} p={2}>
				<ThemeProvider theme={costumTheme}>
					<Box py={2}>
						<Typography className={classes.picchange} color="primary">
							Change Profile Picture
						</Typography>
					</Box>
				</ThemeProvider>
			</Grid>
			<Grid item xs={3}>
				<Box p={1} mr={1} mt={4}>
					<Typography component="h3" variant="h5">
						Change Billing Adress
					</Typography>
				</Box>
			</Grid>

			<Divider className={classes.divider} />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<Typography component="h2" variant="h5">
								Country
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h2" variant="h5">
								City
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h2" variant="h5">
								Full Adress
							</Typography>
						</Box>
						<Box p={1}>
							<Typography component="h2" variant="h5">
								Postal Code
							</Typography>
						</Box>
						<Grid
							item
							xs={6}
							direction="column"
							justifyContent="flex-end"
							alignItems="flex-end"
							alignContent="flex-end">
							<Box p={1} mt={3}>
								<TextField disabled className={classes.linelength}>
									<input
										color="primary"
										type="text"
										placeholder="Country"
										{...register("Country", {})}
									/>
								</TextField>
							</Box>
							<Box p={1}>
								<TextField disabled className={classes.linelength}>
									<input type="text" placeholder="City" {...register("City", {})} />
								</TextField>
							</Box>
							<Box p={1}>
								<TextField disabled className={classes.linelength}>
									<input type="text" placeholder="Full Adress" {...register("Full Adress", {})} />
								</TextField>
							</Box>
							<Box p={1}>
								<TextField disabled className={classes.linelength}>
									<input type="text" placeholder="Postal Code" {...register("Postal Code", {})} />
								</TextField>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Box p={1} mr={4} mt={4}>
						<Typography component="h3" variant="h5">
							Change Account Information
						</Typography>
					</Box>
				</Grid>
				<Divider className={classes.divider} />
				<Grid container>
					<Grid item xs={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
						<Box p={1} mt={3}>
							<Typography component="h2" variant="h5">
								Username
							</Typography>
						</Box>
						<Box p={1}>
							<Typography p={2} component="h2" variant="h5">
								Email
							</Typography>
						</Box>
						<Grid item xs={6} direction="column" justifyContent="center" alignItems="stretch">
							<Box p={1} mt={3}>
								<TextField disabled color="primary" className={classes.linelength}>
									<input type="text" placeholder="Username" {...register("Username", {})} />
								</TextField>
							</Box>
							<TextField disabled className={classes.linelength}>
								<Box p={1}>
									<input type="email" placeholder="Email" {...register("Email", {})} />
								</Box>
							</TextField>
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="space-between" alignItems="center" direction="row">
					<Grid item xs={4}>
						<ThemeProvider theme={costumTheme}>
							<Button className={classes.button} variant="contained" color="secondary">
								Save Changes
							</Button>
						</ThemeProvider>
					</Grid>
					<ThemeProvider theme={costumTheme}>
						<Button className={classes.button} variant="contained" color="secondary">
							Change Info
						</Button>
					</ThemeProvider>
				</Grid>
			</form>
		</Container>
	);
};
export default UserProfile;
