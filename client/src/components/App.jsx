import React from 'react';
import axios from 'axios';
// import List from './List';
import Header from './Header';
import Gallery from './Gallery';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: this.props.listingId,
      galleria: {},
      show: false,
      picture: { _id: 1 },
      pictureIndex: 0,
      allImages: [],
      modalImage: null,
      loading: true,
    };
  }

  async componentDidMount() {
    await this.getGalleryById();

    this.getGalleryById = this.getGalleryById.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
  }

  handleModalClick(photoId) {
    const { allImages } = this.state;
    this.setState({ pictureIndex: photoId, modalImage: allImages[photoId] });
    this.showModal();
  }

  handleLeftButtonClick() {
    console.log('left fired');
    const { pictureIndex, allImages } = this.state;
    return pictureIndex === 0
      ? this.setState({ pictureIndex: allImages.length - 1, modalImage: allImages[allImages.length -1] })
      : this.setState({ pictureIndex: pictureIndex - 1, modalImage: allImages[pictureIndex - 1] });
  }

  handleRightButtonClick() {
    console.log('right fired');
    const { pictureIndex, allImages } = this.state;
    return pictureIndex === allImages.length - 1
      ? this.setState({ pictureIndex: 0, modalImage: allImages[0] })
      : this.setState({ pictureIndex: pictureIndex + 1, modalImage: allImages[pictureIndex + 1] });
    // this.setState({ pictureIndex: pictureIndex + 1, modalImage: allImages[pictureIndex + 1] });
  }

  getGalleryById() {
    axios.get(`/api/galleries/${this.state.listingId}`)
      .then((res) => {
        this.setState({ galleria: res.data[0] }, () => {
          const { galleria, loading } = this.state;
          const { gallery } = galleria;
          this.setState({ allImages: gallery, loading: !loading, modalImage: gallery[0] });
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    const { allImages } = this.state;
    this.setState({ show: false, modalImage: allImages[0], pictureIndex: 0 });
  }

  render() {
    const {
      galleria, show, picture, allImages, loading, pictureIndex, modalImage,
    } = this.state;
    const renderModal = show
      // eslint-disable-next-line max-len
      ? <Modal featurePicture={picture} show={show} hideModal={this.hideModal} onLeftClick={this.handleLeftButtonClick} onRightClick={this.handleRightButtonClick} allImages={allImages} pictureIndex={pictureIndex} modalImage={modalImage} />
      : (<></>);
    const loadingRender = loading
      ? (<div>Loading....</div>)
      : (
        <div>
          <Header galleria={galleria} featuredPicture={picture} />
          <Gallery allImages={allImages} showModal={this.showModal} onClick={this.handleModalClick} />
        </div>
      );
    return (
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
        {loadingRender}
        {renderModal}
      </div>
    );
  }
}

export default App;
