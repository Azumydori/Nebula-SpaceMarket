import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { borders } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { Palette } from "@material-ui/icons";
import { useForm, Controller } from "react-hook-form";

import LogoNebula from "../../img/nebulaLogoWhite.png";

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
			"&:hover:not($disabled):after": {
				borderBottomColor: "white" //its when its hover and input is focused
			},
			"&:hover:not($disabled):before": {
				borderBottomColor: "white" //its when you hover and input is not foucused
			}
		}
	}
})(TextField);

const useStyles = makeStyles(theme => ({
	Input: {
		"& label.MuiInput-root": {
			color: "white"
		},
		"& .MuiFormLabel-root": {
			color: "white",
			marginTop: "0"
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
	},
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
		marginTop: theme.spacing(3),
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

const Login = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const { control, handleSubmit } = useForm();
	const onSubmit = data => actions.login(data);

	return (
		<Container component="main" maxWidth="xs" style={{ padding: 0 }}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar src={LogoNebula} className={classes.avatar} />
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form action="" method="post" className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										label="Enter your email"
										required
										fullWidth
										id="emailLogin"
										name="email"
										autoComplete="email"
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
										{...field}
										fullWidth
										label="Enter your password"
										name="password"
										type="password"
										id="passwordLogin"
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
									label="Remember me"
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
							className={classes.submit}>
							Login
						</Button>
					</ThemeProvider>

					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="controlpage" variant="body2">
								{"Don't have an account? Sign up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5} />
		</Container>
	);
};

export default Login;
