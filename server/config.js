const config = {
  db: {
    production: process.env.MONGODB_URI, // on heroku
    development: 'mongodb://localhost/generic001',
    test: 'mongodb://localhost/propertydb-test',
  },
};

module.exports = config;
