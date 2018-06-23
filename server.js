const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var articlesController = require('./server/controllers/article-controller');
var router = new express.Router();
router.get('/api/saved', articledController.find);
router.post('/api/saved', articlesController.insert);
router.delete('/api/saved/:id', articlesController.delete);
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.use(router);

const db = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';
mongoose.connect(
  db,
  function(error) {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected!');
    }
  }
);

app.listen(PORT, function() {
  console.log(`Server now on port ${PORT}`);
});
