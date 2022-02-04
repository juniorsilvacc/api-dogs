import { dogsRoutes } from '@modules/dogs/infra/http/routes/dogs.routes';
import { passwordRoutes } from '@modules/users/infra/http/routes/password.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('password', passwordRoutes);
routes.use('/dogs', dogsRoutes);

export { routes };
