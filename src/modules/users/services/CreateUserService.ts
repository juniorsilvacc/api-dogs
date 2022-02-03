import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IBcryptHashProvider } from '../providers/models/IBcryptHashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ username, email, password }: ICreateUserDTO): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Email address already used');
    }

    const hashPassword = await this.bcryptHashProvider.generateHash(password);

    const createUser = await this.usersRepository.create({
      username,
      email,
      password: hashPassword,
    });

    return createUser;
  }
}

export { CreateUserService };
