const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      default: new Obl
    },

  }
)

const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
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

module.exports = { thoughtSchema, reactionSchema };
