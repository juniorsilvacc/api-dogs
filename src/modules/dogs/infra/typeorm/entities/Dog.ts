import { IDog } from '@modules/dogs/domain/models/IDog';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Comment } from './Comment';

@Entity('dogs')
class Dog implements IDog {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @OneToMany(() => Comment, comment => comment.dog)
  comment: Comment[];

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  age: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Dog };
