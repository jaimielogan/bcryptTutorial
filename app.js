const bcrypt = require('bcrypt');

const user = require('../db/user');

bcrypt.genSalt(10, (err, salt) => {
  console.log("salt:", salt);
  bcrypt.hash('hello', salt, (err,hash) => {
    console.log("hash:", hash);
    user('user').insert({
      username: 'username',
      password: hash
    });
  });
});

bcrypt.compare('hello', '$2a$10$U9R9ewTOGPMAWHMGxXOmhONplQeHq3zuMSC3B69I2PS.EjvOr6FMO', (err,isMatch) => {
  console.log('is a match:', isMatch);
});

//-------------------------------------------//

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash('hello anu!', salt, (err,hash) => {
//     console.log("hash:", hash);
//   });
// });
//
//
// bcrypt.compare('Go Broncos!', '$2a$10$aVEgnpjfVwS6/9HrlQrVH./4lsukO1QjyWUZkTqwQ8GuXHsIh5kF2', (err, isMatch) => {
//   console.log('is a match:', isMatch);
// });
