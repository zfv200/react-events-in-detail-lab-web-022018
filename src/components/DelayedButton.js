// Code CoordinatesButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  clickFunc = (event) => {
    event.persist()
    const myEvent = event
    setTimeout(()=>this.props.onDelayedClick(myEvent), this.props.delay)
  }

  render(){
    return (
      <div className="DelayedButton">
        <button onClick={this.clickFunc}></button>
      </div>
    )
  }

}

export default DelayedButton
