const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought
} = require('../../controllers/thoughtController');

// /api/applications
// router.route('/').get(getApplications).post(createApplication);
// router.route('/').
// /api/applications/:applicationId
// router
  // .route('/:applicationId')
  // .get(getSingleApplication)
  // .put(updateApplication)
  // .delete(deleteApplication);


  router.route('/').get(getThoughts).post(createThought);

  router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/applications/:applicationId/tags
// router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
// router.route('/:applicationId/tags/:tagId').delete(removeTag);


// create and delete reactions to thoughts


module.exports = router;
