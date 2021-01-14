const faker = require('faker');
const { Gallery } = require('./index.js');


const randomImageUrl = 'https://loremflickr.com/1080/720/real_estate';

const galleries = [];

for (let i = 0; i < 20; i++) {
  galleries.push({
    id: i + 1,
    photoName: faker.random.words(),
    photoUrl: randomImageUrl,
    photoDescription: faker.lorem.paragraph(),
  });
}

for (let i = 0; i < 100; i++) {
  const gallerymodel = {
    id: i + 1,
    title: faker.lorem.sentence(),
    reviews: Math.floor(Math.random() * (50 - 10) + 10),
    rating: Math.random() * (5.0 - 4.0) + 4,
    isSuperhost: faker.random.boolean(),
    location: {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
    },
    gallery: galleries,
  };
  Gallery.insertMany(gallerymodel);
}
