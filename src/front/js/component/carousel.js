import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "../../styles/carousel.scss";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const ControlledCarousel = props => {
	return (
		<div className="wrapper">
			<Splide
				options={{
					rewind: true,
					perPage: 1,
					perMove: 1,
					gap: "0.1rem"
				}}>
				<SplideSlide>
					<img className="imgCarousel" src={props.img} alt="el" width="500" height="600" />
				</SplideSlide>
			</Splide>
		</div>
	);
};

ControlledCarousel.propTypes = {
	img: PropTypes.string
};

export default ControlledCarousel;
