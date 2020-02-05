import React, { Component } from "react";
import {Link } from "react-router-dom";
import './login.css';

import api from "../utils/api";

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email : '',
			password : '',
		}
	}

	update  = (event) => {
		console.log(event.target.name);
		if(event.target.name === 'email'){
			this.setState({email:event.target.value});
		}else if(event.target.name === 'password'){
			this.setState({password:event.target.value});
		}

	}

	login = () => {
		let params = {};
		params.email = this.state.email;
		params.password = this.state.password;
		console.log(params);
		api('login','post',params).then(function (response) {
			if(response.data.status == 200){
				localStorage.setItem('api_key', response.data.api_key)
			}else{
				console.log('error');
			}
		})
	}

	render() {
		return (
			<div className="App">
			<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
			<Link className="navbar-brand" to={"/sign-in"}>FollowApp</Link>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul className="navbar-nav ml-auto">
			<li className="nav-item">
			<Link className="nav-link" to={"/admin/blank"}>Login</Link>
			</li>
			<li className="nav-item">
			<Link className="nav-link" to={"/sign-up"}>Sign up</Link>
			</li>
			</ul>
			</div>
			</div>
			</nav>

			<div className="auth-wrapper">
			<div className="auth-inner">
			<h3>Sign In</h3>

			<div className="form-group">
			<label>Email address</label>
			<input type="email" className="form-control" name="email" onChange={this.update} placeholder="Enter email" />
			</div>

			<div className="form-group">
			<label>Password</label>
			<input type="password" className="form-control" name="password" onChange={this.update} placeholder="Enter password" />
			</div>

			<div className="form-group">
			<div className="custom-control custom-checkbox">
			<input type="checkbox" className="custom-control-input" id="customCheck1" />
			<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
			</div>
			</div>

			<button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Submit</button>
			<p className="forgot-password text-right">
			Forgot <a href="#">password?</a>
			</p>
			</div>
			</div>
			</div>
			);
		}
	}