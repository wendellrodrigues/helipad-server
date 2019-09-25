const express   = require('express');
const router    = express.Router();
const helpers   = require('../helpers/helpers');


/**
 * Sends a test message
 * @route   /routes/test
 */
router
  .route('/test')
  .get(
    helpers.sendTestMsg
  );






module.exports = router;