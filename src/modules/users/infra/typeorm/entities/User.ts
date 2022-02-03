import { IUser } from '@modules/users/domain/models/IUser';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
class User implements IUser {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
