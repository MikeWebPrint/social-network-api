const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },

  }
)

module.exports = reactionSchema;