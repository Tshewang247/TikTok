const { dataStore } = require('../models');

// GET all comments
const getAllComments = (req, res) => {
  res.status(200).json(dataStore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
  const comment = dataStore.comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).json({ error: 'Comment not found' });
  res.status(200).json(comment);
};

// POST create a comment
const createComment = (req, res) => {
  const { text, userId, videoId } = req.body;
  if (!text || !userId || !videoId) {
    return res.status(400).json({ error: 'text, userId, and videoId are required' });
  }

  const user = dataStore.users.find(u => u.id === parseInt(userId));
  const video = dataStore.videos.find(v => v.id === parseInt(videoId));
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (!video) return res.status(404).json({ error: 'Video not found' });

  const newComment = {
    id: dataStore.comments.length + 1,
    text,
    userId: parseInt(userId),
    videoId: parseInt(videoId),
    likes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  dataStore.comments.push(newComment);
  res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
  const commentIndex = dataStore.comments.findIndex(c => c.id === parseInt(req.params.id));
  if (commentIndex === -1) return res.status(404).json({ error: 'Comment not found' });

  const { text } = req.body;
  const comment = dataStore.comments[commentIndex];
  if (text) comment.text = text;
  comment.updatedAt = new Date().toISOString();

  res.status(200).json(comment);
};

// DELETE a comment
const deleteComment = (req, res) => {
  const commentIndex = dataStore.comments.findIndex(c => c.id === parseInt(req.params.id));
  if (commentIndex === -1) return res.status(404).json({ error: 'Comment not found' });

  dataStore.comments.splice(commentIndex, 1);
  res.status(204).end();
};

// GET comment likes
const getCommentLikes = (req, res) => {
  const comment = dataStore.comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).json({ error: 'Comment not found' });

  const likedUsers = comment.likes.map(id => dataStore.users.find(u => u.id === id)).filter(Boolean);
  res.status(200).json(likedUsers);
};

// POST like a comment
const likeComment = (req, res) => {
  const comment = dataStore.comments.find(c => c.id === parseInt(req.params.id));
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId is required' });
  if (!comment) return res.status(404).json({ error: 'Comment not found' });

  const userIdInt = parseInt(userId);
  if (comment.likes.includes(userIdInt)) {
    return res.status(409).json({ error: 'Already liked this comment' });
  }

  comment.likes.push(userIdInt);
  res.status(201).json({ message: 'Comment liked successfully' });
};

// DELETE unlike a comment
const unlikeComment = (req, res) => {
  const comment = dataStore.comments.find(c => c.id === parseInt(req.params.id));
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId is required' });
  if (!comment) return res.status(404).json({ error: 'Comment not found' });

  const likeIndex = comment.likes.indexOf(parseInt(userId));
  if (likeIndex === -1) return res.status(404).json({ error: 'Like not found' });

  comment.likes.splice(likeIndex, 1);
  res.status(204).end();
};

module.exports = {
  getAllComments, getCommentById, createComment,
  updateComment, deleteComment, getCommentLikes,
  likeComment, unlikeComment
};