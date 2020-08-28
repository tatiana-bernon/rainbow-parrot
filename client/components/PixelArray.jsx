import React from 'react';

import Pixel from './Pixel'

const PixelArray = () => {          
  return (
    Array.from({length: 100}, (item, i) => <Pixel key={i}/>)   
  )
}

// class PixelArray extends React.Component {
//     render() {
//           const filledArray = Array(10000).fill(<Pixel />)
//            return filledArray
//     }
//   }

  export default PixelArray