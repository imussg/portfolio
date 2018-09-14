import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../App.css';
import './homepage.css';
import Aboutme from './about-me';
import Project from './project-section';

class Homepage extends Component {

	render() {

		const gardening = {
			pic: <img className="project-pic" src="https://cdn.wallpapersafari.com/70/83/irvVAd.jpg"/>,
			href: 'https://gardening-client.herokuapp.com/',
			name: 'Gardening App'
		};
		const acceptableLosses = {
			pic: <img className="project-pic" src={require('../acceptablelosses.png')}/>,
			href: 'https://acceptable-losses-client.herokuapp.com/',
			name: `Bill
			Paying
			App`
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
				<ul className="projects-list">
					<li className="project">
						<Project picture={gardening.pic} name={gardening.name} href={gardening.href} />
					</li>
					<li className="project">
						<Project picture={acceptableLosses.pic} name={acceptableLosses.name} href={acceptableLosses.href} />
					</li>
				</ul>
			</div>
			<div className="about-me-section">
				<Aboutme />
			</div>
		</div>
		);
	}
}

export default Homepage;