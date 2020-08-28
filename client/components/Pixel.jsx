import React from 'react';

const width = 25;
const height = 25;

class Pixel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			style: {
				height: height,
				width: width,
				backgroundColor: 'white',
			},
		};
	}

	clickHandler = (evt) => {               // event handler function 
        this.setState({                 // same as function (evt) { this.setState()... }
            style: {
                width: width,           
                height: height,
                backgroundColor: '#00ff33'
            }
        })
	}

	onContextMenu = (evt) => {
        evt.preventDefault()
        this.setState({
            style: {
                width,
                height,
                backgroundColor: '#ff4040'
            }
        })
	}
		
	onDoubleClick = (evt) => {
		this.setState({
			style: {
				width,
				height,
				backgroundColor: 'white'
			}
		})
	}

	onDragEnter = (evt) => {
		this.setState({
			style: {
				width,
				height,
				backgroundColor: 'purple'
				}
			})
		}
	
	render() {
		return (
		<div style={this.state.style}
		onClick={this.clickHandler}
		onContextMenu={this.onContextMenu}
		onDoubleClick={this.onDoubleClick}
		draggable='true' onDragEnter={this.onDragEnter}>
		</div>
		)
	}
}

export default Pixel;
