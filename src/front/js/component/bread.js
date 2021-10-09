import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles(theme => ({
	center: {
		display: "flex",
		alignItems: "center"
	}
}));

const CustomSeparator = props => {
	const classes = useStyles();
	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/" className={classes.center}>
			<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
			{props.first}
		</Link>,
		<Link underline="hover" key="2" color="inherit" href="/controlpage/">
			{props.second}
		</Link>,
		<Typography key="3">{props.third}</Typography>
	];

	return (
		<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
			{breadcrumbs}
		</Breadcrumbs>
	);
};

CustomSeparator.propTypes = {
	first: PropTypes.string,
	second: PropTypes.string,
	third: PropTypes.string
};

export default CustomSeparator;
