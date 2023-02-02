const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController');

// /api/users
// Get all users

// /api/users
// Create a user


router.route('/').get(getUsers).post(createUser);
// router.get('/', (req,res) => {
//   res.send('Users Home')
// })

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);
// .put(updateUser)
// Get one user
// router.route('/:userId').get(getSingleUser);

// /api/users/:userId
// Delete one user

// /api/users
// Update a user



// add and remove friends





module.exports = router;
