const express = require('express');
const router = express.Router();
const { createSpecialty, getAllSpecialties, getDetailSpecialtyById } = require('../controllers/specialtyController');

router.post('/create-new-specialty', createSpecialty);
router.get('/get-all-specialty', getAllSpecialties);
router.get('/get-detail-specialty-by-id', getDetailSpecialtyById);

module.exports = router;
