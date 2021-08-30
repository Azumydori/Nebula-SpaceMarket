const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-amethyst-raven-vte1zpg3.ws-eu16.gitpod.io/api",
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

			login: (email, password) => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					mode: "cors",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						} else if (resp.status === 401) {
							console.log("Invalid credentials");
						} else if (resp.status === 400) {
							console.log("Invalid email or password format");
						} else throw Error("Unknown error");
					})
					.then(data => {
						localStorage.setItem("jwt-token", data.token);
					})
					.catch(error => console.error("There as been an unknown error", error));
			}
		}
	};
};

export default getState;
