import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { CreateDogController } from '../controllers/CreateDogController';

const dogsRoutes = Router();

const createDogController = new CreateDogController();

dogsRoutes.post(
  '/photo',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      weight: Joi.number().required(),
      age: Joi.number().required(),
    },
  }),
  ensureAuthenticated,
  createDogController.handle,
);

export { dogsRoutes };
