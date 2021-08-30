import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useProfileStyle = makeStyles({
	avatar: {
		width: "10rem",
		height: "10rem"
	}
});

const UserProfile = () => {
	const classes = useProfileStyle();
	return (
		<Container component="main">
			<Grid container spacing={10}>
				<Grid>
					<Avatar
						className={classes.avatar}
						src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
					/>
					<Typography>Change Profile Picture</Typography>
				</Grid>
				<Grid item sm={4} md={8}>
					<Typography component="h1" variant="h5">
						{" "}
						@Username{" "}
					</Typography>
				</Grid>
				<Grid item sm={4} md={8}>
					<Typography component="h1" variant="h5">
						{" "}
						@Username{" "}
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default UserProfile;
