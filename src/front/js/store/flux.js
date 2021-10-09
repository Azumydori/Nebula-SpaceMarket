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
			baseURL: "https://3001-teal-lemming-pqtgqqqx.ws-eu18.gitpod.io/api",
			domainURL: "https://3000-teal-lemming-pqtgqqqx.ws-eu18.gitpod.io/",
			wishlist: [1, 4, 7],
			cart: [],
			searchProduct: [],
			allProducts: [],
			product: [
				{
					id: 1,
					product_name: "Puerta",
					vendor_name: "Isidoro Ferreira",
					price: 12,
					media:
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: " Tienes defectos si, pero son los más perfectos del mundo",
					category: "Clothing"
				},
				{
					id: 2,
					product_name: "Ego Erectus",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/3844786/pexels-photo-3844786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "'Te extraño' no se acentúa, pero con el paso de los días sí",
					category: "Appliances"
				},
				{
					id: 3,
					product_name: "Niño de manos",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: " Me enamoré de ti por lo que eres, no por lo que algún día quiero que seas",
					category: "Clothing"
				},
				{
					id: 4,
					product_name: "Viaje incierto",
					vendor_name: "Isidoro Ferreira",
					price: 12,
					media:
						"https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Hoy no te voy a decir 'Te quiero', te lo voy a demostrar el resto de días del año",
					category: "Cellphones"
				},
				{
					id: 5,
					product_name: "Pentateuque",
					vendor_name: "Luis Angel Chaves",
					price: 12,
					media:
						"https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "El físico atrae, el cariño seduce, pero que te contesten al momento en WhatsApp te enamora",
					category: "Cellphones"
				},
				{
					id: 6,
					product_name: "Soledad",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Un buen destino es que dos personas se encuentren cuando ni siquiera se estaban buscando",
					category: "Cellphones"
				},
				{
					id: 7,
					product_name: "score",
					vendor_name: "Juan Maria Peral",
					price: 12,
					media:
						"https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Estoy pensando patentar tus besos y caricias para que nadie me los robe",
					category: "Sports"
				},
				{
					id: 8,
					product_name: "Casiopea",
					vendor_name: "Noa Barrios",
					price: 12,
					media:
						"https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Te conocí y de repente todo cambió en mi vida. Ahora ya no la entiendo sin ti",
					category: "Sports"
				},
				{
					id: 9,
					product_name: "Misión californiana: Caballo",
					vendor_name: "Rachida Castellano",
					price: 12,
					media:
						"https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "No estaba buscando nada; pero te vi y encontré todo",
					category: "Computers"
				}
			],
			vendor: []
		},

		actions: {
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
							throw Error("I can't register this traveler!");
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
					console.log(media);
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
						productMedia(media, id);
						setStore({ posts: responseAsJson });
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

				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
				const myUser = tokenDecode(myToken);
				if (myUser != undefined) {
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
				} else {
					console.log(myToken);
				}
			},

			unFavorite: product_id => {
				let myToken = localStorage.getItem("jwt-token");
				let myUser = getStore().currentUser.sub;
				if (myUser != undefined) {
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
				} else {
					console.log(myUser);
					//window.location = getStore().domainURL.concat("login");
				}
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
