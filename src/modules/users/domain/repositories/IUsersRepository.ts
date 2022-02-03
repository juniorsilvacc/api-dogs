import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
}

export { IUsersRepository };
