import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Context } from "../store/appContext.js";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

const useShoppingCart = makeStyles({
	image: {
		height: "10rem",
		width: "15rem",
		borderRadius: "1rem"
	},
	divider: {
		backgroundColor: "black",
		width: "100%"
	},
	paper: {
		borderColor: "black",
		borderWidth: "1px",
		padding: "1rem",
		fontSize: "14px"
	},
	button: {
		height: "3rem",
		width: "9rem",
		textTransform: "none"
	},
	textBold: {
		fontWeight: "bold"
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

const ProductTotal = () => {
	const classes = useShoppingCart();
	const { store, action } = useContext(Context);
	const [totalCart, setTotalCart] = useState(0);

	return (
		<Container>
			<Grid container item xs={12} justifyContent="center" alignContent="center">
				<Grid direction="row" alignItems="center">
					<Box mt={10}>
						<Paper elevation={0} className={classes.paper} variant="outlined">
							<Box p={2}>
								<Typography variant="h3">Total</Typography>
								<Typography>Subtotal: €{store.totalPrice}</Typography>
								<Typography>Other fees: €2.68</Typography>
								<Divider className={classes.divider} />
								<Typography variant="h6" className={classes.textBold}>
									Total: €{store.totalPrice + 2.68}
								</Typography>
								<ThemeProvider theme={costumTheme}>
									<Box p={1}>
										<Button
											classsName={classes.button}
											color="secondary"
											variant="contained"
											type="input">
											Buy Now
										</Button>
									</Box>
								</ThemeProvider>
							</Box>
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};
export default ProductTotal;
