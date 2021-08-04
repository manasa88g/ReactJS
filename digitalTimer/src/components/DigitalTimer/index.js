// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    defaultTime: 25,
    timerValue: 25 * 60,
    isTimerOn: false,
    isDisabled: false,
  }

  onIncrementTimerValue = () => {
    this.setState(prevState => ({
      defaultTime: prevState.defaultTime + 1,
      timerValue: prevState.timerValue + 1 * 60,
    }))
  }

  onDecrementTimerValue = () => {
    this.setState(prevState => ({
      defaultTime: prevState.defaultTime - 1,
      timerValue: prevState.timerValue - 1 * 60,
    }))
  }

  getTimerValue = () => {
    const {timerValue} = this.state
    const timerMin = `0${Math.floor(timerValue / 60)}`
    const timerSec = `0${timerValue % 60}`
    const timerText = `${timerMin.slice(-2)}:${timerSec.slice(-2)}`
    return timerText
  }

  decreaseTimer = () => {
    this.setState(prevState => ({timerValue: prevState.timerValue - 1}))
  }

  onClickStartTimer = () => {
    this.timerId = setInterval(() => {
      this.decreaseTimer()
    }, 1000)
    console.log(this.timerId)
    this.setState({isTimerOn: true, isDisabled: true})
  }

  onClickPauseTimer = () => {
    clearInterval(this.timerId)

    this.setState({isTimerOn: false})
  }

  onClickResetTimer = () => {
    clearInterval(this.timerId)
    const {defaultTime} = this.state
    const newTimerValue = defaultTime * 60
    this.setState({
      timerValue: newTimerValue,
      isTimerOn: false,
      isDisabled: false,
    })
  }

  updateTimerCompletion = () => {
    clearInterval(this.timerId)
    this.setState({isTimerOn: false, timerValue: this.defaultTime * 60})
  }

  render() {
    const {defaultTime, timerValue, isTimerOn, isDisabled} = this.state
    const timerText = this.getTimerValue()
    const text = isTimerOn ? 'Running' : 'Paused'
    if (timerValue === 0) {
      this.updateTimerCompletion()
    }
    let playPauseItem

    if (isTimerOn) {
      playPauseItem = (
        <button
          className="play-reset-button"
          type="button"
          onClick={this.onClickPauseTimer}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
            alt="pause icon"
            className="play-image"
          />
          <span className="play-text">Pause</span>
        </button>
      )
    } else {
      playPauseItem = (
        <button
          className="play-reset-button"
          type="button"
          onClick={this.onClickStartTimer}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
            className="play-image"
          />
          <span className="play-text">Start</span>
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="bottom-container">
          <div className="timer-bg-container">
            <div className="timer-text-container">
              <h1 className="timer" testid="timer">
                {timerText}
              </h1>
              <p className="status">{text}</p>
            </div>
          </div>
          <div className="options-container">
            <div className="flex-row-container">
              {playPauseItem}
              <button
                className="play-reset-button"
                type="button"
                onClick={this.onClickResetTimer}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="play-image"
                />
                <span className="play-text">Reset</span>
              </button>
            </div>
            <p className="text">Set Timer Limit</p>
            <div className="flex-row-container">
              <button
                type="button"
                className="button"
                disabled={isDisabled}
                onClick={this.onDecrementTimerValue}
              >
                -
              </button>
              <p className="timer-value">{defaultTime}</p>
              <button
                type="button"
                className="button"
                disabled={isDisabled}
                onClick={this.onIncrementTimerValue}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
