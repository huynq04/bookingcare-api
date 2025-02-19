const express = require('express');
const router = express.Router();
const {
  getTopDoctorHome,
  getAllDoctors,
  postInfoDoctor,
  getDetailDoctorById,
  bulkCreateSchedule,
  getScheduleDoctorByDate,
  getExtraInfoDoctorById,
  getProfileDoctorById,
  getListPatientForDoctor,
  sendRemedy,
} = require('../controllers/doctorController');

router.get('/get-all-doctors', getAllDoctors);
router.get('/top-doctor-home', getTopDoctorHome);
router.post('/save-info-doctor', postInfoDoctor);
router.get('/get-detail-doctor-by-id', getDetailDoctorById);
router.post('/bulk-create-schedule', bulkCreateSchedule);
router.get('/get-schedule-doctor-by-date', getScheduleDoctorByDate);
router.get('/get-extra-info-doctor-by-id', getExtraInfoDoctorById);
router.get('/get-profile-doctor-by-id', getProfileDoctorById);
router.get('/get-list-patient-for-doctor', getListPatientForDoctor);
router.post('/send-remedy', sendRemedy);

module.exports = router;
