const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 5000;

let MONGODB_URI =
  'mongodb://heroku_z72c0pbl:pur17kt1j8ao0mo5n737q4loeo@ds261429.mlab.com:61429/heroku_z72c0pbl';
mongoose.connect(MONGODB_URI, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

let userSchema = new mongoose.Schema({
  name: String,
  zone: String,
  region: String,
});

const User = mongoose.model('User', userSchema);
const seed = [
  { name: 'Bob', zone: 'Beta', region: 'South-East' },
  { name: 'Sue', zone: 'Echo', region: 'North-East' },
  { name: 'Mark', zone: 'Zulu', region: 'East-East' },
];
function seedDB() {
  User.deleteMany({}, (err, success) => {
    if (!err) {
      seed.forEach((user) =>
        User.create(user, (err) => {
          if (err) {
            console.log(err);
          }
        })
      );
    }
  });
}

seedDB();

// console.log('DATA',seed);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test', (req, res) => {
    User.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('DATA', data);
        res.render('pages/test', { data: data });
      }
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
