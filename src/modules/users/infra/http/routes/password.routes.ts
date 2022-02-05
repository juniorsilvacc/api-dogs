import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ResetPasswordController } from '../controllers/ResetPasswordController';
import { SendForgotPasswordEmailController } from '../controllers/SendForgotPasswordEmailController';

const passwordRoutes = Router();

const sendForgotPassword = new SendForgotPasswordEmailController();
const resetPassword = new ResetPasswordController();

passwordRoutes.post(
  '/lost',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  sendForgotPassword.handle,
);

passwordRoutes.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required().min(6).max(32),
    },
  }),
  resetPassword.handle,
);

export { passwordRoutes };
