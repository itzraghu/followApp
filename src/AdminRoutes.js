import React, {Component} from 'react';
import {Switch,Route} from "react-router-dom";


import Admin from "./components/Admin";
import Blank from "./components/Blank";

export default class AdminRoutes extends Component {

	render(){
		return (
			<Switch>
			<Route path="/admin" exact component={Admin} />
			<Route path="/admin/blank" exact component={Blank} />
			</Switch>
			)
		}
	}