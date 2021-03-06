import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { CreateDogController } from '../controllers/CreateDogController';
import { RemoveDogController } from '../controllers/RemoveDogController';
import { UploadDogImageController } from '../controllers/UploadDogImageController';

import multer from 'multer';
import uploadConfig from '@config/upload';
import { CreateCommentController } from '../controllers/CreateCommentController';
import { ListDogCommentsController } from '../controllers/ListDogCommentsController';
import { ListAllDogsController } from '../controllers/ListAllDogsController';

const dogsRoutes = Router();

const createDogController = new CreateDogController();
const removeDogController = new RemoveDogController();
const uploadDogImageController = new UploadDogImageController();
const createCommentController = new CreateCommentController();
const listDogCommentsController = new ListDogCommentsController();
const listAllDogsController = new ListAllDogsController();

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

dogsRoutes.post(
  '/comment/:id',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().required().uuid(),
      comment: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required().uuid(),
    },
  }),
  ensureAuthenticated,
  createCommentController.handle,
);

dogsRoutes.get('/home', ensureAuthenticated, listDogCommentsController.handle);

dogsRoutes.get('/', listAllDogsController.handle);

export { dogsRoutes };
