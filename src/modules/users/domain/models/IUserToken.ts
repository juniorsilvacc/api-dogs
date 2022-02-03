import { User } from '@modules/users/infra/typeorm/entities/User';

interface IUserToken {
  id: string;
  token: string;
  user_id: string;
  user: User;
  created_at: Date;
}

export { IUserToken };
