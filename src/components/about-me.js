import React, { Component } from 'react';
import '../App.css';

let picture = require('../mypicture.png');

class Aboutme extends Component {
	render() {
		return (
			<div className="about-me-comp">
					<h1 className="about-me-title">
						About Me
					</h1>
					<img className="about-me-pic"src={picture} />
					In 7th grade I took my first programming class: Visual Basic.  Throughout high school and 
					college I would continue to take programming classes in a variety of topics and languages,
					but would eventually graduate with a Philosophy degree from Miami University (Ohio) compelled
					by the belief that my softer skills were underdeveloped and somewhat assuming that I had plenty
					of time to find my way back to software development.  After working with a friend of mine to
					help create and manage software for a IT hardware recycling facility (<a href="https://akooba.com/">Akooba Inc.</a>) for a year and a half,
					I filled in my knowledge with a course in full-stack development with Thinkful while preparing myself for the job market
					and am now ready to solve problems as a software developer
			</div>
		);
	}
}

export default Aboutme;