// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, playAgain} = props
  const imageUrl = winOrLose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = winOrLose ? 'Won' : 'Lose'

  const scoreText = score === 12 ? 'Best' : ''

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="win-lose-container">
      <div className="image-container">
        <img src={imageUrl} alt={text} className="won-lose-image" />
      </div>
      <div className="text-container">
        <h1 className="game-status">You {text}</h1>
        <p className="score-text">{scoreText} Score</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
