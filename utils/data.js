const { Schema } = require("mongoose");

const usernames = [
  'Walter',
  'Skyler',
  'Marie',
  'Hank',
  'Jesse',
  'Gus',
  'Tuco',
  'Todd',
  'Beaver',
  'Saul',
  'Mike'
];

const thoughtSamples = [
  "I like cheese",
  "Secret secrets are no fun, secret secrets hurt someone",
  "I've got friends in low places",
  "I can give you the silent treatment, too. Total silence. See how you like it. Complete silence",
  "Here lies Walter Fielding. He bought a house and it killed him.",
  "Jill, you remind me of my mother. She was the biggest whore in Alameda, and the greatest woman that ever lived.",
  "Fate has bought me to you. I am your density.",
  "It takes a tough man to make a tender chicken."
]

const possibleReactions = [
  'Agree Strongly',
  'Agree Somewhat',
  'Ambivelent',
  'Disagree',
  'Strongly Disagree'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

// Gets a random email
const getEmail = (name) => `${name}@test.com`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      // username: getRandomArrItem(usernames),
      description: getRandomArrItem(thoughtSamples),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: {
       type: Schema.Types.ObjectId,
       ref: 'User' 
      },
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getEmail };
