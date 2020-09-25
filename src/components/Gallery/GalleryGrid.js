import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'

const DefaultImageWrapper = props => <a
    style={{width: '75%', padding: '2rem'}}
    key={props.id}
    href={props.fluid.srcSet}
    onClick={props.callback}
  >
  <Img fluid={props.fluid} />
</a>;

class GalleryComposition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      currentImage: 0,
      photos: props.photos.map(photo =>
        Object.assign({ srcSet: photo.fluid.srcSet })
      ),
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  openLightbox(photo, event) {
    event.preventDefault()
    this.setState({ lightbox: true, photo })
  }

  closeLightbox() {
    this.setState({ lightbox: false, currentImage: 0 })
  }

  render() {
    const { photos, layout, customModel } = this.props
    return (
      <>
        {
            layout ?
              customModel.map((model, i) => React.cloneElement(layout, {
                callback: this.openLightbox.bind(this, i),
                ...model.node
              })) :
              photos.map((photo, i) => (
                <DefaultImageWrapper
                  callback={this.openLightbox.bind(this, i)}
                  {...photo}
                />
              ))
        }
        <Lightbox
          backdropClosesModal
          enableKeyboardInput
          showImageCount
          imageCountSeparator={'/'}
          images={this.state.photos}
          preloadNextImage
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </>
    )
  }
}

export default GalleryComposition
