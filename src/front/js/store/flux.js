const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "/api",
			currentUser: {}
		},

		actions: {
			register: (first_name, last_name, email, password, username) => {
				fetch(getStore().baseURL.concat("/signup"), {
					method: "POST",
					mode: "cors",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({ first_name: first_name, last_name: last_name, email: email, password: password, username: username })
				}).then(resp => {
					if(!resp.ok){
						throw Error("Invalid register info");
					}
				}).then(responseAsJson => {
					localStorage.setItem("token", responseAsJson);

				}).catch(error => console.error("There as been an unknown error", error))

			},

			login: (email, password) => {
				fetch(getStore().baseURL.concat("/login"), {
					method: "POST",
					mode: "cors",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				}).then(resp => {
					if(resp.ok) {
						return resp.json()
					} else if(resp.status === 401){
						console.log("Invalid credentials")
					} else if(resp.status === 400){
						console.log("Invalid email or password format")
					} else throw Error("Unknown error")
				}).then(data => {
					localStorage.setItem("jwt-token", data.token);
				}).catch(error => console.error("There as been an unknown error", error))

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
