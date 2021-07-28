// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {name, issuesCount, starsCount, forksCount, avatarUrl} = itemDetails
  return (
    <div className="repository-item-container">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="repository-name">{name}</h1>
      <div className="count-details">
        <div className="count-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="count-image"
          />
          <p className="cont-text">{starsCount} stars</p>
        </div>
        <div className="count-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="count-image"
          />
          <p className="cont-text">{forksCount} forks</p>
        </div>
        <div className="count-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open-issues"
            className="count-image"
          />
          <p className="cont-text">{issuesCount} open issues</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
