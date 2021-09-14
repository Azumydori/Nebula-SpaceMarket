import React, { useContext, useState, useEffect, Fragment } from "react";

import "../../styles/notfound.scss";
import nebuladead from "../../img/nebula_404_landing_page_3.png";

const NotFound = () => {
	return (
		<Fragment>
			<div className="text-wrapper">
				<img src={nebuladead} />
				<div>
					<a className="subtitle" data-content="404 Nothing found">
						404 Nothing found
					</a>
				</div>
				<div className="buttons">
					<a className="button" href="/">
						Go to homepage
					</a>
				</div>
			</div>
		</Fragment>
	);
};
export default NotFound;
