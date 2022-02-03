import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, email, password }: ICreateUserDTO): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Email address already used');
    }

    const createUser = await this.usersRepository.create({
      username,
      email,
      password,
    });

    return createUser;
  }
}

export { CreateUserService };
