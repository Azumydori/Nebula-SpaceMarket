import jwt_decode from "jwt-decode";
import UserProfile from "../pages/userprofile";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://olive-cuckoo-o1ih9hlo.ws-eu16.gitpod.io/api",
			currentUser: {},
			whishList: [],
			cart: [],
			product: [],
			vendor: []
		},

		actions: {
			register: (first_name, last_name, email, password, username) => {
				fetch(getStore().baseURL.concat("/signup"), {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password,
						username: username
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			login: credentials => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(credentials)
				})
					.then(resp => {
						if (resp.status === 200) {
							console.log(resp);
							return resp.json();
						} else if (resp.status === 401) {
							console.log("Invalid credentials");
						} else if (resp.status === 400) {
							console.log("Invalid email or password format");
						} else throw Error("Unknown error");
					})
					.then(data => {
						localStorage.setItem("jwt-token", data.token);
						redirect();
					})
					.catch(error => {
						console.error("There as been an unknown error", error);
						localStorage.removeItem("jwt-token");
					});
			},

			Favorite: product_id => {
				let myToken = localStorage.getItem("token");
				let myUser = getStore().currentUser.id;
				console.log("Soy favorite");
				fetch(getStore().baseURL.concat("/client/", myUser, "/favorite"), {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${myToken}` },
					body: JSON.stringify({ product_id: product_id })
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						setStore({ whishList: responseAsJson });
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			unFavorite: product_id => {
				let myToken = localStorage.getItem("token");
				let myUser = getStore().currentUser.id;
				console.log("Soy unfavorite");
				fetch(getStore().baseURL.concat("/client/", myUser, "/favorite"), {
					method: "DELETE",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${myToken}` },
					body: JSON.stringify({ product_id: product_id })
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						setStore({ whishList: responseAsJson });
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			ShopCart: product_id => {
				let myToken = localStorage.getItem("token");
				let myUser = getStore().currentUser.id;
				console.log("Soy shoppingcard");
				fetch(getStore().baseURL.concat("/client/", myUser, "/cart"), {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${myToken}` },
					body: JSON.stringify({ product_id: product_id })
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						setStore({ cart: responseAsJson });
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			getProduct: product_id => {
				fetch(getStore().baseURL.concat("/pruduct/", product_id), {
					method: "GET"
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						setStore({ ...product, product: responseAsJson });
						return responseAsJson;
					})
					.catch(error => console.error("There as been an unknown error", error));
			}
		}
	};
};

export default getState;
