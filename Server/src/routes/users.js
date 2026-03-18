const express = require('express');
const router = express.Router();
const {
  getAllUsers, getUserById, createUser, updateUser, deleteUser,
  getUserVideos, getUserFollowers, followUser, unfollowUser
} = require('../controllers/userController');

router.get('/',                  getAllUsers);
router.post('/',                 createUser);
router.get('/:id',               getUserById);
router.put('/:id',               updateUser);
router.delete('/:id',            deleteUser);
router.get('/:id/videos',        getUserVideos);
router.get('/:id/followers',     getUserFollowers);
router.post('/:id/followers',    followUser);
router.delete('/:id/followers',  unfollowUser);

module.exports = router;