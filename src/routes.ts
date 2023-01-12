import express from 'express';
import UserController from './controllers/user.controller';
import JwtMiddleware from './middlewares/jwt.middleware';

const routes = express.Router();

routes.get('/user', JwtMiddleware, UserController.list);
routes.post('/user', JwtMiddleware, UserController.create);

export default routes;
