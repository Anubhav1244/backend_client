const express= require('express');
const router = express.Router();
const { contactUs,feedback,getFeedback,makeAnEnquiry,newParticipants } = require('../Controller/adminController');

// Route for handling contact us form submission

router.post('/contactus', contactUs);
router.post('/feedback', feedback);
router.post('/makeanEnquiry',makeAnEnquiry );
router.get('/getFeedback', getFeedback);
router.post('/newParticipants', newParticipants);

// Export the router
module.exports = router;
