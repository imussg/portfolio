import React, { Component } from 'react';
import './homepage.css';

export default class Project extends Component {

	constructor(props) {
		super(props);
		this.state = {
			...props,
			currentPic: props.picture,
			pos: 0
		};
	}

	componentDidMount() {
		console.log(this.state);
		setInterval(this.getNextImage, 3000);
	}

	render() {
		if(!this.state.expanded) {
			return (
				<div className="project-container">
					{this.state.picture}
					<a className="project-link" href={this.state.href}>{this.state.name}</a>
					<figcaption>
						<p className="project-name">{this.state.name}</p>
						<p className="project-short-desc">{this.state.short}</p>
					</figcaption>
				</div>
			);
		} else {
			if(this.state.images) {
				// console.log("in here");
				let currentPos = 0;
				let images = [this.state.picture, this.state.picture2];

				return (
					<div className="project-container-expanded">
						<div className="project-screenshots">
							{this.state.currentPic}
						</div>
					</div>
				);
			}
		}
	}

	getNextImage() {
		console.log("in here");
		if(this.state) {
			let currentPos = this.state.pos + 1;
			if(currentPos >= this.state.images.length) {
				currentPos = 0;
			}
			console.log(currentPos);
			this.setState = {
				currentPic: this.state.images[currentPos],
				pos: currentPos
			};
		}
	}
}