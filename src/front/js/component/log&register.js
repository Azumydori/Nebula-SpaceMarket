import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm, Controller } from "react-hook-form";
import Login from "../component/login.js";
import Signup from "../component/registerpage.js";

import LogoNebula from "../../img/nebulaLogoWhite.png";

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
import Input from "@material-ui/core/Input";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		"&.MuiContainer-root": {
			paddingRight: "0px"
		}
	},
	appBar: {
		backgroundColor: "#9D4EDD",
		borderTopLeftRadius: "2rem",
		borderTopRightRadius: "2rem",
		display: "flex",
		justifyContent: "center"
	},
	tabbs: {
		paddingRight: "0px"
	},
	indicator: {
		backgroundColor: "#ff9100"
	}
}));

const LogRegister = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const onSubmit = data => actions.login(data);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar}>
					<Tabs
						centered
						value={value}
						onChange={handleChange}
						aria-label="simple tabs"
						classes={{
							indicator: classes.indicator,
							root: classes.tab
						}}>
						<Tab label="Login" {...a11yProps(0)} />
						<Tab label="Register" {...a11yProps(1)} className={classes.tabbs} />
					</Tabs>
				</AppBar>
				<div role="tabpanel" hidden={value !== 0} id={`simple-tabpanel-${0}`}>
					<Login />
				</div>
				<div role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`}>
					<Signup />
				</div>
			</div>
		</Container>
	);
};

export default LogRegister;
