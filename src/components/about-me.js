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
					<img src={picture} />
					I got my start in programming at age 11 continuing to dabble (though never professionally)
					throughout my life.  After working with a friend of mine to create and manage a software
					infrastructure for a IT hardware recycling facility (Akooba Inc.) for a year and a half,
					I filled in my knowledge with Thinkful's online program and now am ready to solve problems
					as a software developer.
			</div>
		);
	}
}

export default Aboutme;