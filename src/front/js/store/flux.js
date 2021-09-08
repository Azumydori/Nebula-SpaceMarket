import jwt_decode from "jwt-decode";
import UserProfile from "../pages/userprofile";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-aqua-yak-7fx7gv5u.ws-eu16.gitpod.io/api",
			currentUser: {},
			whishList: [1, 4, 7],
			cart: [],
			product: [
				{
					id: 1,
					product_name: "Puerta",
					vendor_name: "Isidoro Ferreira",
					price: 12,
					media:
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: " Tienes defectos si, pero son los más perfectos del mundo"
				},
				{
					id: 2,
					product_name: "Ego Erectus",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/3844786/pexels-photo-3844786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "'Te extraño' no se acentúa, pero con el paso de los días sí"
				},
				{
					id: 3,
					product_name: "Niño de manos",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: " Me enamoré de ti por lo que eres, no por lo que algún día quiero que seas"
				},
				{
					id: 4,
					product_name: "Viaje incierto",
					vendor_name: "Isidoro Ferreira",
					price: 12,
					media:
						"https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Hoy no te voy a decir 'Te quiero', te lo voy a demostrar el resto de días del año"
				},
				{
					id: 5,
					product_name: "Pentateuque",
					vendor_name: "Luis Angel Chaves",
					price: 12,
					media:
						"https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "El físico atrae, el cariño seduce, pero que te contesten al momento en WhatsApp te enamora"
				},
				{
					id: 6,
					product_name: "Soledad",
					vendor_name: "Santiago",
					price: 12,
					media:
						"https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Un buen destino es que dos personas se encuentren cuando ni siquiera se estaban buscando"
				},
				{
					id: 7,
					product_name: "score",
					vendor_name: "Juan Maria Peral",
					price: 12,
					media:
						"https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Estoy pensando patentar tus besos y caricias para que nadie me los robe"
				},
				{
					id: 8,
					product_name: "Casiopea",
					vendor_name: "Noa Barrios",
					price: 12,
					media:
						"https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "Te conocí y de repente todo cambió en mi vida. Ahora ya no la entiendo sin ti"
				},
				{
					id: 9,
					product_name: "Misión californiana: Caballo",
					vendor_name: "Rachida Castellano",
					price: 12,
					media:
						"https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					text: "No estaba buscando nada; pero te vi y encontré todo"
				}
			]
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
