import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IUserTokensRepository } from '../domain/repositories/IUserTokensRepository';
import { IBcryptHashProvider } from '../providers/models/IBcryptHashProvider';

import { addHours, isAfter } from 'date-fns';

interface IRequest {
  password: string;
  token: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  async execute({ password, token }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists.', 404);
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists.', 404);
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 3);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.', 401);
    }

    user.password = await this.bcryptHashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export { ResetPasswordService };
