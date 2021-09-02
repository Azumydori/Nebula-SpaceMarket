import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";g
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { borders } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { Palette } from "@material-ui/icons";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

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

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(3),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#9D4EDD",
		borderRadius: "2rem",
		padding: "1rem",
		color: "white"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#59189a"
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		color: "white"
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		borderRadius: "2rem",
		fontWeight: "bold"
	},
	whiteBox: {
		color: "white"
	},

	inputField: {
		"& label.Mui-focused": {
			color: "white"
		},
		"& .MuiFormLabel-root": {
			color: "white"
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "white",
			labelcolor: "white"
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
				labelcolor: "white"
			},
			"&:hover fieldset": {
				borderColor: "white",
				labelcolor: "white"
			},
			"&.Mui-focused fieldset": {
				borderColor: "white",
				labelcolor: "white"
			}
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
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar color="primary" />
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form action="" method="post" className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={1}>
						<Grid item sm={12}>
							<label htmlFor="first_name">First Name</label>
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
									/>
								)}
							/>
						</Grid>
						<Grid item sm={12}>
							<label htmlFor="last_name">Last Name</label>
							<Controller
								name="last_name"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										fullWidth
										id="last_name"
										name="last_name"
										autoComplete="lname"
										required
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<label htmlFor="email">Email</label>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<label htmlFor="username">Username</label>
							<Controller
								name="username"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										fullWidth
										id="username"
										label="Username"
										name="username"
										autoComplete="username"
										required
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<label htmlFor="password">Password</label>
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
										id="password"
										autoComplete="current-password"
										required
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
							type="submit"
							fullWidth
							variant="contained"
							color="secondary"
							borderRadius="50%"
							className={classes.submit}>
							Sign Up
						</Button>
					</ThemeProvider>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignUp;
