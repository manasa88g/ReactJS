// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, heads: 0, tails: 0}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="coin-toss-container">
        <div className="game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-details">Total: {total}</p>
            <p className="count-details">Heads: {heads}</p>
            <p className="count-details">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
