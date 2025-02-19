const {
  handleUserLogin,
  getAllUsers,
  createNewUser,
  updateUserData,
  deleteUser,
  getAllCodeService,
} = require('../services/userService');

const handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(500).json({
      errCode: 1,
      message: 'Missing input parameter!',
    });
  }
  let userData = await handleUserLogin(email, password);
  res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const handleGetAllUsers = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
      users: [],
    });
  }

  let users = await getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OK',
    users,
  });
};

const handleCreateNewUser = async (req, res) => {
  let message = await createNewUser(req.body);
  res.status(200).json(message);
};

const handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await updateUserData(data);
  res.status(200).json(message);
};

const handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required paramesters !',
    });
  }
  let message = await deleteUser(req.body.id);
  return res.status(200).json(message);
};

const getAllCode = async (req, res) => {
  try {
    let data = await getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

module.exports = {
  handleLogin,
  handleGetAllUsers,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
  getAllCode,
};
