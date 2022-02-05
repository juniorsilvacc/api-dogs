import { IComment } from '@modules/dogs/domain/models/IComment';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Dog } from './Dog';

@Entity('comments')
class Comment implements IComment {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  comment: string;

  @ManyToOne(() => Dog, dog => dog.comment)
  @JoinColumn({ name: 'dog_id' })
  dog: Dog;

  @Column()
  dog_id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Comment };
