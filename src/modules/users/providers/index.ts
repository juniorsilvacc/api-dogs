import { container } from 'tsyringe';
import { BcryptHashProvider } from './implementations/BcryptHashProvider';
import { IBcryptHashProvider } from './models/IBcryptHashProvider';

container.registerSingleton<IBcryptHashProvider>(
  'BcryptHashProvider',
  BcryptHashProvider,
);
