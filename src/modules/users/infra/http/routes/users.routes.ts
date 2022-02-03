import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { AuthenticatedUserController } from '../controllers/AuthenticatedUserController';
import { CreateUserController } from '../controllers/CreateUserController';
import { SendForgotPasswordEmailController } from '../controllers/SendForgotPasswordEmailController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticatedUserController = new AuthenticatedUserController();
const sendForgotPassword = new SendForgotPasswordEmailController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(32),
    },
  }),
  authenticatedUserController.handle,
);

usersRoutes.post(
  '/criar',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(32),
    },
  }),
  createUserController.handle,
);

usersRoutes.post(
  '/perdeu',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  sendForgotPassword.handle,
);

export { usersRoutes };
