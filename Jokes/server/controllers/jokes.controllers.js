const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.find()
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    console.log(req.body)
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.updateExistingJoke = (req, res) => {
    User.findAndUpdateJoke({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.deleteJoke = (req, res) => {
    User.deleteJoke({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
