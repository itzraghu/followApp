import React, {Component} from 'react';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';


export default class Admin extends Component {
	constructor(props){
		super(props);

	}
	render(){
		return (
			<div>
			<Header />
			<Sidebar />

			
			<Footer />
			</div>
			)
		}
	}