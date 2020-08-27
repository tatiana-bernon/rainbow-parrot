import React from 'react';

const width = 50;
const height = 50;

class Pixel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				height: height,
				width: width,
				backgroundColor: 'red',
			},
		};
	}
	render() {
		return <div style={this.state.style}></div>;
	}
}

export default Pixel;
