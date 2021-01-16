const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photogallery', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB!');
// });

const gallerySchema = new mongoose.Schema({
  _id: Number,
  title: String,
  reviews: Number,
  rating: Number,
  isSuperhost: Boolean,
  location: {
    city: String,
    state: String,
    country: String,
  },
  gallery: [
    {
      _id: Number,
      photoName: String,
      photoUrl: String,
      photoDescription: String,
    },
  ],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = {
  Gallery,
};
