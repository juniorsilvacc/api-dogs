import { ICommentRepository } from '@modules/dogs/domain/repositories/ICommentRepository';
import { IDogImageRepository } from '@modules/dogs/domain/repositories/IDogImageRepository';
import { IDogRepository } from '@modules/dogs/domain/repositories/IDogRepository';
import { CommentRepository } from '@modules/dogs/infra/typeorm/repositories/CommentRepository';
import { DogImageRepository } from '@modules/dogs/infra/typeorm/repositories/DogImageRepository';
import { DogRepository } from '@modules/dogs/infra/typeorm/repositories/DogRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import '@modules/users/providers';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IDogRepository>('DogRepository', DogRepository);

container.registerSingleton<IDogImageRepository>(
  'DogImageRepository',
  DogImageRepository,
);

container.registerSingleton<ICommentRepository>(
  'CommentRepository',
  CommentRepository,
);
