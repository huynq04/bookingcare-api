const { patientService } = require('../services/patientService');

const postBookAppointment = async (req, res) => {
  try {
    let response = await patientService.postBookAppointment(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const postVerifyBookAppointment = async (req, res) => {
  try {
    let response = await patientService.postVerifyBookAppointment(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

module.exports = {
  postBookAppointment,
  postVerifyBookAppointment,
};
