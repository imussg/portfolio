import React, { Component } from 'react';
import './homepage.css';

export default class Project extends Component {

	constructor(props) {
		super(props);
		this.state = {
			...props
		};
	}

	componentDidMount() {

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
			if(this.state.image1 && this.state.image2 && this.state.image3) {
				let currentPos = 0;
				let images = [this.state.image1, this.state.image2, this.state.image3];

				function getNextImage() {
					currentPos++;
					if(currentPos >= images.length) {
						currentPos = 0;
					}
					return images[currentPos];
				}

				return (
					<div className="project-container-expanded">
						<div className="project-screenshots">
							{setInterval(getNextImage, 3000)}
						</div>
					</div>
				);
			}
		}
	}
}