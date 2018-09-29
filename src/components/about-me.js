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
					<img className="about-me-pic"src={picture} alt="my-pic"/>
					<p>I'm a full-stack developer looking forward to a career in software development and working with a team of great programmers!
					I love building great software and solving hard problems
					</p>
					<p>Feel free to contact me at imussg@gmail.com and check out <a href="https://github.com/imussg">my github</a> and/or my 
					<a href="https://www.linkedin.com/in/steven-imus-3b3a1a52/">linkedin profile</a></p>
			</div>
		);
	}
}

export default Aboutme;