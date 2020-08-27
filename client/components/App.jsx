import React from 'react';
import Pixel from './Pixel';

// // const App = () => {
// return <div>{Pixel}</div>;
// // };

class App extends React.Component {
	render() {
		return (
			<>
        <div className='pixelContainer'>
				<Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        </div>
			</>
		);
	}
}

export default App;
