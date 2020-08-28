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

	clickHandler = (evt) => {               // event handler function 
        this.setState({                 // same as function (evt) { this.setState()... }
            style: {
                width: width,           // trying out width: width vs just width below
                height: height,
                backgroundColor: 'green'
            }
        })
	}

	onContextMenu = (evt) => {
        evt.preventDefault()
        this.setState({
            style: {
                width,
                height,
                backgroundColor: 'black'
            }
        })
	}
		
	onDoubleClick = (evt) => {
		this.setState({
			style: {
				width,
				height,
				backgroundColor: 'blue'
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
