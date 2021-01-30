const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			nombre: "",
			correo: "",
			telefono: "",
			direccion: "",
			agenda: "freddy",
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			capturaCampos: e => {
				const store = getStore();

				setStore({ ...store, [e.target.name]: e.target.value });
			},

			enviarFormulario: e => {
				e.preventDefault();
				const store = getStore();
				console.log("Hola");
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: store.nombre,
						email: store.correo,
						agenda_slug: store.agenda,
						address: store.direccion,
						phone: store.telefono
					})
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			contactos: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + store.agenda)
					.then(resp => resp.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			},

			borrarContacto: id =>
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, { method: "DELETE" })
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error))
		}
	};
};
export default getState;
