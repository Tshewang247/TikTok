const express = require('express');
const router = express.Router();
const {
  getAllComments, getCommentById, createComment,
  updateComment, deleteComment, getCommentLikes,
  likeComment, unlikeComment
} = require('../controllers/commentController');

router.get('/',          getAllComments);
router.post('/',         createComment);
router.get('/:id',       getCommentById);
router.put('/:id',       updateComment);
router.delete('/:id',    deleteComment);
router.get('/:id/likes', getCommentLikes);
router.post('/:id/likes',   likeComment);
router.delete('/:id/likes', unlikeComment);

module.exports = router;