import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-aqua-yak-7fx7gv5u.ws-eu15.gitpod.io/api",
			currentUser: {}
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
			}
		}
	};
};

export default getState;
