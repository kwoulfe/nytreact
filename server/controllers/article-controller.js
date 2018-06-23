var Article = require('../models/Article');

module.exports = {
  find: function(req, res) {
    console.log('Fetching from DB');
    Article.find()
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.jason(err);
      });
  },
  insert: function(req, res) {
    console.log('Adding article to DB');
    console.log('req.body: ', req.body);
    Article.create(req.body)
      .then(function(doc) {
        res.json(doc);
        console.log('doc: ', doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  delete: function(req, res) {
    console.log('Deleting from DB');
    Article.remove({
      _id: req.params.id
    })
      .then(function(doc) {
        res.json(doc);
        console.log('doc: ', doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
