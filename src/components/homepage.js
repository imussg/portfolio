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
			name: 'Bill Paying App'
		};
		const learnSpanish = {
			pic: <img className="project-pic" src={require('../spanish-learning.png')}/>,
			href: 'https://spacedrep-client-brian-steven.herokuapp.com/',
			name: 'Learn Spanish'
		};

		return (
		<div className="app-page">
			<div className="intro">
				<header className="intro-header">
					<h1 className="intro-title"><span className="code-name">Steven Imus</span></h1>
					<h5 className="intro-subtitle"><span className="code-blue">Software Developer </span><span className="code-red">for</span><span className="code-blue"> Node</span><span className="code-white">, </span><span className="code-blue">React</span><span className="code-white">,</span><span className="code-blue"> SQL</span></h5>
				</header>
			</div>
			<div className="projects">

				<header className="projects-header">
					<h1 className="projects-title">
						<span className="code-green">Full Stack</span> <span className="code-white">Projects</span>
					</h1>
					<h3 className="projects-subtitle"><span className="code-white">All projects fully implemented with server, client, and database logic</span></h3>
				</header>
				<div className="projects-list-div">
					<ul className="projects-list">
						<li className="project">
							<Project picture={gardening.pic} name={gardening.name} href={gardening.href} />
						</li>
						<li className="project">
							<Project picture={acceptableLosses.pic} name={acceptableLosses.name} href={acceptableLosses.href} />
						</li>
						<li className="project">
							<Project picture={learnSpanish.pic} name={learnSpanish.name} href={learnSpanish.href} />
						</li>
					</ul>
				</div>
			</div>
			<div className="about-me-section">
				<Aboutme />
			</div>
		</div>
		);
	}
}

export default Homepage;