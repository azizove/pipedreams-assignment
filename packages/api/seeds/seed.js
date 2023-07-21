const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: 'mongodb://localhost:27017/staff',
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
    path.resolve('./seeds/data')
  );
console.log(collections);
seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log('Error', err);
  });