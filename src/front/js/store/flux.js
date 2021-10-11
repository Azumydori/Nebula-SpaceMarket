import jwt_decode from "jwt-decode";

//importante para obtener los atributos del token

//const tokenDecode = token => {
//	let decoded = jwt_decode(token);
//	return decoded;
//};
//const setUserFromToken = token => {
//	localStorage.setItem("Id", token.sub.id);
//	localStorage.setItem("Name", token.sub.first_name);
//};
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//https://nebula-spacemarket.herokuapp.com/
			baseURL: "https://3001-teal-turkey-e7hjqm5n.ws-eu18.gitpod.io/api",
			domainURL: "hhttps://3000-teal-turkey-e7hjqm5n.ws-eu18.gitpod.io/",
			wishlist: [],
			cart: [],
			searchProduct: [],
			allProducts: [],
			product: [],
			vendor: []
		},

		actions: {
			logOut: () => {
				if (localStorage.getItem("jwt-token")) {
					localStorage.removeItem("jwt-token");
					localStorage.removeItem("Id");
					localStorage.removeItem("Name");
				}
			},
			getUser: (id, currentUser) => {
				fetch(getStore().baseURL.concat("/account", id))
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load user!");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						if (currentUser == true) {
							setStore({ currentUser: responseAsJson });
						} else {
							setStore({ user: responseAsJson });
						}
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			register: credentials => {
				const redirect = () => {
					if (localStorage.getItem("jwt-token") != null) {
						window.location = getStore().domainURL.concat("controlpage");
					}
				};
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
				const setUserFromToken = token => {
					localStorage.setItem("Id", token.sub.id);
					localStorage.setItem("Name", token.sub.first_name);
				};

				console.log(credentials);
				fetch(getStore().baseURL.concat("/account"), {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: new Headers({
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					})
				})
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							throw Error("I can't register this user!");
						}
						return response.json();
					})
					.then(data => {
						localStorage.setItem("jwt-token", data.token);
						const tokenDecoded = tokenDecode(data.token);
						setUserFromToken(tokenDecoded);
						redirect();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			login: credentials => {
				const redirect = () => {
					if (localStorage.getItem("jwt-token") != null) {
						window.location = getStore().domainURL.concat("controlpage");
					}
				};
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
				const setUserFromToken = token => {
					localStorage.setItem("Id", token.sub.id);
					localStorage.setItem("Name", token.sub.first_name);
				};

				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					headers: new Headers({
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}),
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
						const tokenDecoded = tokenDecode(data.token);
						setUserFromToken(tokenDecoded);
						redirect();
					})
					.catch(error => {
						alert("hey");
						localStorage.removeItem("jwt-token");
					});
			},

			upload: (data, media) => {
				let token = localStorage.getItem("jwt-token");
				let id = localStorage.getItem("Id");
				const redirect = () => {
					if (localStorage.getItem("jwt-token") != null) {
						window.location = getStore().domainURL.concat("controlpage");
					}
				};
				const productMedia = (media, id) => {
					let mybody = new FormData();

					mybody.append("media", media[0]);
					fetch(getStore().baseURL.concat("/productmedia/", id), {
						body: mybody,
						method: "POST"
					})
						.then(function(response) {
							if (!response.ok) {
								throw Error("I can't upload media!");
							}

							return response.json();
						})
						.catch(function(error) {
							console.log("Looks like there was a problem in media: \n", error);
						});
				};
				fetch(getStore().baseURL.concat("/newproduct/", id), {
					method: "POST",
					body: data,
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("New product error");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						productMedia(media, responseAsJson.id);
						
						//Hay que meterle tiempo para que pueda cargar la informacion, si no da fallos
						if (media[0]) {
							setTimeout(() => {
								redirect();
							}, 2500);
						} else {
							redirect();
						}
					})
					.catch(function(error) {
						console.log("Upload error \n", error);
					});
			},

			favorite: product_id => {
				let myToken = localStorage.getItem("jwt-token");
				let myUser = localStorage.getItem("Id");

				if (myUser != undefined) {
					fetch(getStore().baseURL.concat("/favorite/", product_id), {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${myToken}`
						},
						body: JSON.stringify({ product_id: product_id })
					})
						.then(resp => {
							console.log(resp);
							if (!resp.ok) {
								throw Error("Invalid register info");
							}
						})
						.then(responseAsJson => {
							console.log("Soy tu deseo recien llegado", responseAsJson);
							setStore({ wishlist: responseAsJson });
							console.log("Soy tu deseo en la store", getStore().wishlist);
						})
						.catch(error => console.error("There as been an unknown error", error));
				} else {
					alert("must login");
				}
			},

			unFavorite: product_id => {
				let myToken = localStorage.getItem("jwt-token");
				let myUser = localStorage.getItem("Id");
				if (myUser != undefined) {
					fetch(getStore().baseURL.concat("/favorite/", product_id), {
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
							setStore({ wishlist: responseAsJson });
							alert(responseAsJson);
						})
						.catch(error => console.error("There as been an unknown error", error));
				} else {
					console.log(myUser);
					//window.location = getStore().domainURL.concat("login");
				}
			},

			shopCart: product_id => {
				let myToken = localStorage.getItem("token");
				let myUser = getStore().currentUser.id;

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
				const token = localStorage.getItem("jwt-token");
				const tokenID = localStorage.getItem("Id");
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
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						setStore({ ...product, product: responseAsJson });
						return responseAsJson;
					})
					.catch(error => console.error("there has been an error", error));
			},
			getProducts: () => {
				fetch(getStore().baseURL.concat("/product"), {
					method: "GET",
					headers: new Headers({
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid products");
						}
						return resp.json();
					})
					.then(responseAsJson => {
						setStore({ allProducts: responseAsJson });
						console.log(responseAsJson);
					})
					.catch(error => console.error("There as been an unknown error", error));
			},
			getProduct: product_id => {
				fetch(getStore().baseURL.concat("/product", product_id), {
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
			},

			categorySearch: category => {
				fetch(getStore().baseURL.concat("/search/", category), {
					method: "GET"
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						return responseAsJson;
					})
					.catch(error => console.error("There as been an unknown error", error));
			}
		}
	};
};

export default getState;
