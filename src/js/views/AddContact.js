import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={e => actions.enviarFormulario(e)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="nombre"
							className="form-control"
							placeholder="Full Name"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="correo"
							className="form-control"
							placeholder="Enter email"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="telefono"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="direccion"
							className="form-control"
							placeholder="Enter address"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
