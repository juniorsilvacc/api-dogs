import { IUserToken } from '@modules/users/domain/models/IUserToken';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { User } from './User';

@Entity('user_tokens')
class UserToken implements IUserToken {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserToken };
