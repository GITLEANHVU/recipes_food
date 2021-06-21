import logo from './logo.svg';
import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      min: 0,
      hour: 0
    }
  }
  render() {
    const { second, min, hour } = this.state
    const secondsDegrees = ((second / 60) * 360) + 90;
    const minDegrees = ((min / 60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;
    return (
      <div className="clock">
        <span><img src={logo} className="App-logo" alt="logo" /></span>
        <div className="clock-face">
          <div className="hand hour-hand" style={{transform: `rotate(${hourDegrees}deg)`}}></div>
          <div className="hand min-hand" style={{transform: `rotate(${minDegrees}deg)`}}></div>
          <div className="hand second-hand" style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const date = new Date();
      this.setState({
        second: date.getSeconds(),
        min: date.getMinutes(),
        hour: date.getHours()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
}