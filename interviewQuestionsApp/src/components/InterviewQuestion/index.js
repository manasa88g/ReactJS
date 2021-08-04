// Write you Code here
import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {isShowHide: false}

  onClickShowHide = () => {
    this.setState(prevState => ({isShowHide: !prevState.isShowHide}))
  }

  render() {
    const {isShowHide} = this.state
    const {questionData} = this.props
    const {questionText, answerText, language, difficultyLevel} = questionData

    const level = `${difficultyLevel.toLowerCase()}`
    const lang = `${language.toLowerCase()}`
    const buttonText = isShowHide ? 'Hide' : 'Show'
    const arrowImg = isShowHide
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
    const altText = isShowHide ? 'up arrow' : 'down arrow'

    return (
      <div className="question-container">
        <div className="tags-container">
          <span className={`${level} tag-text`}>{difficultyLevel}</span>
          <span className={`tag-text ${lang}`}>{language}</span>
        </div>
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="show-hide-button"
          onClick={this.onClickShowHide}
        >
          <p className="button-text">{buttonText}</p>
          <img src={arrowImg} alt={altText} className="arrow" />
        </button>
        {isShowHide ? <p className="answer">{answerText}</p> : null}
      </div>
    )
  }
}

export default InterviewQuestion
