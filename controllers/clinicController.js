const { clinicService } = require('../services/clinicService.js');

const createClinic = async (req, res) => {
  try {
    let response = await clinicService.createClinic(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

const getAllClinics = async (req, res) => {
  try {
    let response = await clinicService.getAllClinics();
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

const getDetailClinicById = async (req, res) => {
  try {
    let response = await clinicService.getDetailClinicById(req.query.id);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

module.exports = {
  createClinic,
  getAllClinics,
  getDetailClinicById,
};
