import React, { Component } from 'react';
import '../App.css';

let picture = require('../self-shots/mypicture.png');

class Aboutme extends Component {
	render() {
		return (
			<div className="about-me-comp">
					<h1 className="about-me-title">
						About Me
					</h1>
					<img className="about-me-pic"src={picture} alt="my-pic"/>
					<p className="self-desc">I'm a full-stack developer looking forward to a career in software development and working with a team of programmers.
					After getting a philosophy degree from Miami university, I moved back to where I was born and raised, 
					Washington D.C. where I continued to program up until now as I currently work at and manage Thai Pad Restaurant in downtown DC
					</p>
					<p>Feel free to contact me at imussg@gmail.com and check out <a href="https://github.com/imussg">my github</a> and/or my 
					<a href="https://www.linkedin.com/in/steven-imus-3b3a1a52/"> linkedin profile</a></p>
			</div>
		);
	}
}

export default Aboutme;