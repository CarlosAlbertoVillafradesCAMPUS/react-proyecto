import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {

	const form = useRef(null); //el useRef se utiliza para traer o coger informacion que tengamos en unos inputs
	const handleSubmit = ( event ) =>{
		event.preventDefault();
		const formData = new FormData(form.current); //aqui lo que estamos hciendo es utilizando formData y con el .current estamos tomando el valor de email y password
	    const data = {  //lo que esto vaa ser es crearme un nuevo formData con los valore que coloquemos en emial y password
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo-login" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit} >Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;