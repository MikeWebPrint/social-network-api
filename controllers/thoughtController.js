const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models/Thought');

module.exports = {
    // create a new thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) => 
{        if (!thought)
          {res.status(404).json({ message: 'No thought with that ID' })}
          else {res.json(thought)};}
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        (!thought)
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({message: 'Thought deleted'})
      )
      .catch((err) => res.status(500).json(err));
  },
};


