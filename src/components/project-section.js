import React, { Component } from 'react';
import './homepage.css';

export default function Project(props) {
	return (
		<div className="project-container">
			{props.picture}
			<a className="project-link" href={props.href}>{props.name}</a>
		</div>
	);
}