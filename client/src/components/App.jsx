import React from 'react';
import axios from 'axios';
import List from './List';
import Header from './Header';
import Gallery from './Gallery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleria: [],
    };
    this.getGalleryById = this.getGalleryById.bind(this);
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

  render() {
    // const { galleria } = this.state;
    return (
      <div>
        {this.state.galleria.map(sample => <Header galleria={sample} />)}
        <Gallery />
        {/* {this.state.galleria.map(sample => <List galleria={sample} />)} */}
      </div>
    );
  }
}

export default App;
