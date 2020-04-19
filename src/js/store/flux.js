import { SignUp } from "../views/signup";
import { Login } from "../views/login";
import { Feed } from "../views/feed";
import { AlertMsg } from "../views/alertMessage";

const url = "https://petfinders-back.herokuapp.com/";

const urlUser = "https://petfinders-back.herokuapp.com/users";
const urlAlert = "https://petfinders-back.herokuapp.com/alert";
// const urlMessage = "https://petfinders-back.herokuapp.com/message";
const urlPet = "https://petfinders-back.herokuapp.com/pets";

const urlBreeds = "https://api.thedogapi.com/v1/breeds";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			breeds: [],
			users: [],
			contacts: null,
			pets: [],
			alerts: []
		},
		actions: {
			getUser: () => {
				fetch(url + "users")
					.then(res => res.json())
					.then(result => {
						console.log("resultUsers", result),
							setStore({
								users: result
							});
					})
					.catch();
			},

			getPet: () => {
				fetch(url + "pets")
					.then(res => res.json())
					.then(result => {
						let arr = result.slice().reverse();
						console.log("resultPet", arr);
						setStore({
							pets: arr
						});
					})
					.catch();
			},
			getBreeds: () => {
				fetch(urlBreeds, {
					method: "GET",
					headers: { "x-api-key": "681dd748-e189-4181-b766-a245737f09b8" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ breeds: data });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getAlerts: () => {
				fetch(url + "alert")
					.then(res => res.json())
					.then(result => {
						console.log("resultAlert", result),
							setStore({
								alerts: result
							});
					});
				// .catch();
			},
			sendSmsAlert: bubu_id => {
				fetch(url + "alert" + "/" + bubu_id + "/sendmsg");
			},

			createAlert: (message, email, name, petname, phone, history) => {
				console.log("amiworkinginfunc", message, email, name, petname, phone);
				fetch(url + "alert", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						message: message,
						email: email,
						name: name,
						petname: petname,
						phone: phone
					})
				})
					.then(() => {
						fetch(url + "alert")
							.then(res => res.json())
							.then(result => {
								console.log("createAlertworking", result),
									setStore({
										alerts: result
									});
							});
					})
					.then(() => history.push("/feed"));
			},

			register(bubu, history) {
				// console.log(bubu);url + "register"
				return fetch(url + "register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({
							users: result
						});
					})
					.then(() => history.push("/login"))
					.catch(e => console.error("error in add" + e));
			},

			petProfilePost(bubu, history) {
				console.log("buburesult", bubu);
				fetch(url + "pets", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(() => getActions().getUser())
					.then(() => history.push("/dashboard-b"))
					.catch(e => console.error("error in add" + e));
			},
			deletePet: (id, history) => {
				fetch(url + "pets" + "/" + `${id}`, { method: "DELETE" })
					.then(() => {
						console.log("Pet profile deleted successfully");
						getActions().getUser();
					})
					// .then(() => history.push("/dashboard-b"))
					.catch(function(error) {
						console.log("There was an Error : \n", error);
					});
			},
			deleteAlert: (id, history) => {
				fetch(url + "alert" + "/" + `${id}`, { method: "DELETE" })
					.then(() => {
						console.log("Alert has been deleted");
						getActions().getAlerts();
					})
					.catch(function(error) {
						console.log("An error occured during alert removal process :\n", error);
					});
			},
			login(bubu, history) {
				console.log("logging:", bubu);
				return fetch(url + "myLogin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({ contacts: result });
					})
					.then(() => history.push("/dashboard-b"))
					.catch(e => console.error("error in login" + e));
			},
			logout() {
				let store = getStore();
				setStore({ contacts: null });
			}
		}
	};
};
export default getState;
