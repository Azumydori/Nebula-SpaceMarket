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

const Login = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const { control, handleSubmit } = useForm();
	const onSubmit = data => actions.login(data);

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar color="primary" />
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form action="" method="post" className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={1}>
						<label htmlFor="email">Email</label>
						<Grid item xs={12}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										className={classes.inputField}
										placeholder="example@gmail.com"
										required
										fullWidth
										id="email"
										name="email"
										autoComplete="email"
									/>
								)}
							/>
						</Grid>

						<label htmlFor="password">Password</label>
						<Grid item xs={12}>
							<Controller
								name="password"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<Input
										{...field}
										className={classes.inputField}
										fullWidth
										name="password"
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
							<Link href="#" variant="body2">
								{"Don't have an account? Sign up"}
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

export default Login;
