import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleria: {
        _id: 2,
        title: 'Natus reiciendis similique ratione aspernatur minus.',
        reviews: 15,
        rating: 4.6620732333299735,
        isSuperhost: true,
        __v: 0,
        gallery: [
          {
            _id: 1,
            photoName: 'Towels Infrastructure bus',
            photoUrl: 'https://loremflickr.com/1080/720/real_estate',
            photoDescription: 'Aut eius eos autem temporibus non iste eum facere. A autem quasi reprehenderit sit. Soluta sed ut eius sed blanditiis sit. Iusto corporis praesentium sed. Est quam vitae cumque atque sed. Eveniet repellendus rerum vitae ea eum assumenda ut.',
          },
          {
            _id: 2,
            photoName: 'systems quantifying',
            photoUrl: 'https://loremflickr.com/1080/720/real_estate',
            photoDescription: 'Eum pariatur vero laboriosam. Pariatur impedit maiores. Consectetur qui non adipisci est voluptates.',
          },
          {
            _id: 3,
            photoName: 'XSS Avon Officer',
            photoUrl: 'https://loremflickr.com/1080/720/real_estate',
            photoDescription: 'Placeat quae doloribus alias omnis suscipit qui. Vel sed et ut molestiae. Sed ut incidunt doloribus ut odio molestiae et laudantium. Rem eius qui pariatur a et id eos ullam. Quas quasi labore blanditiis est blanditiis dolorum odio.',
          },
          {
            _id: 4,
            photoName: 'Shoes FTP exploit',
            photoUrl: 'https://loremflickr.com/1080/720/real_estate',
            photoDescription: 'Reiciendis consequatur optio facilis non. Ab vel et quidem totam est iure commodi ut. Maiores aut est cum eius quo quis consequatur alias. Voluptatibus qui aut eveniet et eveniet.',
          },
          {
            _id: 5,
            photoName: '24/7 District',
            photoUrl: 'https://loremflickr.com/1080/720/real_estate',
            photoDescription: 'Quis maxime veniam et. Reiciendis iusto rerum quod quod dignissimos quidem praesentium quas. Omnis tempora ut laborum dolor.',
          },
        ],
        location: {
          city: 'New Cyril',
          state: 'Montana',
          country: 'Nauru',
        },
      },

      isSuperHost: false,
    };
    this.getGalleryById = this.getGalleryById.bind(this);
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
    const { galleria } = this.state;
    return (
      <List galleria={galleria} />
    );
  }
}

export default App;
