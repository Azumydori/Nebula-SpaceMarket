import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Container from "@material-ui/core/Container";

import { useForm, Controller } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Nebula Space Market
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};

const Input = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "white"
		},
		"& .MuiFormLabel-root": {
			color: "white",
			marginTop: "0"
		},
		"& .MuiInput-underline": {
			borderBottomColor: "white",
			"&:after": {
				borderBottomColor: "white"
			},

			"&:before": {
				borderBottomColor: "white"
			},
			"&:hover:not(disabled):after": {
				borderBottomColor: "white" //its when its hover and input is focused
			},
			"&:hover:not(disabled):before": {
				borderBottomColor: "white" //its when you hover and input is not foucused
			}
		},
		whiteBox: {
			color: "white"
		}
	}
})(TextField);
import LogoNebula from "../../img/nebulaLogoWhite.png";

const useStyles = makeStyles(theme => ({
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#9D4EDD",
		borderBottomLeftRadius: "2rem",
		borderBottomRightRadius: "2rem",
		padding: "1rem",
		color: "white"
	},
	avatar: {
		margin: theme.spacing(1),
		width: "5rem",
		height: "5rem"
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(2),
		color: "white"
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		borderRadius: "2rem",
		fontWeight: "bold",
		color: "white"
	},
	whiteBox: {
		color: "white"
	},
	allNightLong: {
		width: "100%"
	},
	hutber: {
		"& .MuiInputBase-input": {
			color: "#fff"
		}
	}
}));

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

const SignUp = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const { control, handleSubmit } = useForm();
	const onSubmit = data => {
		actions.register(data);
	};
	return (
		<Container component="main" maxWidth="xs" style={{ padding: 0 }}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar src={LogoNebula} className={classes.avatar} />
				<Typography component="h1" variant="h5" className={classes.whiteBox}>
					Sign up
				</Typography>
				<form action="" method="post" className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={1}>
						<Grid item xs={12} className={classes.allNightLong}>
							<Controller
								name="first_name"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										autoComplete="fname"
										name="first_name"
										fullWidth
										id="first_name"
										label="First Name"
										autoFocus
										required
										className={classes.hutber}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="last_name"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										fullWidth
										id="last_name"
										label="Last Name"
										name="last_name"
										autoComplete="lname"
										autoFocus
										required
										className={classes.hutber}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										required
										fullWidth
										id="emailRegister"
										label="Email Address"
										name="email"
										autoComplete="email"
										className={classes.hutber}
									/>
								)}
							/>
						</Grid>

						<Grid item xs={12}>
							<Controller
								name="username"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										autoComplete="username"
										name="username"
										fullWidth
										id="username"
										label="Username"
										autoFocus
										required
										className={classes.hutber}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="password"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										fullWidth
										{...field}
										name="password"
										label="Password"
										type="password"
										id="passwordRegister"
										autoComplete="current-password"
										required
										className={classes.hutber}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<ThemeProvider theme={costumTheme}>
								<FormControlLabel
									control={
										<Checkbox
											className={classes.whiteBox}
											value="allowExtraEmails"
											color="secondary"
										/>
									}
									label="I want to receive inspiration, new offers, marketing promotions and updates via email."
								/>
							</ThemeProvider>
						</Grid>
						<Grid item xs={12}>
							<ThemeProvider theme={costumTheme}>
								<FormControlLabel
									control={
										<Checkbox
											className={classes.whiteBox}
											value="privacyPolicy"
											color="secondary"
											required
										/>
									}
									label="I have read and accepted Nebula`s Terms of Use and privacy policy"
								/>
							</ThemeProvider>
						</Grid>
					</Grid>
					<ThemeProvider theme={costumTheme}>
						<Button
							to="/controlpage"
							type="submit"
							fullWidth
							variant="contained"
							color="secondary"
							className={classes.submit}>
							Sign Up
						</Button>
					</ThemeProvider>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link to="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5} />
		</Container>
	);
};

export default SignUp;
