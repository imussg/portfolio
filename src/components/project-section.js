import React, { Component } from 'react';
import './homepage.css';

export default class Project extends Component {

	constructor(props) {
		super(props);
		this.state = {
			...props,
			currentPic: props.picture,
			pos: 0,
			timer: null
		};
		console.log(this.state);
	}

	componentDidMount() {
		if(this.state.expanded) {
			// console.log(this.state);
			let timer  = setInterval(this.getNextImage.bind(this), 3000);
			this.setState({timer: timer});
		}
	}

	componentWillUnmount() {
		if(this.state.expanded) {
			this.clearInterval(this.state.timer);
		}
	}

	getNextImage() {
		// console.log(this.state);
		// console.log("in get next image");
		// if(this.state) {
			console.log(this.state);
			let currentPos = this.state.pos + 1;
			if(currentPos >= this.state.images.length) {
				currentPos = 0;
			}
			
			this.setState({
				currentPic: this.state.images[currentPos],
				pos: currentPos
			});
		// }
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
				console.log(this.state.currentPic);
				// let currentPos = 0;
				// let images = [this.state.picture, this.state.picture2];

				return (
					<div className="project-container-expanded">
						<div className="project-screenshots" id={"screenshots-id-" + this.state.pos}>
							{this.state.currentPic}
						</div>
					</div>
				);
			}
		}
	}
}