import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import InputStripe from "./inputStripe";
import Metamask from "./metamask";

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

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "80%"
	}
}));

const classesInput = makeStyles({
	base: {
		color: "#303238",
		fontSize: "16px",
		fontFamily: '"Open Sans", sans-serif',
		fontSmoothing: "antialiased",
		"::placeholder": {
			color: "#CFD7DF"
		}
	},
	invalid: {
		color: "#e5424d",
		":focus": {
			color: "#303238"
		}
	}
});

const checkoutTab = () => {
	const cClasses = classesInput();
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
			<Grid container item xs={12} justify justifyContent="center">
				<AppBar position="static" color="default">
					<ThemeProvider theme={costumTheme}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
							variant="fullWidth"
							aria-label="full width tabs example">
							<Tab label="Credit Card" {...a11yProps(0)} />
							<Tab label="Crypto" {...a11yProps(1)} />
							<Tab label="Paypal" {...a11yProps(2)} />
						</Tabs>
					</ThemeProvider>
				</AppBar>
			</Grid>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<InputStripe />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<Metamask />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					Item Three
				</TabPanel>
			</SwipeableViews>
		</div>
	);
};

export default checkoutTab;
