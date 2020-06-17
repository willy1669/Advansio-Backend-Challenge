import express from 'express';
import controllers from '../controllers/index.js';
import middlewares from '../middlewares/index.js';

const userRoute = express.Router();

const { loginMiddleware, registerMiddleware } = middlewares;

const {
  userController: { login, register },
} = controllers;

userRoute.post('/register', registerMiddleware, register);

userRoute.post('/login', loginMiddleware, login);

export default userRoute;
