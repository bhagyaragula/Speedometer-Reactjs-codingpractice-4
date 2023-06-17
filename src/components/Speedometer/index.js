// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncreaseAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecreaseApplyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-container">
        <h1 className="speed-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="increase-button button"
            type="button"
            onClick={this.onIncreaseAccelerate}
          >
            Accelerate
          </button>
          <button
            className="Decrease-button button"
            type="button"
            onClick={this.onDecreaseApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
