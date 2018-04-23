// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  clickFunc = (event) => {
    let xPoint = event.clientX;
    let yPoint = event.clientY;
    let array = [xPoint, yPoint]
    return this.props.onReceiveCoordinates(array)
  }

  render(){
    return (
      <div className="CoordinatesButton">
        <button onClick={this.clickFunc}></button>
      </div>
    )
  }

}

export default CoordinatesButton
