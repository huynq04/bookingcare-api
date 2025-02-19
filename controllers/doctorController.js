const { doctorService } = require('../services/doctorService');

const getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: 'Error form server...',
    });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const postInfoDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInfoDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const getDetailDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const bulkCreateSchedule = async (req, res) => {
  try {
    let response = await doctorService.bulkCreateSchedule(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const getScheduleDoctorByDate = async (req, res) => {
  try {
    let response = await doctorService.getScheduleDoctorByDate(req.query.doctorId, req.query.date);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};
const getExtraInfoDoctorById = async (req, res) => {
  try {
    let response = await doctorService.getExtraInfoDoctorById(req.query.doctorId);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const getProfileDoctorById = async (req, res) => {
  try {
    let response = await doctorService.getProfileDoctorById(req.query.doctorId);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const getListPatientForDoctor = async (req, res) => {
  try {
    let response = await doctorService.getListPatientForDoctor(req.query.doctorId, req.query.date);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const sendRemedy = async (req, res) => {
  try {
    let response = await doctorService.sendRemedy(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

module.exports = {
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
};
