import React, { Component } from 'react';
import './homepage.css';
import Aboutme from './about-me';
import Project from './project-section';

class Homepage extends Component {

	render() {

		const gardening = {
			pic: <img className="project-pic" src={require('../gardening-app-shots/gardening-full.png')} alt="gardening-pic"/>,
			href: 'https://gardening-client.herokuapp.com/',
			name: 'Gardening App',
			short: 'Organize and track your veggies as they grow',
			pic2: <img className="project-pic" src={require('../gardening-app-shots/start-pic.png')} alt="gardening-pic-start"/>,
			techStack: ["Node", "Mongoose", "MongoDB", "Express", "ReactJS", "Redux"],
			long: (`While growing vegetables some succeed and some wither.  In an effort to track 
				data and results of my garden over time, I created this app to separate veggies into plots,
				and track data on those vegetables over time.  To start, use the garden "Imus Garden" to see a complete garden.`)
		};
		gardening.images = [gardening.pic, gardening.pic2];
		const acceptableLosses = {
			pic: <img className="project-pic" src={require('../bill-app-shots/acceptablelosses.png')} alt="acceptable-losses-pic"/>,
			href: 'https://acceptable-losses-client.herokuapp.com/',
			name: 'Bill Paying App',
			short: 'Track all of your recurring or one time bills in one app',
			pic2: <img className="project-pic" src={require('../bill-app-shots/landing1.png')} alt="acceptable-losses-pic"/>,
			pic3: <img className="project-pic" src={require('../bill-app-shots/landing2.png')} alt="acceptable-losses-pic"/>,
			techStack: ["Node", "Mongoose", "MongoDB", "Express", "ReactJS", "Redux"],
			long: `With automatic bill payment it's sometimes easy to forget when exactly bills are due and on what schedule.
				My partners and I created this app to create reminders, record bill schedules on a calendar, and link directly to 
				pay the bill directly.`
		};
		acceptableLosses.images = [acceptableLosses.pic, acceptableLosses.pic2, acceptableLosses.pic3];
		const learnSpanish = {
			pic: <img className="project-pic" src={require('../spanish-app-shots/spanish-learning.png')} alt="learn-spanish-app-pic"/>,
			href: 'https://spacedrep-client-brian-steven.herokuapp.com/',
			name: 'Learn Spanish',
			short: 'Implementation of the spaced repetition learning process in a spanish learning app',
			techStack: ["Node", "Mongoose", "MongoDB", "Express", "ReactJS", "Redux"],
			long: `The spaced repitition system of learning has been shown through various studies to efficiently learn material
				meant for memorization.  This app is an implementation of the spaced repitition learning system in the form of a 
				spanish learning notecard app.  To try, simply make an account and try and answer the questions!`
		};
		learnSpanish.images = [learnSpanish.pic];

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
						Full Stack Projects
					</h1>
				</header>
				<div className="projects-list-div">
					<ul className="projects-list">
						<li className="project">
							<Project 
								picture={gardening.pic} 
								name={gardening.name} 
								href={gardening.href} 
								short={gardening.short}
								expanded={false} />
						</li>
						<li className="project">
							<Project
								picture={acceptableLosses.pic} 
								name={acceptableLosses.name} 
								href={acceptableLosses.href} 
								short={acceptableLosses.short}
								expanded={false}  />
						</li>
						<li className="project">
							<Project 
								picture={learnSpanish.pic} 
								name={learnSpanish.name} 
								href={learnSpanish.href} 
								short={learnSpanish.short}
								expanded={false} />
						</li>
					</ul>
				</div>
				<div className="project-expanded">
					<Project 
						picture={gardening.pic} 
						name={gardening.name} 
						href={gardening.href} 
						short={gardening.short}
						expanded={true} 
						images={[gardening.pic, gardening.pic2]}
					/>
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