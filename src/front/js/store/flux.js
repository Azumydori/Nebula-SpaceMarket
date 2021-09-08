import jwt_decode from "jwt-decode";
import UserProfile from "../pages/userprofile";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-copper-gazelle-52pduwl1.ws-eu16.gitpod.io/api",
			currentUser: {},

			product_id: {
				category: "Computers",
				shopname: "Amazon",
				product_name: "product-name",
				media: "https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123__480.jpg",
				price: 20,
				text:
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
			}
		},

		actions: {
			register: credentials => {
				console.log(credentials);
				fetch(getStore().baseURL.concat("/account"), {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
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

			addreview: (review, id_account) => {
				fetch(getStore().baseURL.concat("/review/", id_account), {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(review)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("There as been an unknown error");
						}
					})
					.then(responseAsJson => {
						console.log("review añadido", responseAsJson);
					})
					.catch(error => {
						console.error("There as been an unknown error", error);
					});
			},

			getProduct: id_product => {
				console.log("Hello");
				fetch(getStore().baseURL.concat("/product/", id_product), {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error("Product not found!");
						}
						return response.json();
					})
					.then(responseAsJson => {
						setStore({
							product_id: responseAsJson
						});
						console.log(responseAsJson);
					})
					.catch(error => {
						console.log("There was en error", error);
					});
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

			upload: data => {
				fetch(getStore().baseURL.concat("/product"), {
					method: "POST",
					body: JSON.stringify(data),
					headers: { "Content-Type": "application/json" }
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid product info");
						}
					})
					.then(responseAsJson => {
						console.log(data);
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			favorite: product_id => {
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

			shopCart: product_id => {
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

			changeAccountInfo: data => {
				const token = localStorage.getItem("token");
				const tokenID = localStorage.getItem("tokenID");
				fetch(getStore().baseURL.concat("/account", id), {
					method: "PATCH",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid changes");
						}
						return resp.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);
					})
					.catch(error => console.error("there has been an error", error));
			}
		}
	};
};

export default getState;
