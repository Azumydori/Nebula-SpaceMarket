import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../../styles/footer.scss";

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "white"
		},
		//Super importante esta shit, es la que controla el color del label
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
})(TextField);

const useStyles = makeStyles(theme => ({
	margin: {
		width: "30vh",
		[theme.breakpoints.up("sm")]: {
			width: "30vh"
		}
	},
	MuiFormLabel: {
		color: "white"
	}
}));

const Footer = () => {
	const classes = useStyles({ open });
	return (
		<footer>
			<div className="rectangle1" />
			<div className="rectangle2" />
			<div className="rectangle3" />
			<Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }} bgcolor="#5A189A" color="white">
				<Container maxWidth="lg">
					<Box />
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4} alignContent="center">
							<Box>
								<Link href="/" color="inherit" variant="h6">
									Privacy Policy
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									FAQ
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4} alignContent="center">
							<Box>
								<Link href="/" color="inherit" variant="h6">
									About us
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									Legal info
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4} alignContent="center">
							<Box borderBottom={1}>Suscribe to our newsletter</Box>
							<Box pt={1}>
								<CssTextField
									className={classes.margin}
									label="example@email.com"
									variant="outlined"
									id="custom-css-outlined-input"
								/>
							</Box>
						</Grid>
					</Grid>

					<Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
						<Box display="flex" justifyContent="center">
							<Box pl={1}>
								<Link href="https://twitter.com/YifanYes" color="inherit">
									<TwitterIcon />
								</Link>
							</Box>
							<Box pl={1}>
								<Link href="https://www.instagram.com/cats_of_instagram/?hl=en" color="inherit">
									<InstagramIcon />
								</Link>
							</Box>
							<Box pl={1}>
								<Link href="https://github.com/Azumydori/Nebula-SpaceMarket" color="inherit">
									<GitHubIcon />
								</Link>
							</Box>
						</Box>
						With love of Nebula &reg; {new Date().getFullYear()}
					</Box>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
