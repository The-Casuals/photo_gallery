const mongoose = require('mongoose');
// 'mongodb://localhost/photogallery'
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;

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
      isVerified: Boolean,
      hasDescription: Boolean,
    },
  ],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = {
  Gallery,
  connection,
};
