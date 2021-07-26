// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameCard} = props
  const showScore = (
    <div className="heading-container">
      <p className="score-details">Score: {score}</p>
      <p className="score-details">Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="navbar-container">
      <div className="heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="game logo"
          className="logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {isGameCard ? showScore : null}
    </div>
  )
}
export default NavBar
