const { specialtyService } = require('../services/specialtyService');

const createSpecialty = async (req, res) => {
  try {
    let response = await specialtyService.SpecialtyService.createSpecialty(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

const getAllSpecialties = async (req, res) => {
  try {
    let response = await specialtyService.getAllSpecialties();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

const getDetailSpecialtyById = async (req, res) => {
  try {
    let response = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server',
    });
  }
};

module.exports = {
  createSpecialty,
  getAllSpecialties,
  getDetailSpecialtyById,
};
