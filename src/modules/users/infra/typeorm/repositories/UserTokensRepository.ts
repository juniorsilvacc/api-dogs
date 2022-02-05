import { IUserToken } from '@modules/users/domain/models/IUserToken';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = getRepository(UserToken);
  }

  async findByToken(token: string): Promise<IUserToken | undefined> {
    const userToken = await this.repository.findOne({ token });

    return userToken;
  }

  async generate(user_id: string): Promise<IUserToken> {
    const userToken = this.repository.create({
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };
