const express = require('express');
const router = express.Router();
const { createClinic, getAllClinics, getDetailClinicById } = require('../controllers/clinicController');

router.post('/create-new-clinic', createClinic);
router.get('/get-all-clinics', getAllClinics);
router.get('/get-detail-clinic-by-id', getDetailClinicById);

module.exports = router;
