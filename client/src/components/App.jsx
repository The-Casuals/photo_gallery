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
      galleria: [],
      show: false,
    };
    this.getGalleryById = this.getGalleryById.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.getGalleryById(2);
  }

  getGalleryById(id) {
    axios.get(`/api/galleries/${id}`)
      .then((res) => {
        this.setState({ galleria: res.data });
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
    const { galleria, show } = this.state;
    const renderModal = show
      ? (galleria.map(
        (sample) => <Modal galleria={sample} show={show} hideModal={this.hideModal} />,
      ))
      : (<></>);
    return (
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
        {galleria.map((sample) => <Header galleria={sample} />)}
        {galleria.map(
          // eslint-disable-next-line max-len
          (sample) => <Gallery galleria={sample} showModal={this.showModal} />,
        )}
        {renderModal}
      </div>
    );
  }
}

export default App;
