import { dogsRoutes } from '@modules/dogs/infra/http/routes/dogs.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/login', usersRoutes);
routes.use('/photo', dogsRoutes);

export { routes };
