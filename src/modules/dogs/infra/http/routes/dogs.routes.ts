import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { CreateDogController } from '../controllers/CreateDogController';
import { RemoveDogController } from '../controllers/RemoveDogController';
import { UploadDogImageController } from '../controllers/UploadDogImageController';

import multer from 'multer';
import uploadConfig from '@config/upload';

const dogsRoutes = Router();

const createDogController = new CreateDogController();
const removeDogController = new RemoveDogController();
const uploadDogImageController = new UploadDogImageController();

const uploadImages = multer(uploadConfig);

dogsRoutes.post(
  '/post',
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

dogsRoutes.delete(
  '/remove/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required().uuid(),
    },
  }),
  ensureAuthenticated,
  removeDogController.handle,
);

dogsRoutes.post(
  '/photo/:id',
  ensureAuthenticated,
  uploadImages.single('image'),
  uploadDogImageController.handle,
);

export { dogsRoutes };
