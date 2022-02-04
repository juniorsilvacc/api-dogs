import { IDog } from '@modules/dogs/domain/models/IDog';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('dogs')
class Dog implements IDog {
  @PrimaryColumn('uuid')
  id: string;

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
