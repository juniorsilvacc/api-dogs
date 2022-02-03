import { IUserToken } from '../models/IUserToken';

interface IUserTokensRepository {
  findByToken(token: string): Promise<IUserToken | undefined>;
  generate(user_id: string): Promise<IUserToken>;
}

export { IUserTokensRepository };
