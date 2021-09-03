import React from "react";
import PropTypes from "prop-types";

const ControlledAccordions = props => {
	return (
		<div className="faq-content">
			<div className="faq-question">
				<input id={props.PanelId} type="checkbox" className="panel" />
				<div className="plus">+</div>
				<label htmlFor={props.PanelId} className="panel-title">
					{props.Question}
				</label>
				<div className="panel-content">{props.Answer}</div>
			</div>
		</div>
	);
};

ControlledAccordions.propTypes = {
	Question: PropTypes.string,
	Answer: PropTypes.string,
	PanelId: PropTypes.string
};

export default ControlledAccordions;
