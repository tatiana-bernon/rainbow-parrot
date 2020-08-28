import React from 'react';

import Pixel from './Pixel'

class PixelArray extends React.Component {
    render() {
          const filledArray = Array(10000).fill(<Pixel />)
           return filledArray
    }
  }

  export default PixelArray