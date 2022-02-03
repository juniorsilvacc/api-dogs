import { ICreateUserDTO } from '@modules/users/domain/dtos/ICreateUserDTO';
import { IUser } from '@modules/users/domain/models/IUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ username, email, password }: ICreateUserDTO): Promise<IUser> {
    const user = this.repository.create({
      username,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<IUser | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async save(user: IUser): Promise<IUser> {
    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };
