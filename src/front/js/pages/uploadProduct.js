import React, { useContext, onSubmit, handleSubmit, onChange, useState } from "react";
import { Context } from "../store/appContext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import NebulaUpload from "../../img/nebulaUploadProduct.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CheckIcon from "@material-ui/icons/Check";
import "../../styles/uploadProduct.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadProduct = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const [validateImage, setValidateImage] = useState("file-upload noValidate");
	const [changeIcon, setchangeIcon] = useState(<ArrowUpwardIcon className="iconGiant" />);
	const onSubmit = data => {
		uploadSuccess();
		actions.upload(JSON.stringify(data), data.media);
	};

	function handleChange(e) {
		setValidateImage("file-upload validate");
		setchangeIcon(<CheckIcon className="iconGiant" />);
	}
	function uploadSuccess() {
		toast.success("Estamos subiendo su producto!", {
			position: "top-right",
			autoClose: 2600,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
		setTimeout(function() {}, 2600);
	}

	return (
		<div className="full-container">
			<ToastContainer
				position="top-right"
				autoClose={2600}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<form action="" method="post" noValidate onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
				<div className="d-flex flex-column justify-content-center">
					<Container maxWidth="sm" align="center">
						{
							<Typography component="h1" variant="h2" gutterBottom>
								Upload product
							</Typography>
						}
					</Container>

					<div className="d-flex flex-wrap justify-content-around align-items-center ">
						<div className="upload-container maxWith">
							<h2>Add Photo</h2>

							<div className="wrapper">
								<div className={validateImage}>
									<input
										id="media"
										type="file"
										name="media"
										className="fas fa-image "
										accept=".jpg,.png"
										{...register("media")}
										onChange={handleChange}
									/>
									{changeIcon}
								</div>
							</div>
						</div>

						<div className="d-flex flex-column maxWith">
							<label htmlFor="product_name">Tell us the name of the product</label>
							<input
								type="text"
								{...register("product_name", { required: true })}
								id="product_name"
								name="product_name"
							/>
						</div>
					</div>
					<div className="d-flex flex-wrap justify-content-around align-items-center ">
						<div className="d-flex flex-column maxWith">
							<label htmlFor="category">Category</label>
							<select
								defaultValue={"DEFAULT"}
								{...register("category", { required: true })}
								id="category"
								name="category">
								<option value="DEFAULT" disabled hidden>
									Choose category
								</option>
								<option value="Clothing">Clothing</option>
								<option value="Computers"> Computers</option>
								<option value="Home & Garden"> Home & Garden</option>
								<option value="Sports"> Sports</option>
								<option value="NFTs"> NFTs</option>
								<option value="Cellphones"> Cellphones</option>
								<option value="Gaming"> Gaming</option>
								<option value="Movies, Books & Music"> Movies, Books & Music</option>
								<option value="Appliances"> Appliances</option>
								<option value="TV, Audio & Cameras"> TV, Audio & Cameras</option>
								<option value="Motorbikes"> Motorbikes</option>
								<option value="Other"> Other</option>
							</select>
						</div>
						<div className="d-flex flex-column maxWith">
							<label htmlFor="price">Price</label>
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<div className="input-group-text">€</div>
								</div>
								<input
									type="text"
									{...register("price", { required: true })}
									id="price"
									name="price"
									className="form-control"
									placeholder="0.00"
								/>
							</div>
						</div>
					</div>
					<div className="d-flex flex-wrap justify-content-around   ">
						<div className="d-flex flex-column maxWith">
							<label htmlFor="text">Product description</label>
							<textarea {...register("text", {})} name="text" id="text" />
						</div>
						<div className="d-flex flex-column maxWith">
							<img src={NebulaUpload} />
						</div>
					</div>
				</div>

				<div className="row d-flex submit-buttons justify-content-center">
					<div className="col-1 cancel-wrp">
						<input type="reset" className="cancel" value="Cancel" />
					</div>
					<div className="col-1">
						<input type="submit" className="btn" value="Upload" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default UploadProduct;
