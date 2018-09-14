import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../App.css';
import './homepage.css';
import Aboutme from './about-me';

class Homepage extends Component {
	render() {
		return (
		<div className="app-page">
			<div className="intro">
				<header className="intro-header">
					<h1 className="intro-title">Steven Imus</h1>
					<h5 className="intro-subtitle">Software Developer for Node, React, SQL</h5>
				</header>
				<h1 className="projects">
					Full Stack Projects
				</h1>
				<h3>All projects fully implemented with server, client, and database logic</h3>
			</div>
			<Aboutme />
		</div>
		);
	}
}

export default Homepage;