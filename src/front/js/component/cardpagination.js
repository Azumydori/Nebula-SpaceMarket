import React from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import MediaCard from "./card.js";
import Typography from "@material-ui/core/Typography";
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
const PaginationCards = () => {
	const classes = useStyles();
	const itemsPerPage = 4;
	const [page, setPage] = React.useState(1);
	const [noOfPages] = React.useState(Math.ceil(projectsList.length / itemsPerPage));

	const handleChange = (event, value) => {
		setPage(value);
	};
	return (
		<div>
			<Typography component="h2" variant="h3" color="textPrimary" gutterBottom align="center">
				Featured products
			</Typography>
			<List dense compoent="span" className={classes.cardGrid}>
				{projectsList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(projectItem => {
					return (
						<ListItem key={projectItem.projectID} button onClick={() => console.log("")}>
							<MediaCard
								id_product={projectItem.projectID}
								title_card={projectItem.projectName}
								description_card={projectItem.projectDescription}
								ammount={projectItem.projectID}
								vendor_name={projectItem.projectVName}
								image_card={projectItem.projectURL}
							/>
						</ListItem>
					);
				})}
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

const projectsList = [
	{
		projectID: 1,
		projectName: "Puerta",
		projectVName: "Isidoro Ferreira",
		projectURL:
			"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: " Tienes defectos si, pero son los más perfectos del mundo"
	},
	{
		projectID: 2,
		projectName: "Ego Erectus",
		projectVName: "Santiago",
		projectURL:
			"https://images.pexels.com/photos/3844786/pexels-photo-3844786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "'Te extraño' no se acentúa, pero con el paso de los días sí"
	},
	{
		projectID: 3,
		projectName: "Niño de manos",
		projectVName: "Santiago",
		projectURL:
			"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: " Me enamoré de ti por lo que eres, no por lo que algún día quiero que seas"
	},
	{
		projectID: 4,
		projectName: "Viaje incierto",
		projectVName: "Isidoro Ferreira",
		projectURL:
			"https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "Hoy no te voy a decir 'Te quiero', te lo voy a demostrar el resto de días del año"
	},
	{
		projectID: 5,
		projectName: "Pentateuque",
		projectVName: "Luis Angel Chaves",
		projectURL:
			"https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "El físico atrae, el cariño seduce, pero que te contesten al momento en WhatsApp te enamora"
	},
	{
		projectID: 6,
		projectName: "Soledad",
		projectVName: "Santiago",
		projectURL:
			"https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "Un buen destino es que dos personas se encuentren cuando ni siquiera se estaban buscando"
	},
	{
		projectID: 7,
		projectName: "score",
		projectVName: "Juan Maria Peral",
		projectURL:
			"https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "Estoy pensando patentar tus besos y caricias para que nadie me los robe"
	},
	{
		projectID: 8,
		projectName: "Casiopea",
		projectVName: "Noa Barrios",
		projectURL:
			"https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "Te conocí y de repente todo cambió en mi vida. Ahora ya no la entiendo sin ti"
	},
	{
		projectID: 9,
		projectName: "Misión californiana: Caballo",
		projectVName: "Rachida Castellano",
		projectURL:
			"https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		projectDescription: "No estaba buscando nada; pero te vi y encontré todo"
	}
];
