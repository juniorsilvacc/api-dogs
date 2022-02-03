import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(32),
    },
  }),
  createUserController.handle,
);

export { usersRoutes };
