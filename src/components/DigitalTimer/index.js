// Write your code here
import {Component} from 'react'

class DigitalTimer extends Component {
  state = {isTimerOn: false, setTimer: 25, time: 0}

  updateTime = () => {
    this.setState(prev => ({time: prev.time - 1}))
  }

  onStart = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerOn: true})
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerOn: false})
  }

  onDecrement = () => {
    this.setState(prev => ({setTimer: prev.setTimer - 1}))
  }

  onIncrement = () => {
    this.setState(prev => ({setTimer: prev.setTimer + 1}))
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      isTimerOn: false,
      setTimer: 25,
      time: 0,
    })
  }

  timerInSeconds = () => {
    const {time} = this.state
    const seconds = 60 + (time % 60)
    if (seconds === 60) {
      return `00`
    }
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  timerInMinutes = () => {
    const {time, setTimer} = this.state
    const minutes = setTimer + Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerOn, setTimer} = this.state

    const timer = `${this.timerInMinutes()}:${this.timerInSeconds()}`

    return (
      <div>
        <h1>Digital Timer</h1>
        <div>
          <div>
            <div>
              <h1>{timer}</h1>
              <p>{isTimerOn ? 'Running' : 'Paused'}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              type="button"
              onClick={isTimerOn ? this.onStop : this.onStart}
            >
              <img
                src={
                  isTimerOn
                    ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                }
                alt={isTimerOn ? 'pause icon' : 'play icon'}
              />
              <p>{isTimerOn ? 'Pause' : 'start'}</p>
            </button>
            <button type="button" onClick={this.onReset}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
              />
              <p>Reset</p>
            </button>
          </div>
          <p>Set Timer limit</p>
          <div>
            <button
              type="button"
              onClick={this.onDecrement}
              disabled={isTimerOn}
            >
              -
            </button>
            <p>{setTimer}</p>
            <button
              type="button"
              onClick={this.onIncrement}
              disabled={isTimerOn}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
