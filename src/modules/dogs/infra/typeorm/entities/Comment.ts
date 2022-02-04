import { IComment } from '@modules/dogs/domain/models/IComment';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('comments')
class Comment implements IComment {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  comment: string;

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
