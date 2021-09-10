import React, { useContext, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import NebulaUpload from "../../img/nebulaUploadProduct.png";

import "../../styles/uploadProduct.scss";

const UploadProduct = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		actions.upload(data);
	};

	return (
		<div className="full-container">
			<form action="" method="post" noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-6">
						<div className="upload-container">
							<h2>ADD THE BEST PHOTO YOU HAVE</h2>
							<div>
								<button className="btn">
									<i className="fas fa-image" />
									Browse
								</button>
							</div>
						</div>

						<div className="d-flex flex-column">
							<label htmlFor="category">Category</label>
							<select defaultValue={"DEFAULT"} {...register("category", { required: true })}>
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

						<div className="d-flex flex-column">
							<label htmlFor="text">Product description</label>
							<textarea {...register("text", {})} />
						</div>
					</div>

					<div className="col-6">
						<div className="d-flex flex-column">
							<label htmlFor="product_name">What are you selling?</label>
							<input
								type="text"
								placeholder="Explain what you want to sell in a few words"
								{...register("product_name", { required: true })}
							/>
						</div>

						<div className="d-flex flex-column">
							<label htmlFor="price">Price</label>
							<input type="text" {...register("price", { required: true })} />
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
			<Grid container item xs={12} direction="row" justifyContent="flex-end" alignItems="flex-end">
				<img src={NebulaUpload} />
			</Grid>
		</div>
	);
};

export default UploadProduct;
