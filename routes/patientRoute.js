const express = require('express');
const router = express.Router();
const { postBookAppointment, postVerifyBookAppointment } = require('../controllers/patientController');

router.post('/patient-book-appointment', postBookAppointment);
router.post('/verify-book-appointment', postVerifyBookAppointment);

module.exports = router;
