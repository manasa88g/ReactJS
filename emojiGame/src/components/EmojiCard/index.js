// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    selectedEmoji(id)
  }

  return (
    <li className="emoji-card-container">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emoji"
        onClick={onClickEmoji}
      />
    </li>
  )
}

export default EmojiCard
