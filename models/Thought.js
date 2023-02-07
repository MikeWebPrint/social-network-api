const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);









const Thought = model('thought', thoughtSchema);


// module.exports = { Thought, reactionSchema };
module.exports = Thought;
