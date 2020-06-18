import express from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const commentRoute = express.Router();

const { verifyToken } = middlewares;

const {
  commentController: { createComment, getAllComments, updateComment, deleteComment },
} = controllers;

// Comment Routes
commentRoute.post('/', verifyToken, createComment);

commentRoute.get('/', getAllComments);

commentRoute.patch('/comment_id', verifyToken, updateComment);

commentRoute.delete('/comment_id', verifyToken, deleteComment);

export default commentRoute;
