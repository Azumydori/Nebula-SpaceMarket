import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Context } from "../store/appContext";

const startPayment = async ({ setError, setTxs }) => {
	if (window.ethereum) {
		let accounts = [];
		accounts = await ethereum.request({ method: "eth_requestAccounts" });

		ethereum
			.request({
				method: "eth_sendTransaction",
				params: [
					{
						from: accounts[0],
						to: "0x29D94A0E53f2dF45D50c0191bC7d597C91f02592",
						value: "64",
						gasPrice: "0x09184e72a000",
						gas: "5208"
					}
				]
			})
			.then(txHash => {
				if (txHash) {
					window.location = store.domainURL.concat("/success");
				}
			})
			.catch(error => console.error);
	} else {
		alert("No crypto wallet found. Please install it.");
	}
};

const Metamask = () => {
	const [error, setError] = useState();
	const [txs, setTxs] = useState([]);
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();
		const data = new FormData(e.target);
		setError();
		await startPayment({
			setError,
			setTxs
		});
		//window.location = store.domainURL.concat("/success");
		console.log(txs);
		console.log(error);
	};

	return (
		<form className="m-4" onSubmit={handleSubmit}>
			<button type="submit" className="btn btn-primary submit-button focus:ring focus:outline-none w-full">
				Pay with Metamask
			</button>
		</form>
	);
};

export default Metamask;
