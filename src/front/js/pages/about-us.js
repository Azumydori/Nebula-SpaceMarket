import React, { Fragment } from "react";
import "../../styles/about-us.scss";

export const AboutUs = () => {
	return (
		<Fragment className="container">
			<div className="text-center mt-5">
				<h1>Meet our team</h1>
				<h2 className="mt-2">
					We are a team of young dreamers who want to create a real democratic marketplace where anyone from
					anywhere in the world can access.
				</h2>
			</div>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center">
					<div className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Jorge</h2>
					</div>
					<div className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Lucas</h2>
					</div>
					<div className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Victoria</h2>
					</div>
					<div className="queryimage col-sm-2 text-center">
						<img
							src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
							className="teamimage rounded-circle"
							alt="..."
						/>
						<h2>Yifan</h2>
					</div>
				</div>
			</div>
			<div className="maxwidth container-fluid mt-5">
				<div className="row">
					<div className="col-lg-12">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title mb-5 d-flex justify-content-center">Future plans</h4>

								<div className="hori-timeline" dir="ltr">
									<ul className="list-inline events">
										<li className="list-inline-item event-list">
											<div className="px-4">
												<div className="event-date bg-soft-primary text-white">Q4 2021</div>
												<h5 className="font-size-16">First goal</h5>
												<p className="text-dark">Implementing a delegated PoS blockchain</p>
												<div />
											</div>
										</li>
										<li className="list-inline-item event-list">
											<div className="px-4">
												<div className="event-date bg-soft-success text-white">Q1 2022</div>
												<h5 className="font-size-16">Second goal</h5>
												<p className="text-dark">Deployment of the application</p>
												<div />
											</div>
										</li>
										<li className="list-inline-item event-list">
											<div className="px-4">
												<div className="event-date bg-soft-danger text-white">Q3 2022</div>
												<h5 className="font-size-16">Third goal</h5>
												<p className="text-dark">First million users worldwide</p>
												<div />
											</div>
										</li>
										<li className="list-inline-item event-list">
											<div className="px-4">
												<div className="event-date bg-soft-danger text-white">Q1 2023</div>
												<h5 className="font-size-16">Fourth goal</h5>
												<p className="text-dark">
													Becoming the biggest online market in the world
												</p>
												<div />
											</div>
										</li>
										<li className="list-inline-item event-list">
											<div className="px-4">
												<div className="event-date bg-soft-warning text-white">Q3 2023</div>
												<h5 className="font-size-16">Fifth goal</h5>
												<p className="text-dark">Conquering the whole world</p>
												<div />
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
