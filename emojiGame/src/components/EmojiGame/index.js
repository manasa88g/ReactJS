/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameCard: true,
    winOrLose: false,
    selectedEmojiList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  selectedEmoji = id => {
    const {selectedEmojiList, topScore, score} = this.state
    console.log(selectedEmojiList.includes(id))
    let newEmojiList

    if (selectedEmojiList.includes(id)) {
      console.log(score, id)
      if (score > topScore) {
        this.setState({
          topScore: score,
          isGameCard: false,
          winOrLose: false,
        })
      } else {
        this.setState({
          isGameCard: false,
          winOrLose: false,
        })
      }
    } else {
      newEmojiList = [...selectedEmojiList, id]
      if (score === 11) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          selectedEmojiList: newEmojiList,
          topScore: 12,
          isGameCard: false,
          winOrLose: true,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          selectedEmojiList: newEmojiList,
        }))
      }
    }

    console.log(newEmojiList)
  }

  playAgain = () => {
    this.setState({isGameCard: true, score: 0, selectedEmojiList: []})
  }

  renderEmojis = () => {
    const {selectedEmojiList} = this.state
    const shuffledEmojiList = this.shuffledEmojisList()
    console.log(selectedEmojiList)
    return (
      <ul className="emojis-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            selectedEmoji={this.selectedEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameCard, winOrLose} = this.state

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameCard={isGameCard} />
        <div className="bottom-container">
          {isGameCard ? (
            this.renderEmojis()
          ) : (
            <WinOrLoseCard
              winOrLose={winOrLose}
              score={score}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
