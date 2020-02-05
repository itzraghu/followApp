import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Blank from '../Blank';
import Dashboard from '../Dashboard';

export default class Content extends Component {

	render(){
		return (
			<Switch>
			<Route path="/blank" exact component={Dashboard} />
			<Route path="/blank/:id" exact component={Blank} />
			<Route path="/dashboard" component={Dashboard} />
			</Switch>

			)
		}
	}