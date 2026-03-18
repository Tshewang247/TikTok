const express = require('express');
const router = express.Router();
const {
  getAllVideos, getVideoById, createVideo, updateVideo,
  deleteVideo, getVideoComments, getVideoLikes, likeVideo, unlikeVideo
} = require('../controllers/videoController');

router.get('/',               getAllVideos);
router.post('/',              createVideo);
router.get('/:id',            getVideoById);
router.put('/:id',            updateVideo);
router.delete('/:id',         deleteVideo);
router.get('/:id/comments',   getVideoComments);
router.get('/:id/likes',      getVideoLikes);
router.post('/:id/likes',     likeVideo);
router.delete('/:id/likes',   unlikeVideo);

module.exports = router;