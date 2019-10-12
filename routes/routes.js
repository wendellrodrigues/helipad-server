const express   = require('express');
const router    = express.Router();
const helpers   = require('../helpers/helpers');



/**
 * Sends a test message
 * @route   /routes/test
 */
router
  .route('/test')
  .post(
    helpers.sendTestMsg
  );


router
  .route('/timeToLand')
  .post(
    helpers.getTimeToLand
  )

router
    .route('/parkedTime')
    .post(
      helpers.getParkedTime
    )

module.exports = router;