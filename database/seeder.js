const faker = require('faker');
const { Gallery } = require('./index.js');

// const randomImageUrl = 'https://loremflickr.com/1080/720/real_estate';

const getGalleries = () => {
  const galleries = [];
  const randomLength = Math.floor(Math.random() * (50 - 15) + 15);
  for (let i = 0; i < randomLength; i += 1) {
    galleries.push({
      _id: i + 1,
      photoName: faker.random.words(),
      photoUrl: 'https://loremflickr.com/1080/720/real_estate',
      photoDescription: faker.lorem.paragraph(),
    });
  }
  return galleries;
};

const getSampleData = () => {
  for (let i = 0; i < 100; i += 1) {
    const gallerymodel = {
      _id: i + 1,
      title: faker.lorem.sentence(),
      reviews: Math.floor(Math.random() * (50 - 10) + 10),
      rating: Math.random() * (5.0 - 4.0) + 4,
      isSuperhost: faker.random.boolean(),
      location: {
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
      },
      gallery: getGalleries(),
    };
    Gallery.create(gallerymodel);
  }
};

getSampleData();
