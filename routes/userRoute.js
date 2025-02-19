const express = require('express');
const {
  handleLogin,
  handleGetAllUsers,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
  getAllCode,
} = require('../controllers/userController');

const router = express.Router();

router.post('/login', handleLogin);
router.get('/get-all-users', handleGetAllUsers); // api get all user
router.post('/create-new-user', handleCreateNewUser); // add user
router.put('/edit-user', handleEditUser);
router.delete('/delete-user', handleDeleteUser);
router.get('/allcode', getAllCode);

module.exports = router;
