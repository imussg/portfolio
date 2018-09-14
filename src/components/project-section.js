import React, { Component } from 'react';
import './homepage.css';

export default function Project(props) {
	return (
		<div className="project-container">
			<img className="project-pic" src={props.picture}/>
			<a className="project-link" href={props.href}>{props.name}</a>
		</div>
	);
}