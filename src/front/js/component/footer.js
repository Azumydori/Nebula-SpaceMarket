import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "white"
		},
		//Super importante esta shit, es la que controla el color del label
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
	}
})(TextField);

const useStyles = makeStyles(theme => ({
	resize: {
		width: "100%",
		marginTop: "100px",

		[theme.breakpoints.down("1000")]: {
			width: "100%"
		}
	},

	footerBox: {
		backgroundColor: "#5A189A",
		color: "white"
	},
	inputContainer: {
		marginTop: "5px",
		paddingLeft: "0",
		[theme.breakpoints.between("600", "1000")]: {
			width: "50vh"
		}
	},
	MuiFormLabel: {
		color: "white"
	},
	rectangle1: {
		width: "100%",
		height: "2%",
		background: "#FF9100"
	},
	rectangle2: {
		width: "100%",
		height: "2%",
		background: "#9D4EDD"
	},
	rectangle3: {
		width: "100%",
		height: "2%",
		background: "#5A189A"
	},
	containerLinks: {
		display: "flex",
		justifyContent: "start",
		flexDirection: "Column"
	}
}));

const Footer = () => {
	const classes = useStyles({ open });
	return (
		<footer className={classes.resize}>
			<div className={classes.rectangle1} />
			<div className={classes.rectangle2} />
			<div className={classes.rectangle3} />
			<Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }} className={classes.footerBox}>
				<Container maxWidth="lg">
					<Box />
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4} container className={classes.containerLinks}>
							<Box>
								<Link href="/privacy-policy" color="inherit" variant="h6">
									Privacy Policy
								</Link>
							</Box>
							<Box>
								<Link href="/faq" color="inherit" variant="h6">
									FAQ
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4} container className={classes.containerLinks}>
							<Box>
								<Link href="/about-us" color="inherit" variant="h6">
									About us
								</Link>
							</Box>
							<Box>
								<Link href="/legalinfo" color="inherit" variant="h6">
									Legal info
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Suscribe to our newsletter</Box>
							<Container className={classes.inputContainer}>
								<CssTextField
									label="example@email.com"
									variant="outlined"
									id="custom-css-outlined-input"
								/>
							</Container>
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
