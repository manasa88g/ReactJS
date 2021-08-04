// Write your code here.
import {Component} from 'react'

import './index.css'
import ThumbnailsList from '../ThumbnailsList'

class Gallery extends Component {
  state = {photoId: 0}

  displaySelectedImage = id => {
    this.setState({photoId: id})
  }

  render() {
    const {photoId} = this.state
    const {photosData} = this.props
    const {imageUrl, imageAltText} = photosData[photoId]

    return (
      <div className="bg-container">
        <div className="gallery-container">
          <img src={imageUrl} alt={imageAltText} className="selected-image" />
          <h1 className="main-heading">Nature Photography</h1>
          <div className="images-container">
            <p className="heading">Nature Photography by Rahul</p>
            <ul className="thumbnail-image-container">
              {photosData.map(eachPhoto => (
                <ThumbnailsList
                  photoData={eachPhoto}
                  key={eachPhoto.id}
                  displaySelectedImage={this.displaySelectedImage}
                  selectedThumbnail={photoId}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
