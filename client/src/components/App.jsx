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
      galleria: {},
      show: false,
      picture: null,
      allImages: [],
      loading: true,
    };
    this.getGalleryById = this.getGalleryById.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.handleModalClick = this.handleModalClick(this);
    // this.handleLeftButtonClick = this.handleLeftButtonClick(this);
    // this.handleRightButtonClick = this.handleRightButtonClick(this);
  }

  componentDidMount() {
    const randomId = Math.floor(Math.random() * 100);
    this.getGalleryById(randomId);
  }

  // handleModalClick(photoId) {
  //   const { galleria } = this.state;
  //   const { gallery } = galleria;
  //   console.log(galleria);
  //   gallery.forEach((key) => {
  //     if (key._id === photoId) {
  //       this.setState({ picture: key._id });
  //     }
  //   });
  // }

  // handleLeftButtonClick(photoId) {
  //   const { galleria } = this.state;
  //   const { gallery } = galleria;
  //   gallery.forEach((key) => {
  //     if (key._id === photoId) {
  //       this.setState({ picture: key._id - 1 });
  //     }
  //   });
  // }

  // handleRightButtonClick(photoId) {
  //   const { galleria } = this.state;
  //   const { gallery } = galleria;
  //   gallery.forEach((key) => {
  //     if (key._id === photoId) {
  //       this.setState({ picture: key._id + 1 });
  //     }
  //   });
  // }

  getGalleryById(id) {
    axios.get(`http://localhost:3017/api/galleries/${id}`)
      .then((res) => {
        this.setState({ galleria: res.data[0] }, () => {
          const { galleria, loading } = this.state;
          const { gallery } = galleria;
          this.setState({ allImages: gallery, loading: !loading });
        });
        console.log(this.state);
        // console.log('resdata', res.data);
        // const galleria = res.data;
        // const allImages = galleria.gallery;
        // this.setState({ galleria, allImages });
      })
      .catch((err) => {
        throw (err);
      });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const {
      galleria, show, picture, allImages, loading,
    } = this.state;
    // console.log(allImages);
    // console.log(galleria.gallery);
    const renderModal = show
      ? <Modal featurePicture={picture} show={show} hideModal={this.hideModal} />
      : (<></>);
    const plswork = loading
      ? (<div>Loading....</div>)
      : (
        <div>
          <Header galleria={galleria} />
          <Gallery allImages={allImages} showModal={this.showModal} />
        </div>
      );
    return (
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
        {/* <Header galleria={galleria} />
        <Gallery allImages={allImages} showModal={this.showModal} /> */}
        {plswork}
        {renderModal}
      </div>
    );
  }
}

export default App;
