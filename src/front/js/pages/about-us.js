import React, { Fragment, Col, Image } from "react";
import { Icon } from "@material-ui/core";
import "../../styles/about-us.scss";

import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import BusinessCenterSharpIcon from "@material-ui/icons/BusinessCenterSharp";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import AllOutIcon from "@material-ui/icons/AllOut";
import LanguageIcon from "@material-ui/icons/Language";

export const AboutUs = () => {
	return (
		<Fragment className="bodyContainer">
			<div className="text-center up-aligator">
				<h1>Meet our team</h1>
				<h2 className="mt-2">
					We are a team of young dreamers who want to create a real democratic marketplace where anyone from
					anywhere in the world can access.
				</h2>
			</div>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center">
					<a href="https://github.com/Jorge-GD" className="queryimage col-sm-2 text-center">
						<img src="https://i.redd.it/wek7woh17zaz.jpg" className="teamimage rounded-circle" alt="..." />
						<h2>Jorge</h2>
					</a>
					<a href=" https://github.com/Lucascg1997" className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2013/07/13/10/18/ghost-156969_960_720.png"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Lucas</h2>
					</a>
					<a href="https://github.com/Azumydori" className="queryimage col-sm-2 text-center">
						<img
							src="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Victoria</h2>
					</a>
					<a href="https://github.com/YifanYes/YifanYes" className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2013/07/13/13/56/chinese-161791_960_720.png"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Yifan</h2>
					</a>
				</div>
			</div>
			<div className="maxwidth container-fluid mt-5">
				<div className="row">
					<div className="col-lg-12">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title mb-5 d-flex justify-content-center">Future plans</h4>

								<div className="container">
									<div className="row">
										<div className="col-md-12">
											<div className="main-timeline">
												<div className="timeline">
													<a className="timeline-content">
														<span className="timeline-year">2021</span>
														<div className="timeline-icon">
															<BusinessCenterSharpIcon />
														</div>
														<h3 className="title"> Q1 First goal</h3>
														<p className="description">
															Implementing a delegated PoS blockchain
														</p>
													</a>
												</div>
												<div className="timeline">
													<a className="timeline-content">
														<span className="timeline-year">2022</span>
														<div className="timeline-icon">
															<DesktopMacIcon />
														</div>
														<h3 className="title">Q2 Second goal</h3>
														<p className="description">Deployment of the application</p>
													</a>
												</div>
												<div className="timeline">
													<a className="timeline-content">
														<span className="timeline-year">2023</span>
														<div className="timeline-icon">
															<ExposurePlus1Icon />
														</div>
														<h3 className="title">Q3 Third goal</h3>
														<p className="description">First million users worldwide</p>
													</a>
												</div>
												<div className="timeline">
													<a className="timeline-content">
														<span className="timeline-year">2024</span>
														<div className="timeline-icon">
															<AllOutIcon />
														</div>
														<h3 className="title">Q4 Fourth goal</h3>
														<p className="description">
															Becoming the biggest online market in the world
														</p>
													</a>
												</div>
												<div className="timeline">
													<a className="timeline-content">
														<span className="timeline-year">2025</span>
														<div className="timeline-icon">
															<LanguageIcon />
														</div>
														<h3 className="title">Q5 Fifth Goal</h3>
														<p className="description">Conquering the whole world</p>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
