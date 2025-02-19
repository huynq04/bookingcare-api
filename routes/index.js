const express = require('express');
const router = express.Router();

router.use('/api/user', require('./userRoute'));
router.use('/api/doctor', require('./doctorRoute'));
router.use('/api/patient', require('./patientRoute'));
router.use('/api/specialty', require('./specialtyRoute'));
router.use('/api/clinic', require('./clinicRoute'));

module.exports = router;
