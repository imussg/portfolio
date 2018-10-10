import React, { Component } from 'react';
import './homepage.css';
import Aboutme from './about-me';
import Project from './project-section';

class Homepage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			...props,
			hiddeng: true,
			hiddena: true,
			hiddenl: true,
			expandg: true,
			expandb: true,
			expandl: true
		};
		this.gardening = {
			icon: <img className="project-icon" src={require('../gardening-app-shots/gardening-icon.png')} alt="gardening-icon"/>,
			pic: <img className="project-pic" id={"garden-full-pic"} src={require('../gardening-app-shots/gardening-full.png')} alt="gardening-pic"/>,
			href: 'https://gardening-client.herokuapp.com/',
			name: 'Gardening App',
			short: 'Organize and track your veggies as they grow',
			pic2: <img className="project-pic" id={"garden-start-pic"} src={require('../gardening-app-shots/start-pic.png')} alt="gardening-pic-start"/>,
			pic3: <img className="project-pic" id={"garden-chosen-pic"} src={require('../gardening-app-shots/garden-chosen.png')} alt="gardening-pic-chosen"/>,
			techStack: ["Node", "Mongoose", "MongoDB", "Express", "ReactJS", "Redux"],
			long: (`While growing vegetables some succeed and some wither.  In an effort to track 
				data and results of my garden over time, I created this app to separate veggies into plots,
				and track data on those vegetables over time.  To start, use the garden "Imus Garden" to see a complete garden.`)
		};
		this.gardening.images = [this.gardening.pic, this.gardening.pic2, this.gardening.pic3];
		this.acceptableLosses = {
			icon: <img className="project-icon" src={require('../bill-app-shots/bills-icon.png')} alt="acceptable-losses-icon"/>,
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
		this.acceptableLosses.images = [this.acceptableLosses.pic, this.acceptableLosses.pic2, this.acceptableLosses.pic3];
		this.learnSpanish = {
			icon: <img className="project-icon" src={require('../spanish-app-shots/spanish-learning-icon.png')} alt="learn-spanish-app-icon"/>,
			pic: <img className="project-pic" src={require('../spanish-app-shots/spanish-learning.png')} alt="learn-spanish-app-pic"/>,
			href: 'https://spacedrep-client-brian-steven.herokuapp.com/',
			name: 'Learn Spanish',
			short: 'Implementation of the spaced repetition learning process in a spanish learning app',
			techStack: ["Node", "Mongoose", "MongoDB", "Express", "ReactJS", "Redux"],
			long: `The spaced repitition system of learning has been shown through various studies to efficiently learn material
				meant for memorization.  This app is an implementation of the spaced repitition learning system in the form of a 
				spanish learning notecard app.  To try, simply make an account and try and answer the questions!`
		};
		this.learnSpanish.images = [this.learnSpanish.pic];
	}

	showGardeningBrief() {
		this.setState({
			hiddeng: !this.state.hiddeng
		});
	}

	showAcceptableLossesBrief() {
		this.setState({
			hiddena: !this.state.hiddena
		});
	}

	showLearnSpanishBrief() {
		this.setState({
			hiddenl: !this.state.hiddenl
		});
	}

	gardenClick() {
		this.setState({
			expandg: false,
			expandb: true,
			expandl: true
		});
	}

	billClick() {
		this.setState({
			expandb: false,
			expandg: true,
			expandl: true
		});
	}

	learnClick() {
		this.setState({
			expandl: false,
			expandg: true,
			expandb: true
		});
	}

	render() {
		let msg = "";
		if(this.state.hiddeng&&this.state.hiddena&&this.state.hiddenl&&this.state.expandg&&this.state.expandb&&this.state.expandl) {
			msg = "Click on an icon to see a project";
		}
		return (
		<div className="app-page">
			<div className="intro">
				<header className="intro-header">
					<h1 className="intro-title"><span className="code-name">Steven Imus</span></h1>
					<h5 className="intro-subtitle"><span className="code-white">Full Stack Developer</span></h5>
				</header>
			</div>
			<div className="projects">
				<header className="projects-header">
					<h1 className="projects-title">
						Projects
					</h1>
				</header>
				<div className="projects-list-div">
					<ul className="projects-list">
						<li className="project" id="gardening-brief" onClick={()=>this.gardenClick()} onMouseEnter={() => this.showGardeningBrief()} onMouseLeave={() => this.showGardeningBrief()}>
							{this.gardening.icon}
							<p className="project-hidden-brief" hidden={this.state.hiddeng}>
								<span className="project-hidden-title">
									{this.gardening.name}
								</span>
								<span className="project-hidden-desc">
									{this.gardening.short}
								</span>
							</p>
						</li>
						<li className="project" id="acceptable-losses-brief" onClick={()=>this.billClick()} onMouseEnter={() => this.showAcceptableLossesBrief()} onMouseLeave={()=>this.showAcceptableLossesBrief()}>
							{this.acceptableLosses.icon}
							<p className="project-hidden-brief" hidden={this.state.hiddena}>
								<span className="project-hidden-title">
									{this.acceptableLosses.name}
								</span>
								<span className="project-hidden-desc">
									{this.acceptableLosses.short}
								</span>
							</p>
						</li>
						<li className="project" id="learning-brief" onClick={()=>this.learnClick()} onMouseEnter={() => this.showLearnSpanishBrief()} onMouseLeave={()=>this.showLearnSpanishBrief()}>
							{this.learnSpanish.icon}
							<p className="project-hidden-brief" hidden={this.state.hiddenl}>
								<span className="project-hidden-title">
									{this.learnSpanish.name}
								</span>
								<span className="project-hidden-desc">
									{this.learnSpanish.short}
								</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="project-expanded">
					<span id="inst-msg">{msg}</span>
					<div className="hidden-expanded" id="garden-expanded" hidden={this.state.expandg}>
						<Project 
							picture={this.gardening.pic} 
							name={this.gardening.name} 
							href={this.gardening.href} 
							short={this.gardening.short}
							expanded={true} 
							images={[...this.gardening.images]}
						/>
					</div>
					<div className="hidden-expanded" id="bills-expanded" hidden={this.state.expandb}>
						<Project 
							picture={this.acceptableLosses.pic} 
							name={this.acceptableLosses.name} 
							href={this.acceptableLosses.href} 
							short={this.acceptableLosses.short}
							expanded={true} 
							images={[...this.acceptableLosses.images]}
						/>
					</div>
					<div className="hidden-expanded" id="learning-expanded" hidden={this.state.expandl}>
						<Project 
							picture={this.learnSpanish.pic} 
							name={this.learnSpanish.name} 
							href={this.learnSpanish.href} 
							short={this.learnSpanish.short}
							expanded={true} 
							images={[...this.learnSpanish.images]}
						/>
					</div>
					{this.state.currentProject}
				</div>
			</div>
			<div className="about-me-section">
				<Aboutme />
			</div>
		</div>
		);
	}
}

/*
<Project 
picture={gardening.pic} 
name={gardening.name} 
href={gardening.href} 
short={gardening.short}
expanded={false} />
<Project
picture={acceptableLosses.pic} 
name={acceptableLosses.name} 
href={acceptableLosses.href} 
short={acceptableLosses.short}
expanded={false}  />
<Project 
picture={learnSpanish.pic} 
name={learnSpanish.name} 
href={learnSpanish.href} 
short={learnSpanish.short}
expanded={false} />
*/

export default Homepage;