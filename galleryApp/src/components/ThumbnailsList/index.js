// Write your code here.
import './index.css'

const ThumbnailsList = props => {
  const {photoData, selectedThumbnail, displaySelectedImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = photoData
  let displayThumbnail

  const selectImage = () => {
    displaySelectedImage(id)
  }

  if (selectedThumbnail === id) {
    displayThumbnail = (
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="selected-thumbnail"
        onClick={selectImage}
      />
    )
  } else {
    displayThumbnail = (
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="thumbnail-image"
        onClick={selectImage}
      />
    )
  }

  return <li className="thumbnail-image-container">{displayThumbnail}</li>
}

export default ThumbnailsList
