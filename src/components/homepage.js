import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../App.css';
import './homepage.css';
import Aboutme from './about-me';
import Project from './project-section';

class Homepage extends Component {

	render() {

		const gardening = {
			pic: 'https://cdn.wallpapersafari.com/70/83/irvVAd.jpg',
			href: 'https://gardening-client.herokuapp.com/',
			name: 'Gardening App'
		};

		return (
		<div className="app-page">
			<div className="intro">
				<header className="intro-header">
					<h1 className="intro-title">Steven Imus</h1>
					<h5 className="intro-subtitle">Software Developer for Node, React, SQL</h5>
				</header>
			</div>
			<div className="projects">
				<header className="projects-header">
					<h1 className="projects-title">
						Full Stack Projects
					</h1>
					<h3 className="projects-subtitle">All projects fully implemented with server, client, and database logic</h3>
				</header>
				<Project picture={gardening.pic} name={gardening.name} href={gardening.href} />
			</div>
			<div className="about-me-section">
				<Aboutme />
			</div>
		</div>
		);
	}
}

export default Homepage;