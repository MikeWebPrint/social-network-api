const connection = require('../config/connection');
const { User } = require('../models/');
const { Thought } = require('../models/Thought');
const { getRandomName, getRandomThoughts, getEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(5);
  
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getEmail(username);

    users.push({
      username,
      email,
      thoughts
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
