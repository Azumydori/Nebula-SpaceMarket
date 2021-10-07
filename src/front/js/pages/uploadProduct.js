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
		actions.upload(JSON.stringify(data), data.media);
	};

	return (
		<div className="full-container">
			<form action="" method="post" noValidate onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
				<div className="row">
					<div className="col-6">
						<div className="upload-container">
							<h2>Add Photo</h2>
							<div>
								<button className="btn">
									<input
										id="media"
										type="file"
										name="media"
										multiple
										className="fas fa-image"
										accept=".jpg,.png"
										{...register("media")}
									/>
								</button>
							</div>
						</div>

						<div className="d-flex flex-column">
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

						<div className="d-flex flex-column">
							<label htmlFor="text">Product description</label>
							<textarea {...register("text", {})} name="text" id="text" />
						</div>
					</div>

					<div className="col-6">
						<div className="d-flex flex-column">
							<label htmlFor="product_name">Tell us the name of the product</label>
							<input
								type="text"
								{...register("product_name", { required: true })}
								id="product_name"
								name="product_name"
							/>
						</div>

						<div className="d-flex flex-column">
							<label htmlFor="price">Price</label>
							<input type="text" {...register("price", { required: true })} id="price" name="price" />
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
