const router = require('express').Router();
// const {
//   getApplications,
//   getSingleApplication,
//   createApplication,
//   updateApplication,
//   deleteApplication,
//   addTag,
//   removeTag,
// } = require('../../controllers/appController');

// /api/applications
// router.route('/').get(getApplications).post(createApplication);
router.route('/').
// /api/applications/:applicationId
router
  // .route('/:applicationId')
  // .get(getSingleApplication)
  // .put(updateApplication)
  // .delete(deleteApplication);

  router.get('/', (req, res) => {
    res.send('Birds home page')
  })
// /api/applications/:applicationId/tags
// router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
// router.route('/:applicationId/tags/:tagId').delete(removeTag);


// create and delete reactions to thoughts


module.exports = router;
