import React, { useContext, useState } from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import MediaCard from "./card.js";
import Typography from "@material-ui/core/Typography";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	},
	item: {
		padding: theme.spacing(1.2)
	},
	avatar: { marginRight: theme.spacing(5) },
	paginator: {
		justifyContent: "center",
		padding: "10px"
	},
	cardGrid: {
		display: "flex"
	}
}));
const PaginationCards = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const itemsPerPage = 4;
	const [page, setPage] = useState(1);
	const [noOfPages] = useState(Math.ceil(store.allProducts.length / itemsPerPage));

	const handleChange = (event, value) => {
		setPage(value);
	};

	const roadMap = param => {
		if (param != "NFTs") {
			return store.allProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(projectItem => {
				return (
					<ListItem key={projectItem.id} button onClick={() => console.log("")}>
						<MediaCard
							id_product={projectItem.id}
							title_card={projectItem.product_name}
							description_card={projectItem.product_name}
							ammount={projectItem.price}
							vendor_name={projectItem.vendor_name}
							image_card={projectItem.media}
						/>
					</ListItem>
				);
			});
		} else {
			return store.allProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(projectItem => {
				if (projectItem.category == param) {
					return (
						<ListItem key={projectItem.id} button onClick={() => console.log("")}>
							<MediaCard
								id_product={projectItem.id}
								title_card={projectItem.product_name}
								description_card={projectItem.product_name}
								ammount={projectItem.price}
								vendor_name={projectItem.vendor_name}
								image_card={projectItem.media}
							/>
						</ListItem>
					);
				}
			});
		}
	};

	return (
		<div>
			<Typography component="h2" variant="h3" color="textPrimary" gutterBottom align="center">
				Featured products
			</Typography>
			<List dense compoent="span" className={classes.cardGrid}>
				{roadMap(props.params)}
			</List>
			<Divider />
			<Box component="span">
				<Pagination
					count={noOfPages}
					page={page}
					onChange={handleChange}
					defaultPage={1}
					color="primary"
					size="large"
					showFirstButton
					showLastButton
					classes={{ ul: classes.paginator }}
				/>
			</Box>
		</div>
	);
};

export default PaginationCards;

PaginationCards.propTypes = {
	params: PropTypes.string
};
